import * as React from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Card, Paragraph, Title } from 'react-native-paper';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

class Principal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: undefined,
      senha: undefined,
    };
  }

  render() {
    return (
      <View>
        <Text>{'Usuário:'}</Text>
        <TextInput
          onChangeText={(texto) =>
            this.setState({ usuario: texto })
          }></TextInput>
        <Text>{'Senha:'}</Text>
        <TextInput
          onChangeText={(texto) => this.setState({ senha: texto })}></TextInput>
        <Button title="Logar" onPress={() => this.ler()}></Button>
      </View>
    );
  }

  async ler() {
    try {
      let senha = await AsyncStorage.getItem(this.state.usuario);
      if (senha != null) {
        if (senha == this.state.senha) {
          alert('Logado com sucesso');
          this.props.navigation.navigate('Tarefas');
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
      user: undefined,
      password: undefined,
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
      <View>
        <Text>{'Cadastrar Usuário:'}</Text>
        <TextInput
          onChangeText={(texto) => this.setState({ user: texto })}></TextInput>
        <Text>{'Cadastrar Senha:'}</Text>
        <TextInput
          onChangeText={(texto) =>
            this.setState({ password: texto })
          }></TextInput>
        <Button title="Cadastrar" onPress={() => this.gravar()} />
      </View>
    );
  }
}

class Login extends React.Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Principal} />
        <Stack.Screen name="Tarefas" component={Tarefas} />
        <Stack.Screen name="Dia1" component={Dia1} />
        <Stack.Screen name="Dia2" component={Dia2} />
        <Stack.Screen name="Dia3" component={Dia3} />
        <Stack.Screen name="Dia4" component={Dia4} />
        <Stack.Screen name="Dia5" component={Dia5} />
        <Stack.Screen name="Dia6" component={Dia6} />
        <Stack.Screen name="Dia7" component={Dia7} />
        <Stack.Screen name="Dia8" component={Dia8} />
        <Stack.Screen name="Dia9" component={Dia9} />
        <Stack.Screen name="Dia10" component={Dia10} />
        <Stack.Screen name="Dia11" component={Dia11} />
        <Stack.Screen name="Dia12" component={Dia12} />
        <Stack.Screen name="Dia13" component={Dia13} />
        <Stack.Screen name="Dia14" component={Dia14} />
        <Stack.Screen name="Dia15" component={Dia15} />
        <Stack.Screen name="Dia16" component={Dia16} />
        <Stack.Screen name="Dia17" component={Dia17} />
        <Stack.Screen name="Dia18" component={Dia18} />
        <Stack.Screen name="Dia19" component={Dia19} />
        <Stack.Screen name="Dia20" component={Dia20} />
        <Stack.Screen name="Dia21" component={Dia21} />
        <Stack.Screen name="Dia22" component={Dia22} />
        <Stack.Screen name="Dia23" component={Dia23} />
        <Stack.Screen name="Dia24" component={Dia24} />
        <Stack.Screen name="Dia25" component={Dia25} />
        <Stack.Screen name="Dia26" component={Dia26} />
        <Stack.Screen name="Dia27" component={Dia27} />
        <Stack.Screen name="Dia28" component={Dia28} />
        <Stack.Screen name="Dia29" component={Dia29} />
        <Stack.Screen name="Dia30" component={Dia30} />
        <Stack.Screen name="Dia31" component={Dia31} />
        <Stack.Screen name="CadastraTarefa" component={CadastraTarefa} />
        <Stack.Screen name="ExibeTarefa" component={ExibeTarefa} />
        <Stack.Screen name="EditaTarefa" component={EditaTarefa} />
        <Stack.Screen name="TelaRelogio" component={TelaRelogio} />
      </Stack.Navigator>
    );
  }
}

class Tarefas extends React.Component {
  paginas = [
    'Dia1',
    'Dia2',
    'Dia3',
    'Dia4',
    'Dia5',
    'Dia6',
    'Dia7',
    'Dia8',
    'Dia9',
    'Dia10',
    'Dia11',
    'Dia12',
    'Dia13',
    'Dia14',
    'Dia15',
    'Dia16',
    'Dia17',
    'Dia18',
    'Dia19',
    'Dia20',
    'Dia21',
    'Dia22',
    'Dia23',
    'Dia24',
    'Dia25',
    'Dia26',
    'Dia27',
    'Dia28',
    'Dia29',
    'Dia30',
    'Dia31',
  ];

  goToDia(dia) {
    console.log(dia);
    this.props.navigation.navigate(this.paginas[dia - 1]);
  }
  render() {
    return (
      <View
        style={styles.Container}>
        <View
          style={styles.Semana}>
          <TouchableOpacity onPress={() => this.goToDia(1)}>1</TouchableOpacity>
          <TouchableOpacity onPress={() => this.goToDia(2)}>2</TouchableOpacity>
          <TouchableOpacity onPress={() => this.goToDia(3)}>3</TouchableOpacity>
          <TouchableOpacity onPress={() => this.goToDia(4)}>4</TouchableOpacity>
          <TouchableOpacity onPress={() => this.goToDia(5)}>5</TouchableOpacity>
          <TouchableOpacity onPress={() => this.goToDia(6)}>6</TouchableOpacity>
          <TouchableOpacity onPress={() => this.goToDia(7)}>7</TouchableOpacity>
        </View>
        <View
          style={styles.Semana}>
          <TouchableOpacity onPress={() => this.goToDia(8)}>8</TouchableOpacity>
          <TouchableOpacity onPress={() => this.goToDia(9)}>9</TouchableOpacity>
          <TouchableOpacity onPress={() => this.goToDia(10)}>
            10
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.goToDia(11)}>
            11
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.goToDia(12)}>
            12
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.goToDia(13)}>
            13
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.goToDia(14)}>
            14
          </TouchableOpacity>
        </View>
        <View
          style={styles.Semana}>
          <TouchableOpacity onPress={() => this.goToDia(15)}>
            15
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.goToDia(16)}>
            16
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.goToDia(17)}>
            17
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.goToDia(18)}>
            18
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.goToDia(19)}>
            19
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.goToDia(20)}>
            20
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.goToDia(21)}>
            21
          </TouchableOpacity>
        </View>
        <View
          style={styles.Semana}>
          <TouchableOpacity onPress={() => this.goToDia(22)}>
            22
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.goToDia(23)}>
            23
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.goToDia(24)}>
            24
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.goToDia(25)}>
            25
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.goToDia(26)}>
            26
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.goToDia(27)}>
            27
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.goToDia(28)}>
            28
          </TouchableOpacity>
        </View>
        <View
          style={styles.Semana}>
          <TouchableOpacity onPress={() => this.goToDia(29)}>
            29
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.goToDia(30)}>
            30
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.goToDia(31)}>
            31
          </TouchableOpacity>
          <TouchableOpacity></TouchableOpacity>
          <TouchableOpacity></TouchableOpacity>
          <TouchableOpacity></TouchableOpacity>
          <TouchableOpacity></TouchableOpacity>
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
      horario: '', // Novo campo para horário
    };
  }

  // Função para salvar a tarefa, incluindo o horário
  async salvarTarefa() {
    const { titulo, descricao, horario } = this.state;

    if (titulo && descricao && horario) {
      // Carrega as tarefas atuais e adiciona a nova
      let tarefasExistentes =
        JSON.parse(await AsyncStorage.getItem('tarefasDia1')) || [];
      tarefasExistentes.push({ titulo, descricao, horario });

      // Salva as tarefas atualizadas no AsyncStorage
      await AsyncStorage.setItem(
        'tarefasDia1',
        JSON.stringify(tarefasExistentes)
      );
      alert('Tarefa salva com sucesso!');

      // Retorna para a página Dia1
      this.props.navigation.navigate('Dia1');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }

  // Função para verificar se algum horário foi atingido
  verificarHorarioTarefas = () => {
    setInterval(async () => {
      let tarefasExistentes =
        JSON.parse(await AsyncStorage.getItem('tarefasDia1')) || [];

      const horaAtual = new Date();
      const horaFormatada = `${horaAtual.getHours()}:${horaAtual.getMinutes()}`;

      // Verifica se o horário de alguma tarefa foi atingido
      tarefasExistentes.forEach((tarefa) => {
        if (tarefa.horario === horaFormatada) {
          // Navega para a tela com a imagem do relógio e o título da tarefa
          this.props.navigation.navigate('TelaRelogio', {
            titulo: tarefa.titulo,
          });
        }
      });
    }, 60000); // Verifica a cada minuto
  };

  // Chama a verificação ao montar o componente
  componentDidMount() {
    this.verificarHorarioTarefas();
  }

  render() {
    return (
      <View style={styles.ContainerInput}>
        <TextInput
          style={TextInput}
          placeholder="Título"
          onChangeText={(texto) => this.setState({ titulo: texto })}
        />
        <TextInput
          style={TextInput}
          placeholder="Descrição"
          onChangeText={(texto) => this.setState({ descricao: texto })}
        />
        <TextInput
          style={TextInput}
          placeholder="Horário (HH:mm)"
          onChangeText={(texto) => this.setState({ horario: texto })}
        />
        <TouchableOpacity onPress={() => this.salvarTarefa()}>
          <MaterialCommunityIcons name="check" color="black" size={20} />
        </TouchableOpacity>
      </View>
    );
  }
}

class ExibeTarefa extends React.Component {
  goToEditaTarefa(tarefa) {
    this.props.navigation.navigate('EditaTarefa', { tarefa });
  }

  async deletarTarefa() {
    const { tarefa } = this.props.route.params;

    // Carrega as tarefas do AsyncStorage e remove a tarefa atual
    let tarefasDia1 =
      JSON.parse(await AsyncStorage.getItem('tarefasDia1')) || [];
    tarefasDia1 = tarefasDia1.filter(
      (item) =>
        !(
          item.titulo === tarefa.titulo &&
          item.descricao === tarefa.descricao &&
          item.horario === tarefa.horario
        )
    );

    await AsyncStorage.setItem('tarefasDia1', JSON.stringify(tarefasDia1));
    alert('Tarefa excluída com sucesso!');
    this.props.navigation.navigate('Dia1');
  }

  render() {
    const { tarefa } = this.props.route.params;

    return (
      <View style={styles.ExibeTarefaContainer}>
        <Text style={styles.Titulo}>
          {tarefa.titulo}
        </Text>
        <Text style={styles.Descricao}>{tarefa.descricao}</Text>
        <Text
          style={styles.Horario}>{`Horário: ${tarefa.horario}`}</Text>

        <View style={styles.TouchableOpacityContainer}>
          <TouchableOpacity
            onPress={() => this.goToEditaTarefa(tarefa)}
            style={styles.TouchableOpacityExibeTarefa}>
            <MaterialCommunityIcons name="pencil" color="black" size={24} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.deletarTarefa()}>
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
      horario: tarefa.horario, // Novo campo para horário
      originalTarefa: tarefa,
    };
  }

  async salvarEdicao() {
    const { titulo, descricao, horario, originalTarefa } = this.state;

    // Carrega todas as tarefas e atualiza a tarefa selecionada
    let tarefasDia1 =
      JSON.parse(await AsyncStorage.getItem('tarefasDia1')) || [];
    tarefasDia1 = tarefasDia1.map((tarefa) => {
      if (
        tarefa.titulo === originalTarefa.titulo &&
        tarefa.descricao === originalTarefa.descricao &&
        tarefa.horario === originalTarefa.horario
      ) {
        return { titulo, descricao, horario }; // Atualiza o horário também
      }
      return tarefa;
    });

    await AsyncStorage.setItem('tarefasDia1', JSON.stringify(tarefasDia1));
    alert('Tarefa editada com sucesso!');
    this.props.navigation.navigate('Dia1');
  }

  render() {
    return (
      <View style={ViewContainer}>
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
          style={{ textAlign: 'center', marginBottom: 20, fontSize: 18 }}
          value={this.state.horario}
          onChangeText={(texto) => this.setState({ horario: texto })}
          placeholder="Horário (HH:mm)"
        />
        <TouchableOpacity onPress={() => this.salvarEdicao()}>
          <MaterialCommunityIcons name="check" color="black" size={24} />
        </TouchableOpacity>
      </View>
    );
  }
}

class TelaRelogio extends React.Component {
  render() {
    const { titulo } = this.props.route.params; // Obtém o título da tarefa

    return (
      <View style={ContainerTelaRelogio}>
        <Text style={TxtTelaRelogio}>
          Hora de realizar a tarefa: {titulo}
        </Text>
        <Image
          source={require('./assets/relogio.png')} // Substitua com o caminho da imagem do relógio
          style={ImgTelaRelogio}
        />
      </View>
    );
  }
}

class Dia1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tarefas: [],
    };
  }

  async carregarTarefas() {
    const tarefasDia1 =
      JSON.parse(await AsyncStorage.getItem('tarefasDia1')) || [];
    this.setState({ tarefas: tarefasDia1 });
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
    this.props.navigation.navigate('CadastraTarefa');
  }

  goToExibeTarefa(tarefa) {
    this.props.navigation.navigate('ExibeTarefa', { tarefa });
  }

  render() {
    return (
      <View style={styles.ViewDia}>
        <View
          style={styles.BotaoPlus}>
          <TouchableOpacity onPress={() => this.goToCadastraTarefa()}>
            <MaterialCommunityIcons name="plus" color="black" size={20} />
          </TouchableOpacity>
        </View>

        {this.state.tarefas.map((tarefa, index) => (
          <TouchableOpacity
            key={index}
            style={styles.TouchableOpacity}
            onPress={() => this.goToExibeTarefa(tarefa)}>
            <Text>{tarefa.titulo}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

class Dia2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tarefas: [],
    };
  }

  async carregarTarefas() {
    const tarefasDia2 =
      JSON.parse(await AsyncStorage.getItem('tarefasDia2')) || [];
    this.setState({ tarefas: tarefasDia2 });
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
    this.props.navigation.navigate('CadastraTarefa');
  }

  goToExibeTarefa(tarefa) {
    this.props.navigation.navigate('ExibeTarefa', { tarefa });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View
          style={styles.BotaoPlus}>
          <TouchableOpacity onPress={() => this.goToCadastraTarefa()}>
            <MaterialCommunityIcons name="plus" color="black" size={20} />
          </TouchableOpacity>
        </View>

        {this.state.tarefas.map((tarefa, index) => (
          <TouchableOpacity
            key={index}
            style={styles.TouchableOpacity}
            onPress={() => this.goToExibeTarefa(tarefa)}>
            <Text>{tarefa.titulo}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

class Dia3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tarefas: [],
    };
  }

  async carregarTarefas() {
    const tarefasDia3 =
      JSON.parse(await AsyncStorage.getItem('tarefasDia3')) || [];
    this.setState({ tarefas: tarefasDia3 });
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
    this.props.navigation.navigate('CadastraTarefa');
  }

  goToExibeTarefa(tarefa) {
    this.props.navigation.navigate('ExibeTarefa', { tarefa });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View
          style={styles.BotaoPlus}>
          <TouchableOpacity onPress={() => this.goToCadastraTarefa()}>
            <MaterialCommunityIcons name="plus" color="black" size={20} />
          </TouchableOpacity>
        </View>

        {this.state.tarefas.map((tarefa, index) => (
          <TouchableOpacity
            key={index}
            style={styles.TouchableOpacity}
            onPress={() => this.goToExibeTarefa(tarefa)}>
            <Text>{tarefa.titulo}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

class Dia4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tarefas: [],
    };
  }

  async carregarTarefas() {
    const tarefasDia4 =
      JSON.parse(await AsyncStorage.getItem('tarefasDia4')) || [];
    this.setState({ tarefas: tarefasDia4 });
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
    this.props.navigation.navigate('CadastraTarefa');
  }

  goToExibeTarefa(tarefa) {
    this.props.navigation.navigate('ExibeTarefa', { tarefa });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View
          style={styles.BotaoPlus}>
          <TouchableOpacity onPress={() => this.goToCadastraTarefa()}>
            <MaterialCommunityIcons name="plus" color="black" size={20} />
          </TouchableOpacity>
        </View>

        {this.state.tarefas.map((tarefa, index) => (
          <TouchableOpacity
            key={index}
            style={styles.TouchableOpacity}
            onPress={() => this.goToExibeTarefa(tarefa)}>
            <Text>{tarefa.titulo}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

class Dia5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tarefas: [],
    };
  }

  async carregarTarefas() {
    const tarefasDia5 =
      JSON.parse(await AsyncStorage.getItem('tarefasDia5')) || [];
    this.setState({ tarefas: tarefasDia5 });
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
    this.props.navigation.navigate('CadastraTarefa');
  }

  goToExibeTarefa(tarefa) {
    this.props.navigation.navigate('ExibeTarefa', { tarefa });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View
          style={styles.BotaoPlus}>
          <TouchableOpacity onPress={() => this.goToCadastraTarefa()}>
            <MaterialCommunityIcons name="plus" color="black" size={20} />
          </TouchableOpacity>
        </View>

        {this.state.tarefas.map((tarefa, index) => (
          <TouchableOpacity
            key={index}
            style={styles.TouchableOpacity}
            onPress={() => this.goToExibeTarefa(tarefa)}>
            <Text>{tarefa.titulo}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

class Dia6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tarefas: [],
    };
  }

  async carregarTarefas() {
    const tarefasDia6 =
      JSON.parse(await AsyncStorage.getItem('tarefasDia6')) || [];
    this.setState({ tarefas: tarefasDia6 });
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
    this.props.navigation.navigate('CadastraTarefa');
  }

  goToExibeTarefa(tarefa) {
    this.props.navigation.navigate('ExibeTarefa', { tarefa });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View
          style={styles.BotaoPlus}>
          <TouchableOpacity onPress={() => this.goToCadastraTarefa()}>
            <MaterialCommunityIcons name="plus" color="black" size={20} />
          </TouchableOpacity>
        </View>

        {this.state.tarefas.map((tarefa, index) => (
          <TouchableOpacity
            key={index}
            style={styles.TouchableOpacity}
            onPress={() => this.goToExibeTarefa(tarefa)}>
            <Text>{tarefa.titulo}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

class Dia7 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tarefas: [],
    };
  }

  async carregarTarefas() {
    const tarefasDia7 =
      JSON.parse(await AsyncStorage.getItem('tarefasDia7')) || [];
    this.setState({ tarefas: tarefasDia7 });
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
    this.props.navigation.navigate('CadastraTarefa');
  }

  goToExibeTarefa(tarefa) {
    this.props.navigation.navigate('ExibeTarefa', { tarefa });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View
          style={styles.BotaoPlus}>
          <TouchableOpacity onPress={() => this.goToCadastraTarefa()}>
            <MaterialCommunityIcons name="plus" color="black" size={20} />
          </TouchableOpacity>
        </View>

        {this.state.tarefas.map((tarefa, index) => (
          <TouchableOpacity
            key={index}
            style={styles.TouchableOpacity}
            onPress={() => this.goToExibeTarefa(tarefa)}>
            <Text>{tarefa.titulo}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

class Dia8 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tarefas: [],
    };
  }

  async carregarTarefas() {
    const tarefasDia8 =
      JSON.parse(await AsyncStorage.getItem('tarefasDia8')) || [];
    this.setState({ tarefas: tarefasDia8 });
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
    this.props.navigation.navigate('CadastraTarefa');
  }

  goToExibeTarefa(tarefa) {
    this.props.navigation.navigate('ExibeTarefa', { tarefa });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View
          style={styles.BotaoPlus}>
          <TouchableOpacity onPress={() => this.goToCadastraTarefa()}>
            <MaterialCommunityIcons name="plus" color="black" size={20} />
          </TouchableOpacity>
        </View>

        {this.state.tarefas.map((tarefa, index) => (
          <TouchableOpacity
            key={index}
            style={styles.TouchableOpacity}
            onPress={() => this.goToExibeTarefa(tarefa)}>
            <Text>{tarefa.titulo}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

class Dia9 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tarefas: [],
    };
  }

  async carregarTarefas() {
    const tarefasDia9 =
      JSON.parse(await AsyncStorage.getItem('tarefasDia9')) || [];
    this.setState({ tarefas: tarefasDia9 });
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
    this.props.navigation.navigate('CadastraTarefa');
  }

  goToExibeTarefa(tarefa) {
    this.props.navigation.navigate('ExibeTarefa', { tarefa });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View
          style={styles.BotaoPlus}>
          <TouchableOpacity onPress={() => this.goToCadastraTarefa()}>
            <MaterialCommunityIcons name="plus" color="black" size={20} />
          </TouchableOpacity>
        </View>

        {this.state.tarefas.map((tarefa, index) => (
          <TouchableOpacity
            key={index}
            style={styles.TouchableOpacity}
            onPress={() => this.goToExibeTarefa(tarefa)}>
            <Text>{tarefa.titulo}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

class Dia10 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tarefas: [],
    };
  }

  async carregarTarefas() {
    const tarefasDia10 =
      JSON.parse(await AsyncStorage.getItem('tarefasDia10')) || [];
    this.setState({ tarefas: tarefasDia10 });
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
    this.props.navigation.navigate('CadastraTarefa');
  }

  goToExibeTarefa(tarefa) {
    this.props.navigation.navigate('ExibeTarefa', { tarefa });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View
          style={styles.BotaoPlus}>
          <TouchableOpacity onPress={() => this.goToCadastraTarefa()}>
            <MaterialCommunityIcons name="plus" color="black" size={20} />
          </TouchableOpacity>
        </View>

        {this.state.tarefas.map((tarefa, index) => (
          <TouchableOpacity
            key={index}
            style={styles.TouchableOpacity}
            onPress={() => this.goToExibeTarefa(tarefa)}>
            <Text>{tarefa.titulo}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

class Dia11 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tarefas: [],
    };
  }

  async carregarTarefas() {
    const tarefasDia11 =
      JSON.parse(await AsyncStorage.getItem('tarefasDia11')) || [];
    this.setState({ tarefas: tarefasDia11 });
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
    this.props.navigation.navigate('CadastraTarefa');
  }

  goToExibeTarefa(tarefa) {
    this.props.navigation.navigate('ExibeTarefa', { tarefa });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View
          style={styles.BotaoPlus}>
          <TouchableOpacity onPress={() => this.goToCadastraTarefa()}>
            <MaterialCommunityIcons name="plus" color="black" size={20} />
          </TouchableOpacity>
        </View>

        {this.state.tarefas.map((tarefa, index) => (
          <TouchableOpacity
            key={index}
            style={styles.TouchableOpacity}
            onPress={() => this.goToExibeTarefa(tarefa)}>
            <Text>{tarefa.titulo}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

class Dia12 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tarefas: [],
    };
  }

  async carregarTarefas() {
    const tarefasDia12 =
      JSON.parse(await AsyncStorage.getItem('tarefasDia12')) || [];
    this.setState({ tarefas: tarefasDia12 });
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
    this.props.navigation.navigate('CadastraTarefa');
  }

  goToExibeTarefa(tarefa) {
    this.props.navigation.navigate('ExibeTarefa', { tarefa });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View
          style={styles.BotaoPlus}>
          <TouchableOpacity onPress={() => this.goToCadastraTarefa()}>
            <MaterialCommunityIcons name="plus" color="black" size={20} />
          </TouchableOpacity>
        </View>

        {this.state.tarefas.map((tarefa, index) => (
          <TouchableOpacity
            key={index}
            style={styles.TouchableOpacity}
            onPress={() => this.goToExibeTarefa(tarefa)}>
            <Text>{tarefa.titulo}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

class Dia13 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tarefas: [],
    };
  }

  async carregarTarefas() {
    const tarefasDia13 =
      JSON.parse(await AsyncStorage.getItem('tarefasDia13')) || [];
    this.setState({ tarefas: tarefasDia13 });
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
    this.props.navigation.navigate('CadastraTarefa');
  }

  goToExibeTarefa(tarefa) {
    this.props.navigation.navigate('ExibeTarefa', { tarefa });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View
          style={styles.BotaoPlus}>
          <TouchableOpacity onPress={() => this.goToCadastraTarefa()}>
            <MaterialCommunityIcons name="plus" color="black" size={20} />
          </TouchableOpacity>
        </View>

        {this.state.tarefas.map((tarefa, index) => (
          <TouchableOpacity
            key={index}
            style={styles.TouchableOpacity}
            onPress={() => this.goToExibeTarefa(tarefa)}>
            <Text>{tarefa.titulo}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

class Dia14 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tarefas: [],
    };
  }

  async carregarTarefas() {
    const tarefasDia14 =
      JSON.parse(await AsyncStorage.getItem('tarefasDia14')) || [];
    this.setState({ tarefas: tarefasDia14 });
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
    this.props.navigation.navigate('CadastraTarefa');
  }

  goToExibeTarefa(tarefa) {
    this.props.navigation.navigate('ExibeTarefa', { tarefa });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View
          style={styles.BotaoPlus}>
          <TouchableOpacity onPress={() => this.goToCadastraTarefa()}>
            <MaterialCommunityIcons name="plus" color="black" size={20} />
          </TouchableOpacity>
        </View>

        {this.state.tarefas.map((tarefa, index) => (
          <TouchableOpacity
            key={index}
            style={styles.TouchableOpacity}
            onPress={() => this.goToExibeTarefa(tarefa)}>
            <Text>{tarefa.titulo}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

class Dia15 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tarefas: [],
    };
  }

  async carregarTarefas() {
    const tarefasDia15 =
      JSON.parse(await AsyncStorage.getItem('tarefasDia15')) || [];
    this.setState({ tarefas: tarefasDia15 });
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
    this.props.navigation.navigate('CadastraTarefa');
  }

  goToExibeTarefa(tarefa) {
    this.props.navigation.navigate('ExibeTarefa', { tarefa });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View
          style={styles.BotaoPlus}>
          <TouchableOpacity onPress={() => this.goToCadastraTarefa()}>
            <MaterialCommunityIcons name="plus" color="black" size={20} />
          </TouchableOpacity>
        </View>

        {this.state.tarefas.map((tarefa, index) => (
          <TouchableOpacity
            key={index}
            style={styles.TouchableOpacity}
            onPress={() => this.goToExibeTarefa(tarefa)}>
            <Text>{tarefa.titulo}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

class Dia16 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tarefas: [],
    };
  }

  async carregarTarefas() {
    const tarefasDia16 =
      JSON.parse(await AsyncStorage.getItem('tarefasDia16')) || [];
    this.setState({ tarefas: tarefasDia16 });
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
    this.props.navigation.navigate('CadastraTarefa');
  }

  goToExibeTarefa(tarefa) {
    this.props.navigation.navigate('ExibeTarefa', { tarefa });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View
          style={styles.BotaoPlus}>
          <TouchableOpacity onPress={() => this.goToCadastraTarefa()}>
            <MaterialCommunityIcons name="plus" color="black" size={20} />
          </TouchableOpacity>
        </View>

        {this.state.tarefas.map((tarefa, index) => (
          <TouchableOpacity
            key={index}
            style={styles.TouchableOpacity}
            onPress={() => this.goToExibeTarefa(tarefa)}>
            <Text>{tarefa.titulo}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

class Dia17 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tarefas: [],
    };
  }

  async carregarTarefas() {
    const tarefasDia17 =
      JSON.parse(await AsyncStorage.getItem('tarefasDia17')) || [];
    this.setState({ tarefas: tarefasDia17 });
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
    this.props.navigation.navigate('CadastraTarefa');
  }

  goToExibeTarefa(tarefa) {
    this.props.navigation.navigate('ExibeTarefa', { tarefa });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View
          style={styles.BotaoPlus}>
          <TouchableOpacity onPress={() => this.goToCadastraTarefa()}>
            <MaterialCommunityIcons name="plus" color="black" size={20} />
          </TouchableOpacity>
        </View>

        {this.state.tarefas.map((tarefa, index) => (
          <TouchableOpacity
            key={index}
            style={styles.TouchableOpacity}
            onPress={() => this.goToExibeTarefa(tarefa)}>
            <Text>{tarefa.titulo}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

class Dia18 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tarefas: [],
    };
  }

  async carregarTarefas() {
    const tarefasDia18 =
      JSON.parse(await AsyncStorage.getItem('tarefasDia18')) || [];
    this.setState({ tarefas: tarefasDia18 });
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
    this.props.navigation.navigate('CadastraTarefa');
  }

  goToExibeTarefa(tarefa) {
    this.props.navigation.navigate('ExibeTarefa', { tarefa });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View
          style={styles.BotaoPlus}>
          <TouchableOpacity onPress={() => this.goToCadastraTarefa()}>
            <MaterialCommunityIcons name="plus" color="black" size={20} />
          </TouchableOpacity>
        </View>

        {this.state.tarefas.map((tarefa, index) => (
          <TouchableOpacity
            key={index}
            style={styles.TouchableOpacity}
            onPress={() => this.goToExibeTarefa(tarefa)}>
            <Text>{tarefa.titulo}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

class Dia19 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tarefas: [],
    };
  }

  async carregarTarefas() {
    const tarefasDia19 =
      JSON.parse(await AsyncStorage.getItem('tarefasDia19')) || [];
    this.setState({ tarefas: tarefasDia19 });
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
    this.props.navigation.navigate('CadastraTarefa');
  }

  goToExibeTarefa(tarefa) {
    this.props.navigation.navigate('ExibeTarefa', { tarefa });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View
          style={styles.BotaoPlus}>
          <TouchableOpacity onPress={() => this.goToCadastraTarefa()}>
            <MaterialCommunityIcons name="plus" color="black" size={20} />
          </TouchableOpacity>
        </View>

        {this.state.tarefas.map((tarefa, index) => (
          <TouchableOpacity
            key={index}
            style={styles.TouchableOpacity}
            onPress={() => this.goToExibeTarefa(tarefa)}>
            <Text>{tarefa.titulo}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

class Dia20 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tarefas: [],
    };
  }

  async carregarTarefas() {
    const tarefasDia20 =
      JSON.parse(await AsyncStorage.getItem('tarefasDia20')) || [];
    this.setState({ tarefas: tarefasDia20 });
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
    this.props.navigation.navigate('CadastraTarefa');
  }

  goToExibeTarefa(tarefa) {
    this.props.navigation.navigate('ExibeTarefa', { tarefa });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View
          style={styles.BotaoPlus}>
          <TouchableOpacity onPress={() => this.goToCadastraTarefa()}>
            <MaterialCommunityIcons name="plus" color="black" size={20} />
          </TouchableOpacity>
        </View>

        {this.state.tarefas.map((tarefa, index) => (
          <TouchableOpacity
            key={index}
            style={styles.TouchableOpacity}
            onPress={() => this.goToExibeTarefa(tarefa)}>
            <Text>{tarefa.titulo}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

class Dia21 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tarefas: [],
    };
  }

  async carregarTarefas() {
    const tarefasDia21 =
      JSON.parse(await AsyncStorage.getItem('tarefasDia21')) || [];
    this.setState({ tarefas: tarefasDia21 });
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
    this.props.navigation.navigate('CadastraTarefa');
  }

  goToExibeTarefa(tarefa) {
    this.props.navigation.navigate('ExibeTarefa', { tarefa });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View
          style={styles.BotaoPlus}>
          <TouchableOpacity onPress={() => this.goToCadastraTarefa()}>
            <MaterialCommunityIcons name="plus" color="black" size={20} />
          </TouchableOpacity>
        </View>

        {this.state.tarefas.map((tarefa, index) => (
          <TouchableOpacity
            key={index}
            style={styles.TouchableOpacity}
            onPress={() => this.goToExibeTarefa(tarefa)}>
            <Text>{tarefa.titulo}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

class Dia22 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tarefas: [],
    };
  }

  async carregarTarefas() {
    const tarefasDia22 =
      JSON.parse(await AsyncStorage.getItem('tarefasDia22')) || [];
    this.setState({ tarefas: tarefasDia22 });
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
    this.props.navigation.navigate('CadastraTarefa');
  }

  goToExibeTarefa(tarefa) {
    this.props.navigation.navigate('ExibeTarefa', { tarefa });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View
          style={styles.BotaoPlus}>
          <TouchableOpacity onPress={() => this.goToCadastraTarefa()}>
            <MaterialCommunityIcons name="plus" color="black" size={20} />
          </TouchableOpacity>
        </View>

        {this.state.tarefas.map((tarefa, index) => (
          <TouchableOpacity
            key={index}
            style={styles.TouchableOpacity}
            onPress={() => this.goToExibeTarefa(tarefa)}>
            <Text>{tarefa.titulo}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

class Dia23 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tarefas: [],
    };
  }

  async carregarTarefas() {
    const tarefasDia23 =
      JSON.parse(await AsyncStorage.getItem('tarefasDia23')) || [];
    this.setState({ tarefas: tarefasDia23 });
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
    this.props.navigation.navigate('CadastraTarefa');
  }

  goToExibeTarefa(tarefa) {
    this.props.navigation.navigate('ExibeTarefa', { tarefa });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View
          style={styles.BotaoPlus}>
          <TouchableOpacity onPress={() => this.goToCadastraTarefa()}>
            <MaterialCommunityIcons name="plus" color="black" size={20} />
          </TouchableOpacity>
        </View>

        {this.state.tarefas.map((tarefa, index) => (
          <TouchableOpacity
            key={index}
            style={styles.TouchableOpacity}
            onPress={() => this.goToExibeTarefa(tarefa)}>
            <Text>{tarefa.titulo}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

class Dia24 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tarefas: [],
    };
  }

  async carregarTarefas() {
    const tarefasDia24 =
      JSON.parse(await AsyncStorage.getItem('tarefasDia24')) || [];
    this.setState({ tarefas: tarefasDia24 });
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
    this.props.navigation.navigate('CadastraTarefa');
  }

  goToExibeTarefa(tarefa) {
    this.props.navigation.navigate('ExibeTarefa', { tarefa });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View
          style={styles.BotaoPlus}>
          <TouchableOpacity onPress={() => this.goToCadastraTarefa()}>
            <MaterialCommunityIcons name="plus" color="black" size={20} />
          </TouchableOpacity>
        </View>

        {this.state.tarefas.map((tarefa, index) => (
          <TouchableOpacity
            key={index}
            style={styles.TouchableOpacity}
            onPress={() => this.goToExibeTarefa(tarefa)}>
            <Text>{tarefa.titulo}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

class Dia25 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tarefas: [],
    };
  }

  async carregarTarefas() {
    const tarefasDia25 =
      JSON.parse(await AsyncStorage.getItem('tarefasDia25')) || [];
    this.setState({ tarefas: tarefasDia25 });
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
    this.props.navigation.navigate('CadastraTarefa');
  }

  goToExibeTarefa(tarefa) {
    this.props.navigation.navigate('ExibeTarefa', { tarefa });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View
          style={styles.BotaoPlus}>
          <TouchableOpacity onPress={() => this.goToCadastraTarefa()}>
            <MaterialCommunityIcons name="plus" color="black" size={20} />
          </TouchableOpacity>
        </View>

        {this.state.tarefas.map((tarefa, index) => (
          <TouchableOpacity
            key={index}
            style={styles.TouchableOpacity}
            onPress={() => this.goToExibeTarefa(tarefa)}>
            <Text>{tarefa.titulo}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

class Dia26 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tarefas: [],
    };
  }

  async carregarTarefas() {
    const tarefasDia26 =
      JSON.parse(await AsyncStorage.getItem('tarefasDia26')) || [];
    this.setState({ tarefas: tarefasDia26 });
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
    this.props.navigation.navigate('CadastraTarefa');
  }

  goToExibeTarefa(tarefa) {
    this.props.navigation.navigate('ExibeTarefa', { tarefa });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View
          style={styles.BotaoPlus}>
          <TouchableOpacity onPress={() => this.goToCadastraTarefa()}>
            <MaterialCommunityIcons name="plus" color="black" size={20} />
          </TouchableOpacity>
        </View>

        {this.state.tarefas.map((tarefa, index) => (
          <TouchableOpacity
            key={index}
            style={styles.TouchableOpacity}
            onPress={() => this.goToExibeTarefa(tarefa)}>
            <Text>{tarefa.titulo}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

class Dia27 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tarefas: [],
    };
  }

  async carregarTarefas() {
    const tarefasDia27 =
      JSON.parse(await AsyncStorage.getItem('tarefasDia27')) || [];
    this.setState({ tarefas: tarefasDia27 });
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
    this.props.navigation.navigate('CadastraTarefa');
  }

  goToExibeTarefa(tarefa) {
    this.props.navigation.navigate('ExibeTarefa', { tarefa });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View
          style={styles.BotaoPlus}>
          <TouchableOpacity onPress={() => this.goToCadastraTarefa()}>
            <MaterialCommunityIcons name="plus" color="black" size={20} />
          </TouchableOpacity>
        </View>

        {this.state.tarefas.map((tarefa, index) => (
          <TouchableOpacity
            key={index}
            style={styles.TouchableOpacity}
            onPress={() => this.goToExibeTarefa(tarefa)}>
            <Text>{tarefa.titulo}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

class Dia28 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tarefas: [],
    };
  }

  async carregarTarefas() {
    const tarefasDia28 =
      JSON.parse(await AsyncStorage.getItem('tarefasDia28')) || [];
    this.setState({ tarefas: tarefasDia28 });
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
    this.props.navigation.navigate('CadastraTarefa');
  }

  goToExibeTarefa(tarefa) {
    this.props.navigation.navigate('ExibeTarefa', { tarefa });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View
          style={styles.BotaoPlus}>
          <TouchableOpacity onPress={() => this.goToCadastraTarefa()}>
            <MaterialCommunityIcons name="plus" color="black" size={20} />
          </TouchableOpacity>
        </View>

        {this.state.tarefas.map((tarefa, index) => (
          <TouchableOpacity
            key={index}
            style={styles.TouchableOpacity}
            onPress={() => this.goToExibeTarefa(tarefa)}>
            <Text>{tarefa.titulo}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

class Dia29 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tarefas: [],
    };
  }

  async carregarTarefas() {
    const tarefasDia29 =
      JSON.parse(await AsyncStorage.getItem('tarefasDia29')) || [];
    this.setState({ tarefas: tarefasDia29 });
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
    this.props.navigation.navigate('CadastraTarefa');
  }

  goToExibeTarefa(tarefa) {
    this.props.navigation.navigate('ExibeTarefa', { tarefa });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View
          style={styles.BotaoPlus}>
          <TouchableOpacity onPress={() => this.goToCadastraTarefa()}>
            <MaterialCommunityIcons name="plus" color="black" size={20} />
          </TouchableOpacity>
        </View>

        {this.state.tarefas.map((tarefa, index) => (
          <TouchableOpacity
            key={index}
            style={styles.TouchableOpacity}
            onPress={() => this.goToExibeTarefa(tarefa)}>
            <Text>{tarefa.titulo}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

class Dia30 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tarefas: [],
    };
  }

  async carregarTarefas() {
    const tarefasDia30 =
      JSON.parse(await AsyncStorage.getItem('tarefasDia30')) || [];
    this.setState({ tarefas: tarefasDia30 });
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
    this.props.navigation.navigate('CadastraTarefa');
  }

  goToExibeTarefa(tarefa) {
    this.props.navigation.navigate('ExibeTarefa', { tarefa });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View
          style={styles.BotaoPlus}>
          <TouchableOpacity onPress={() => this.goToCadastraTarefa()}>
            <MaterialCommunityIcons name="plus" color="black" size={20} />
          </TouchableOpacity>
        </View>

        {this.state.tarefas.map((tarefa, index) => (
          <TouchableOpacity
            key={index}
            style={styles.TouchableOpacity}
            onPress={() => this.goToExibeTarefa(tarefa)}>
            <Text>{tarefa.titulo}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

class Dia31 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tarefas: [],
    };
  }

  async carregarTarefas() {
    const tarefasDia31 =
      JSON.parse(await AsyncStorage.getItem('tarefasDia31')) || [];
    this.setState({ tarefas: tarefasDia31 });
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
    this.props.navigation.navigate('CadastraTarefa');
  }

  goToExibeTarefa(tarefa) {
    this.props.navigation.navigate('ExibeTarefa', { tarefa });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View
          style={styles.BotaoPlus}>
          <TouchableOpacity onPress={() => this.goToCadastraTarefa()}>
            <MaterialCommunityIcons name="plus" color="black" size={20} />
          </TouchableOpacity>
        </View>

        {this.state.tarefas.map((tarefa, index) => (
          <TouchableOpacity
            key={index}
            style={styles.TouchableOpacity}
            onPress={() => this.goToExibeTarefa(tarefa)}>
            <Text>{tarefa.titulo}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
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
    padding: 20 
  },
  TextInput: { 
    textAlign: 'center', 
    marginBottom: 10 
  },
  ExibeTarefaContainer: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  Titulo : { 
    fontSize: 24, 
    fontWeight: 'bold' 
  },
  Descricao: { 
    marginVertical: 10
  },
  Horario: {
    marginVertical: 10,
    fontSize: 18,
    fontWeight: '600',
  },
  TouchableOpacityContainer: { 
    flexDirection: 'row', 
    marginTop: 20 
  },
  TouchableOpacityExibeTarefa: { 
    marginRight: 20 
  },
  ViewContainer: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  InputEdicaoTarefa: { 
    textAlign: 'center', 
    marginBottom: 10, 
    fontSize: 18 
  },
  ContainerTelaRelogio: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  TxtTelaRelogio: { 
    fontSize: 24, 
    marginBottom: 20 
  },
  ImgTelaRelogio: { 
    width: 150, 
    height: 150 
  },
  ViewDia: { 
    flex: 1, 
    justifyContent: 'center'
  },
  BotaoPlus: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: '100',
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
});
export default App;
