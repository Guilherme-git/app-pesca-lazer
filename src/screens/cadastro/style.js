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
  selectOpt:{
    marginTop:12,
    marginBottom:55,

  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    width: 200,
    marginBottom:105,
  },
  containerCadastro: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#228394',
    width: 250,
    height: 45,
    borderRadius: 25,
    marginBottom: 20,

  },
  containerCadastro2: {
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#228394',
    width: 250,
    height: 45,
    borderRadius: 25,
    marginBottom: 20,
  },
  containerCadastroText: {
    color: '#FFF',
    fontWeight:'bold',
  },




  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
  },
  selected: {
    backgroundColor: '#000',
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'coral',
  },
  selectedLabel: {
    color: 'white',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
  },

});

export default style;
