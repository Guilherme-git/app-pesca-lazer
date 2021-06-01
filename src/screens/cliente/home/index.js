/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, SafeAreaView, StyleSheet,TextInput,View,Image} from 'react-native';
import AbrirDrawer from './../../../components/abrirDrawer';
import BotoesFooter from '../../../components/botoesFooter';
import style from './style';
import imgBackground from './../../../assets/backhomecliente.jpeg';
import imgPesq from './../../../assets/icon-pesquisa.png';

export default () => {
  return (
    <SafeAreaView>
      <AbrirDrawer title="HOME" />
        <View style={style.upview}>
            <Image style={style.upBackground} source={imgBackground} />

            <View style={style.sectionStyle}>
                <Image
                    source={require('./../../../assets/icon-pesquisa.png')}
                    style={style.imageStyle}
                 />
                 <TextInput
                    style={{flex: 1}}
                    placeholderTextColor="#03a9f4"
                    placeholder="Encontre o Melhor lugar, ou barqueiro"
                />
            </View>
        </View>
        <View style={style.downview}>
            <View>
                <Text style={style.downText}>
                    Próximos a Você
                </Text>
                <BotoesFooter />
            </View>
            <View>
                <Text style={style.downText}>
                    O Melhor para pesca
                </Text>
            </View>
        </View>
      <BotoesFooter />
    </SafeAreaView>
  );
};
