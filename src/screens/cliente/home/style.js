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
    marginTop:3,
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
  }
});

export default style;
