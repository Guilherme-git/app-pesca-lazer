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
  containerSimp:{
    marginLeft:30,
    marginTop:20,
    marginBottom:0,
  },
  textSimp:{
    color:'#fff',
    fontSize:15,
    fontWeight:'bold',
  },
  textSimp2:{
    color:'#fff',
    fontSize:16,
    fontWeight:'bold',
  },
  cardBarco: {
    backgroundColor: '#48cee1',
    height: 90,
    width: 110,
    padding: 10,
    borderRadius: 30,
    margin: 5,
    marginLeft:10,
    borderWidth: 0.8,
    shadowColor:'#1c7acb',
    shadowRadius:5,
    borderColor:'#1c7acb',
  },
  cardPlus: {
    flex: 1,
    height: 90,
    width: 110,
    padding: 10,
    borderRadius: 30,
    margin: 5,
    marginLeft:12
  },
  plus:{
    position: 'absolute',
    alignContent:'center',
    alignItems:'center',
    marginTop:10,
    marginLeft:10,
    width:70 ,
    height: 70,

  },
  buttonM:{
    width:150,
    height: 150,
  },

  botaoSelect: {
    marginLeft:10,
    marginTop: 18,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    width: 250,
    height: 43,
    borderRadius: 25,
  },
  containerSelectText: {
    color: '#1c7acb',
    fontSize:15,
    fontWeight:'bold',
  },
  cBotaoMSelect:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20,
    marginLeft:20,
    marginBottom:1,
  },
  botaoMSelect:{
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerProx:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoProx: {
    marginTop:1,
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
    fontSize:15,
    fontWeight:'bold',
  },
});

export default style;
