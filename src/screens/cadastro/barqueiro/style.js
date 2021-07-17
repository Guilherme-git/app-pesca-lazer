/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  topdrawer:{
    color:'#1c7acb',
  },
  containerTitulo: {
    marginTop: 25,
    marginLeft:25,
    justifyContent: 'center',
    alignItems: 'baseline',
  },
  textTitulo: {
    color: '#1c7acb',
    fontWeight:'bold',
    fontSize:20,
  },
  imgBackground: {
    flex: 1,
    height: '100%',
    width: '100%',
    position: 'absolute',
    opacity: 1,
  },
  containerInput: {
    marginTop: 25,
    marginLeft:25,
  },
  input: {
    textAlign:'right',
    backgroundColor: '#fff',
    fontSize:12,
    borderRadius: 25,
    width: 300,
    height: 45,
    marginTop: 30,
    padding: 10,
    fontWeight:'bold',

  },
  containerProx:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoProx: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3FCEFB',
    width: 250,
    height: 48,
    borderRadius: 25,
    marginBottom: 40,
  },
  containerProxText: {
    color: '#FFF',
    fontSize:25,
  },
});

export default style;
