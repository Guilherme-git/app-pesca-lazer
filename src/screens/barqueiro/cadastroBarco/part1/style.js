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
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
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
    marginLeft:25,
  },
  containerInput2: {
    marginLeft:25,
    flexDirection: 'row',
  },
  containerInput3: {
    marginLeft:25,
  },
  input: {
    textAlign:'right',
    backgroundColor: '#fff',
    fontSize:12,
    borderRadius: 25,
    width: 300,
    height: 45,
    marginTop: 20,
    padding: 10,
    fontWeight:'bold',

  },
  input2: {
    marginLeft:2,
    marginRight:2,
    position: 'relative',
    flexDirection: 'row',
    textAlign:'right',
    backgroundColor: '#fff',
    fontSize:12,
    borderRadius: 25,
    width: 150,
    height: 45,
    marginTop: 20,
    padding: 10,
    fontWeight:'bold',

  },
  containerMaps:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoMaps: {
    marginTop: 18,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1c7acb',
    width: 300,
    height: 38,
    borderRadius: 25,
  },
  containerMapsText: {
    color: '#FFF',
    fontSize:13,
    fontWeight:'bold',
  },
  input3: {
    textAlign:'center',
    backgroundColor: '#fff',
    fontSize:13,
    borderRadius: 25,
    width: 300,
    height: 43,
    marginTop: 18,
    marginBottom:10,
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
    backgroundColor: '#1c7acb',
    width: 250,
    height: 48,
    borderRadius: 25,
    marginBottom: 20,
  },
  containerProxText: {
    color: '#FFF',
    fontSize:25,
  },
});

export default style;
