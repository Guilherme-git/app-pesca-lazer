/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  imgBackground: {
    flex: 1,
    height: '100%',
    width: '100%',
    position: 'absolute',
    opacity: 0.5,
  },
  logo: {
    height: 200,
    width: 200,
  },
  containerInput: {
    marginTop: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 15,
    width: 250,
    marginTop: 10,
    padding: 10,
  },
  containerDescricao: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textDescricao: {
    color: '#fff',
  },
  containerCadastro: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3FCEFB',
    width: 200,
    height: 50,
    borderRadius: 20,
    marginBottom: 20,
  },
  containerCadastroText: {
    color: '#FFF',
  },
});

export default style;
