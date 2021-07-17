import React from 'react';
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eef2f5',
  },
  ContImg:{
    alignItems: 'center',
  },

  logo: {
    height: 300,
    width: 300,
  },

  containerInput: {
    marginTop: 20,
  },
  containerEntrar: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a78c2',
    width: 315,
    height: 45,
    borderRadius: 25,
  },
  containerEntrarText: {
    color: '#FFF',
    fontSize:14,
    fontWeight:'bold',
  },
  ContTxtRef:{
    alignItems:'center',
  },
  txtRef: {
    fontSize:25,
    color: '#1a78c2',
    marginTop:20,
    marginLeft:20,
    marginBottom:10,
    fontWeight:'bold',

  },
});

export default style;
