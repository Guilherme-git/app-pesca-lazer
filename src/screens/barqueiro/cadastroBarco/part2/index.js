import React from 'react';
import {
  Text,
  Image,
  SafeAreaView,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import style from './style';
import imgBackground from './../../../../assets/CadastroCLI.jpeg';
import imgPlus from './../../../../assets/plus.png';
import AbrirDrawer from './../../../../components/abrirDrawer';
import Icon from 'react-native-vector-icons/FontAwesome';

const myButton = (
  <Icon.Button
    name="plus"
    onPress={this.adcFotos}
  />
);

export default () => {
  const navegacao = useNavigation();


  return (
    <SafeAreaView style={style.container}>
      <Image style={style.imgBackground} source={imgBackground} />
      <AbrirDrawer title="CADASTRO" style={style.topdrawer} />
      <View style={style.containerTitulo}>
        <Text style={style.textTitulo}>
          CADASTRE SEU BARCO 2/2
        </Text>
      </View>

      <View style={style.containerSimp}>
        <View>
          <Text style={style.textSimp}>
            FAÇA O UPLOAD DOS SEUS DOCUMENTOS
          </Text>
        </View>
        <ScrollView horizontal={true}>
              <View style={style.cardBarco}>
              </View>
              <View style={style.cardBarco}>
              </View>
              <View style={style.cardPlus}>
                {/* <Image style={style.plus} source={imgPlus} />*/}
                <Icon.Button name="plus" backgroundColor="" padding={0} borderRadius={25} size={80}/>
              </View>
        </ScrollView>
      </View>

      <View style={style.containerSimp}>
        <View>
          <Text style={style.textSimp}>
            MOSTRE SEU BARCO PARA SEUS CLIENTES
          </Text>
        </View>
        <ScrollView horizontal={true}>
              <View style={style.cardBarco}>
              </View>
              <View style={style.cardBarco}>
              </View>
              <View style={style.cardPlus}>
                {/* <Image style={style.plus} source={imgPlus} />*/}
                <Icon.Button name="plus" backgroundColor="" padding={0} borderRadius={25} size={80}/>
              </View>
        </ScrollView>
      </View>

      <View style={style.containerSimp}>
        <View>
          <Text style={style.textSimp2}>
            SELECIONE OS DIFERENCIAIS FORNECIDOS
          </Text>
        </View>
        <ScrollView horizontal={true}>
          <View>
            <TouchableOpacity style={style.botaoSelect}>
              <Text style={style.containerSelectText}>SELECIONE</Text>
            </TouchableOpacity>
          </View>
          <View style={style.cBotaoMSelect}>
            <Icon.Button name="plus" color="#1c7acb" backgroundColor=""
            borderRadius={150} size={25} iconStyle={{alignItems:'center', alignContent:'center'}}
            style={style.botaoMSelect}/>
          </View>
        </ScrollView>
      </View>
      <ScrollView/>
      <View style={style.containerProx}>
        <TouchableOpacity style={style.botaoProx} onPress={() => navegacao.navigate('drawerBarqueiro')}>
          <Text style={style.containerProxText}>FINALIZAR</Text>
        </TouchableOpacity>
      </View>
      </SafeAreaView>
  );
};

