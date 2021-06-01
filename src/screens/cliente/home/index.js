/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, SafeAreaView, StyleSheet, TextInput, View, Image, ScrollView } from 'react-native';
import AbrirDrawer from './../../../components/abrirDrawer';
import BotoesFooter from '../../../components/botoesFooter';
import style from './style';
import imgBackground from './../../../assets/backhomecliente.jpeg';
import imgPesq from './../../../assets/icon-pesquisa-home.png';

export default () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <AbrirDrawer title="HOME" />
      <ScrollView>
        <View style={style.upview}>
          <Image style={style.upBackground} source={imgBackground} />

          <View style={style.sectionStyle}>
            <Image source={imgPesq} style={style.iconPesquisa} />
            <TextInput
              style={style.inputPesquisa}
              placeholderTextColor="#03a9f4"
              placeholder="Encontre o Melhor lugar, ou barqueiro"
            />
          </View>
        </View>

        <View style={style.downview}>
          <View style={{ marginBottom: 10 }}>
            <Text style={style.downText}>
              Próximos a Você
            </Text>
            <ScrollView horizontal={true}>
              <View style={style.cardBarco}>

              </View>
              <View style={style.cardBarco}>

              </View>
              <View style={style.cardBarco}>

              </View>
              <View style={style.cardBarco}>

              </View>
              <View style={style.cardBarco}>

              </View>
            </ScrollView>
          </View>

          <View style={{ marginBottom: 50 }}>
            <Text style={style.downText}>
              O Melhor para pesca
            </Text>
            <ScrollView horizontal={true}>
              <View style={style.cardBarco}>

              </View>
              <View style={style.cardBarco}>

              </View>
              <View style={style.cardBarco}>

              </View>
              <View style={style.cardBarco}>

              </View>
              <View style={style.cardBarco}>

              </View>
            </ScrollView>
          </View>

          <BotoesFooter />
        </View>

       
      </ScrollView>
    </SafeAreaView>
  );
};
