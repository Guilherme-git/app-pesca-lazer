/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  upview:{
    marginTop:0,
    height:250,
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
  },
  downview:{
    
  },
  upBackground: {
    height:'100%',
    width:'100%',
    position: 'absolute'
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 15,
    width: 300,
    marginTop: 10,
    padding: 10,
  },
  sectionStyle: {
    paddingLeft:10,
    paddingRight:10,
    backgroundColor: '#fff',
    borderWidth: 0.7,
    borderColor: '#03a9f4',
    borderRadius: 20,
    flexDirection:'row',
    
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  downText:{
    marginTop:10,
    marginLeft:15,
    color:'#1a78c2',
    fontWeight:'bold',
    fontSize:27,
  },
  iconPesquisa: {
    height: 25,
    width: 25,
    marginRight:10,
    marginTop:10
  },
  cardBarco: {
    backgroundColor: '#70A6AE',
    height: 100,
    width: 150,
    padding: 10,
    borderRadius: 20,
    margin: 5,
    marginLeft:15
  },
  tipoServico: {
    color: '#1a78c2',
    marginTop:10,
    marginLeft:20,
    fontWeight:'bold'

  },
  containerTipoPesquisa: {
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginRight: 50,
    marginLeft:50,
    marginTop: 15
  },
  botaoPesca: {
    backgroundColor:'#1a78c2',
    justifyContent:'center',
    alignItems:'center',
    height: 50,
    flex: 1,
    borderRadius: 10,
    marginRight:5
  },
  botaoPescaText: {
    color: '#fff'
  },
  botaoPasseio: {
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center',
    height: 50,
    borderColor:'#1a78c2',
    borderWidth:1,
    flex: 1,
    borderRadius: 10,
    marginLeft:5
  },
  botaoPasseioText: {
    color: '#1a78c2'
  },
  containerCalendar: {
    marginTop: 20
  },
  porData: {
    color: '#1a78c2',
    marginTop:10,
    marginLeft:20,
    marginBottom:10,
    fontWeight:'bold'

  },
  porValor: {
    color: '#1a78c2',
    marginTop:20,
    marginLeft:20,
    marginBottom:10,
    fontWeight:'bold'

  },
  containerValor: {
    flexDirection:'row',
    marginLeft:15,
    marginRight: 15,
    marginBottom:20
  },
  input: {
    borderRadius:10,
    borderColor:'#1a78c2',
    borderWidth:1,
    flex: 1,
    marginRight:5,
    marginLeft:5,
    padding: 10
  }
});

export default style;
