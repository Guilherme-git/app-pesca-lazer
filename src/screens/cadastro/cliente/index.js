/* eslint-disable prettier/prettier */
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
import {Link, useNavigation} from '@react-navigation/native';
import style from './style.js';
import imgBackground from './../../../assets/CadastroCLI.jpeg';
import AbrirDrawer from './../../../components/abrirDrawer';

export default () => {
  const navegacao = useNavigation();

  return (
    <SafeAreaView style={style.container}>
      <Image style={style.imgBackground} source={imgBackground} />
      <AbrirDrawer title="CADASTRO" style={style.topdrawer} />
      <View style={style.containerTitulo}>
        <Text style={style.textTitulo}>
          CRIE SUA CONTA
        </Text>
      </View>
      <ScrollView>
      <View style={style.containerInput}>
        <TextInput
          style={style.input}
          placeholder="NOME COMPLETO"
          placeholderTextColor="#1c7acb"
        />
        <TextInput
          style={style.input}
          placeholder="E-MAIL"
          placeholderTextColor="#1c7acb"
        />
        <TextInput
          style={style.input}
          placeholder="CPF"
          placeholderTextColor="#1c7acb"
        />
        <TextInput
          style={style.input}
          placeholder="Nº DO ARRAIS"
          placeholderTextColor="#1c7acb"
        />
        <TextInput
          style={style.input}
          placeholder="DEFINA SUA SENHA"
          placeholderTextColor="#1c7acb"
          textAlign="right"
        />
      </View>
      </ScrollView>
      <View style={style.containerEntrar}>
        <TouchableOpacity style={style.botaoEntrar} onPress={() => navegacao.navigate('drawerCliente')}>
          <Text style={style.containerEntrarText}>➔</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
