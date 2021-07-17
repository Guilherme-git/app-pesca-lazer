import React from 'react';
import {
  Text,
  Image,
  SafeAreaView,
  TextInput,
  View,
  TouchableOpacity,
  TouchableHighlight,
  ColorPropType,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import style from './style';
import imgLogin from './../../assets/login.jpg';
import imgLogo from './../../assets/logo.png';

export default () => {
  const navegacao = useNavigation();

  return (
    <SafeAreaView style={style.container}>
      <Image style={style.imgBackground} source={imgLogin} />
      <Image style={style.logo} source={imgLogo} />

      <View style={style.selectOpt}>
        <TouchableOpacity style={style.containerCadastro} onPress={() => navegacao.navigate('CadastroCliente')}>
          <Text style={style.containerCadastroText}>PESCADOR</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.containerCadastro2} onPress={() => navegacao.navigate('CdtBarco1')}>
          <Text style={style.containerCadastroText}>BARQUEIRO</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
