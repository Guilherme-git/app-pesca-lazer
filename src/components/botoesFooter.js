/* eslint-disable prettier/prettier */
import React,{useState} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default () => {
  const navigation = useNavigation();
  return (
    <View>
      <ScrollView horizontal={true}>
        <View style={style.containerBotao}>
          <TouchableOpacity style={style.botao}>
            <Image
              style={style.image}
              source={require('../assets/icon-agenda.png')}
            />
            <Text style={style.textoBotao}>Agenda</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('pesquisa cliente')}
            style={style.botao}>
            <Image
              style={style.image}
              source={require('../assets/icon-pesquisa.png')}
            />
            <Text style={style.textoBotao}>Pesquisa</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.botao}>
            <Image
              style={style.image}
              source={require('../assets/icon-mensagem.png')}
            />
            <Text style={style.textoBotao}>Mensagem</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.botao}>
            <Image
              style={style.image}
              source={require('../assets/icon-perfil.png')}
            />
            <Text style={style.textoBotao}>Perfil</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  containerBotao: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
  },
  image: {
    alignSelf: 'center',
  },
  botao: {
    backgroundColor: '#70A6AE',
    height: 80,
    padding: 10,
    borderRadius: 20,
    width: 100,
    margin: 5,
  },
  textoBotao: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 5,
  },
});
