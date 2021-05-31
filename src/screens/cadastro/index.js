/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Text,
  Image,
  SafeAreaView,
  TextInput,
  View,
  TouchableOpacity,
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

      <View style={style.containerInput}>
        <TextInput
          style={style.input}
          placeholder="Nome:"
          placeholderTextColor="#000"
        />
        <TextInput
          style={style.input}
          placeholder="Login:"
          placeholderTextColor="#000"
        />
        <TextInput
          style={style.input}
          placeholder="Senha:"
          placeholderTextColor="#000"
        />
      </View>

      <TouchableOpacity style={style.containerCadastro}>
        <Text style={style.containerCadastroText}>CADASTRAR</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
