import * as React from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Image,
  Vibration,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

class Principal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: '',
      senha: '',
    };
  }

  render() {
    return (
      <View style={styles.ContainerInput}>
        <Text style={styles.Label}>{'Usuário:'}</Text>
        <TextInput
          style={styles.TextInput}
          onChangeText={(texto) => this.setState({ usuario: texto })}
        />
        <Text style={styles.Label}>{'Senha:'}</Text>
        <TextInput
          style={styles.TextInput}
          secureTextEntry
          onChangeText={(texto) => this.setState({ senha: texto })}
        />
        <TouchableOpacity onPress={() => this.ler()} style={styles.ConfirmInput}>
          <Text>Logar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  async ler() {
    try {
      let senha = await AsyncStorage.getItem(this.state.usuario);
      if (senha != null) {
        if (senha == this.state.senha) {
          alert('Logado com sucesso');
          this.props.navigation.navigate('Calendario');
        } else {
          alert('Senha Incorreta!');
        }
      } else {
        alert('Usuário não foi encontrado!');
      }
    } catch (erro) {
      console.log(erro);
    }
  }
}

class Cadastro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: '',
    };
  }

  async gravar() {
    try {
      await AsyncStorage.setItem(this.state.user, this.state.password);
      alert('Salvo com sucesso!!!');
    } catch (erro) {
      alert('Erro!');
    }
  }

  render() {
    return (
      <View style={styles.ContainerInput}>
        <Text style={styles.Label}>{'Cadastrar Usuário:'}</Text>
        <TextInput
          style={styles.TextInput}
          onChangeText={(texto) => this.setState({ user: texto })}
        />
        <Text style={styles.Label}>{'Cadastrar Senha:'}</Text>
        <TextInput
          style={styles.TextInput}
          secureTextEntry
          onChangeText={(texto) => this.setState({ password: texto })}
        />
        <TouchableOpacity onPress={() => this.gravar()} style={styles.ConfirmInput}>
          <Text>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class Login extends React.Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Principal} />
        <Stack.Screen name="Calendario" component={Calendario} />
        <Stack.Screen name="Dia" component={Dia} />
        <Stack.Screen name="CadastraTarefa" component={CadastraTarefa} />
        <Stack.Screen name="ExibeTarefa" component={ExibeTarefa} />
        <Stack.Screen name="EditaTarefa" component={EditaTarefa} />
        <Stack.Screen name="TelaRelogio" options={{ headerLeft: null }} component={TelaRelogio} />
      </Stack.Navigator>
    );
  }
}

class Calendario extends React.Component {
  goToDia(dia) {
    this.props.navigation.navigate('Dia', { dia });
  }

  render() {
    return (
      <View style={styles.CalendarioContainer}>
        {[...Array(31).keys()].map((i) => (
          <TouchableOpacity
            key={i + 1}
            style={styles.CalendarioDia}
            onPress={() => this.goToDia(i + 1)}>
            <Text>{i + 1}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

class Dia extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tarefas: [],
    };
  }

  async carregarTarefas() {
    const { dia } = this.props.route.params;
    const tarefas =
      JSON.parse(await AsyncStorage.getItem(`tarefasDia${dia}`)) || [];
    this.setState({ tarefas });
  }

  componentDidMount() {
    this.carregarTarefas();
    this.focusListener = this.props.navigation.addListener('focus', () => {
      this.carregarTarefas();
    });
  }

  componentWillUnmount() {
    this.focusListener();
  }

  goToCadastraTarefa() {
    const { dia } = this.props.route.params;
    this.props.navigation.navigate('CadastraTarefa', { dia });
  }

  goToExibeTarefa(tarefa) {
    const { dia } = this.props.route.params;
    this.props.navigation.navigate('ExibeTarefa', { tarefa, dia });
  }

  render() {
    return (
      <View style={styles.ViewDia}>
        {this.state.tarefas.map((tarefa, index) => (
          <TouchableOpacity
            key={index}
            style={styles.TouchableOpacity}
            onPress={() => this.goToExibeTarefa(tarefa)}>
            <Text>{tarefa.titulo}</Text>
          </TouchableOpacity>
        ))}
        <View>
          <TouchableOpacity onPress={() => this.goToCadastraTarefa()} style={styles.ConfirmInput}>
            <MaterialCommunityIcons name="plus" color="black" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

class CadastraTarefa extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo: '',
      descricao: '',
      horario: '',
    };
  }

  async salvarTarefa() {
    const { titulo, descricao, horario } = this.state;
    const { dia } = this.props.route.params;

    if (titulo && descricao && horario) {
      let tarefasExistentes =
        JSON.parse(await AsyncStorage.getItem(`tarefasDia${dia}`)) || [];
      tarefasExistentes.push({ titulo, descricao, horario });

      await AsyncStorage.setItem(
        `tarefasDia${dia}`,
        JSON.stringify(tarefasExistentes)
      );
      alert('Tarefa salva com sucesso!');
      this.props.navigation.navigate('Dia', { dia });
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }

  render() {
    return (
      <View style={styles.ContainerInput}>
        <TextInput
          style={styles.TextInput}
          placeholder="Título"
          onChangeText={(texto) => this.setState({ titulo: texto })}
        />
        <TextInput
          style={styles.TextInput}
          placeholder="Descrição"
          onChangeText={(texto) => this.setState({ descricao: texto })}
        />
        <TextInput
          style={styles.TextInput}
          placeholder="Horário (HH:mm)"
          onChangeText={(texto) => this.setState({ horario: texto })}
        />
        <TouchableOpacity onPress={() => this.salvarTarefa()} style={styles.ConfirmInput}>
          <Text><MaterialCommunityIcons name="check" color="black" size={20} /></Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class ExibeTarefa extends React.Component {
  goToEditaTarefa(tarefa) {
    const { dia } = this.props.route.params;
    this.props.navigation.navigate('EditaTarefa', { tarefa, dia });
  }

  async deletarTarefa() {
    const { tarefa, dia } = this.props.route.params;
    let tarefas =
      JSON.parse(await AsyncStorage.getItem(`tarefasDia${dia}`)) || [];
    tarefas = tarefas.filter(
      (item) =>
        item.titulo !== tarefa.titulo ||
        item.descricao !== tarefa.descricao ||
        item.horario !== tarefa.horario
    );

    await AsyncStorage.setItem(`tarefasDia${dia}`, JSON.stringify(tarefas));
    alert('Tarefa excluída com sucesso!');
    this.props.navigation.navigate('Dia', { dia });
  }

  render() {
    const { tarefa } = this.props.route.params;

    return (
      <View style={styles.ExibeTarefaContainer}>
        <Text style={styles.Titulo}>{tarefa.titulo}</Text>
        <Text style={styles.Descricao}>{tarefa.descricao}</Text>
        <Text style={styles.Horario}>{`Horário: ${tarefa.horario}`}</Text>
        <View style={styles.TouchableOpacityContainer}>
          <TouchableOpacity
            onPress={() => this.goToEditaTarefa(tarefa)}
            style={styles.BotaoEditar}>
            <MaterialCommunityIcons name="pencil" color="white" size={24} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.deletarTarefa()} style={styles.BotaoLixeira}>
            <MaterialCommunityIcons name="trash-can" color="black" size={24} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

class EditaTarefa extends React.Component {
  constructor(props) {
    super(props);
    const { tarefa } = this.props.route.params;
    this.state = {
      titulo: tarefa.titulo,
      descricao: tarefa.descricao,
      horario: tarefa.horario,
      originalTarefa: tarefa,
    };
  }

  async salvarEdicao() {
    const { titulo, descricao, horario, originalTarefa } = this.state;
    const { dia } = this.props.route.params;

    let tarefas =
      JSON.parse(await AsyncStorage.getItem(`tarefasDia${dia}`)) || [];
    tarefas = tarefas.map((tarefa) => {
      if (
        tarefa.titulo === originalTarefa.titulo &&
        tarefa.descricao === originalTarefa.descricao &&
        tarefa.horario === originalTarefa.horario
      ) {
        return { titulo, descricao, horario };
      }
      return tarefa;
    });

    await AsyncStorage.setItem(`tarefasDia${dia}`, JSON.stringify(tarefas));
    alert('Tarefa editada com sucesso!');
    this.props.navigation.navigate('Dia', { dia });
  }

  render() {
    return (
      <View style={styles.ViewContainer}>
        <TextInput
          style={styles.InputEdicaoTarefa}
          value={this.state.titulo}
          onChangeText={(texto) => this.setState({ titulo: texto })}
        />
        <TextInput
          style={styles.InputEdicaoTarefa}
          value={this.state.descricao}
          onChangeText={(texto) => this.setState({ descricao: texto })}
        />
        <TextInput
          style={styles.InputEdicaoTarefa}
          value={this.state.horario}
          onChangeText={(texto) => this.setState({ horario: texto })}
          placeholder="Horário (HH:mm)"
        />
        <TouchableOpacity onPress={() => this.salvarEdicao()} style={styles.ConfirmInput}>
          <MaterialCommunityIcons name="check" color="black" size={24} />
        </TouchableOpacity>
      </View>
    );
  }
}

class TelaRelogio extends React.Component {
  async deletarTarefa() {
    const { dia, titulo, descricao, horario } = this.props.route.params;
    let tarefas =
      JSON.parse(await AsyncStorage.getItem(`tarefasDia${dia}`)) || [];
    tarefas = tarefas.filter(
      (item) =>
        item.titulo !== titulo ||
        item.descricao !== descricao ||
        item.horario !== horario
    );

    await AsyncStorage.setItem(`tarefasDia${dia}`, JSON.stringify(tarefas));
    this.props.navigation.navigate('Calendario');
    this.props.route.params.onTaskDeleted();
  }

  componentDidMount() {
    Vibration.vibrate([1000, 500, 1000]);
  }

  render() {
    const { titulo } = this.props.route.params;

    return (
      <View style={styles.ContainerTelaRelogio}>
        <Text style={styles.TxtTelaRelogio}>
          <Text>Hora de realizar a tarefa:</Text>
        </Text>
        <Text style={styles.TxtTelaRelogio}>
          <Text>{titulo}</Text>
        </Text>
        <Image
          source={require('./assets/relogio.jpg')}
          style={styles.ImgTelaRelogio}
        />
        <TouchableOpacity
          onPress={() => this.deletarTarefa()}
          style={styles.BotaoExcluir}>
          <MaterialCommunityIcons name="close" color="black" size={24} />
        </TouchableOpacity>
      </View>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tarefaExibida: false,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.verificarTarefas();
    }, 1000);  segundo
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  async verificarTarefas() {
    console.log(this.state.tarefaExibida);
    if (this.state.tarefaExibida) return;

    const agora = new Date();
    const horarioAtual = `${agora.getHours()}:${agora.getMinutes()}`;

    for (let dia = 1; dia <= 31; dia++) {
      const tarefas =
        JSON.parse(await AsyncStorage.getItem(`tarefasDia${dia}`)) || [];
      for (let i = 0; i < tarefas.length; i++) {
        if (tarefas[i].horario === horarioAtual) {
          this.setState({ tarefaExibida: true });
          this.navigator.navigate('TelaRelogio', {
            titulo: tarefas[i].titulo,
            descricao: tarefas[i].descricao,
            horario: tarefas[i].horario,
            dia,
            onTaskDeleted: () => this.setState({ tarefaExibida: false }),
          });
          break;
        }
      }
    }
  }

  render() {
    return (
      <NavigationContainer
        ref={(nav) => {
          this.navigator = nav;
        }}>
        <Tab.Navigator>
          <Tab.Screen
            name="Login"
            component={Login}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="login"
                  color={color}
                  size={size}
                />
              ),
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Criar Usuário"
            component={Cadastro}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="account-plus"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  Semana: {
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  ContainerInput: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  TextInput: {
    textAlign: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  Label: {
    fontSize: 18,
    marginBottom: 5,
  },
  ExibeTarefaContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  Titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  Descricao: {
    marginVertical: 10,
    fontSize: 16,
  },
  Horario: {
    marginVertical: 10,
    fontSize: 18,
    fontWeight: '600',
  },
  TouchableOpacityContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  TouchableOpacityExibeTarefa: {
    marginRight: 20,
  },
  ViewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  InputEdicaoTarefa: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    width: '80%',
  },
  ContainerTelaRelogio: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  TxtTelaRelogio: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  ImgTelaRelogio: {
    width: 150,
    height: 150,
  },
  BotaoEditar: {
    backgroundColor: '#004e98',
    borderRadius: 50,
    padding: 10,
  },
  BotaoLixeira: {
    backgroundColor: '#800f2f',
    borderRadius: 50,
    padding: 10,
  },
  BotaoExcluir: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: '#FFF',
    borderRadius: 50,
    padding: 10,
  },
  ViewDia: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  TouchableOpacity: {
    backgroundColor: '#FFF',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ConfirmInput: {
    padding: 15,
    justifyContent: 'center',
    backgroundColor: '#70e000',
    borderColor: '#transparent',
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 5,
    alignItems: 'center',
  },
  CalendarioContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10, 
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  CalendarioDia: {
    width: '13.5%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    margin: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2, 
  },
});

export default App;
