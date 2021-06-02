/* eslint-disable prettier/prettier */
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
import styled from 'styled-components/native';

const botao = styled.TouchableHighlight`
    marginTop: 5;
    justifyContent: 'center';
    alignItems: 'center';
    backgroundColor: '#000';
    width: 250;
    height: 45;
    borderRadius: 25;
    marginBottom: 20;
`;


export default () => {
  const navegacao = useNavigation();

  return (
    <SafeAreaView style={style.container}>
      <Image style={style.imgBackground} source={imgLogin} />
      <Image style={style.logo} source={imgLogo} />

      <View style={style.selectOpt}>
        <TouchableOpacity style={style.containerCadastro}>
          <Text style={style.containerCadastroText}>PESCADOR</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.containerCadastro2}>
          <Text style={style.containerCadastroText}>BARQUEIRO</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
