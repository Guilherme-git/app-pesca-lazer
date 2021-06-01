/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  upview:{
    marginTop:0,
    height:250,
    width:'100%',
  },
  downview:{
  },
  upBackground: {
    flex: 1,
    height:'100%',
    width:'100%',
    position:'absolute',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 15,
    width: 300,
    marginTop: 10,
    padding: 10,
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.7,
    borderColor: '#03a9f4',
    height: 40,
    width: 300,
    borderRadius: 20,
    margin: 100,
    marginLeft:30,
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

});

export default style;
