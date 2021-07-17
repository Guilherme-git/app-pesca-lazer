import React from 'react';
import { Text, SafeAreaView, StyleSheet, TextInput, View, Image, ScrollView } from 'react-native';
import AbrirDrawer from './../../../../components/abrirDrawer';
import BotoesFooter from '../../../../components/botoesFooter';
import style from './style';
import ResultP from './../../../../components/resultPesq';

export default () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <AbrirDrawer title="PESQUISA" />
      <ScrollView>
        <View style={style.downview}>
          <ResultP />
        </View>
      </ScrollView>
      <BotoesFooter />
    </SafeAreaView>
  );
};
