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
import {Link, useNavigation} from '@react-navigation/native';
import style from './style.js';
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
          placeholder="Login:"
          placeholderTextColor="#000"
        />
        <TextInput
          style={style.input}
          placeholder="Senha:"
          placeholderTextColor="#000"
        />
      </View>

      <View style={style.containerDescricao}>
        <Text style={style.textDescricao}>
          Ainda não é cadastado?
          <Text onPress={() => navegacao.navigate('cadastro')}> CLIQUE AQUI</Text>
        </Text>

        <Text style={style.textDescricao} onPress={() => alert('aaaaa')}>
          Esqueci minha senha
        </Text>
      </View>

      <TouchableOpacity style={style.containerEntrar}>
        <Text style={style.containerEntrarText}>Entrar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
