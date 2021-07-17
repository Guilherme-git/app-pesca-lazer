import React from 'react';
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  upview:{
    marginTop:0,
    height:200,
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
    flexDirection:'row',
    marginTop:90,
    marginLeft:30,

  },
  sectionStyle2: {
    flexDirection:'column',
    marginRight:140,
    marginTop:20,
  },
  txtUp1:{
    color: '#fff',
    fontSize:18,
    fontWeight:'bold',
  },
  txtUp2:{
    color: '#fff',
    fontSize:15,
    fontWeight:'bold',
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
    marginTop:5,
    marginLeft:18,
    color:'#1a78c2',
    fontWeight:'bold',
    fontSize:17,
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
  avatar:{
    backgroundColor:'#1c7acb',
    width: 0,
    height: 0,
    color:'#fff',
    flex: 1,
  },
  cardImag:{
    position: 'absolute',
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  Vwbutons1:{
    marginTop:10,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  butons1:{
    marginTop:10,
    marginRight:10,
    marginLeft:10,
    backgroundColor:'#3aa4b0',
    justifyContent:'center',
    alignItems:'center',
    height: 41,
    width: 130,
    borderColor:'#02808e',
    borderWidth:1,
    flex: 1,
    borderRadius: 25,
    alignContent:'center',
  },
  butons1TXT:{
    fontSize:12,
    color: '#fff',
    fontWeight:'bold',
  },

  Vwbutons2:{
    marginTop:10,

    justifyContent:'center',
    alignItems:'center',
  },
  butons2:{
    marginTop:10,
    marginRight:10,
    marginLeft:10,
    backgroundColor:'#3aa4b0',
    justifyContent:'center',
    alignItems:'center',
    height: 43,
    width: 300,
    borderColor:'#02808e',
    borderWidth:1,
    flex: 1,
    borderRadius: 25,
    alignContent:'center',
  },
  butons2TXT:{
    fontSize:12,
    color: '#fff',
    fontWeight:'bold',
  },
  testeee:{
    backgroundColor:'#000',
    opacity: 0.9,
  }
});

export default style;
