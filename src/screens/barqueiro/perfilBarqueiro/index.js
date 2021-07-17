import React from 'react';
import { Text, SafeAreaView, TouchableOpacity, TextInput, View, Image, ScrollView } from 'react-native';
import AbrirDrawer from './../../../components/abrirDrawer';
import BotoesFooter from '../../../components/botoesFooter';
import style from './style';
import imgBackground from './../../../assets/backhomecliente.jpeg';
import imgPesq from './../../../assets/icon-pesquisa-home.png';
import {Avatar} from 'react-native-paper';

export default () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <AbrirDrawer title="PERFIL DO BARQUEIRO" />
      <ScrollView>
        <View style={style.upview}>
          <Image style={style.upBackground} source={{ uri:'https://cdn.leouve.com.br/2019/07/IMG-1882_d_0_0_800.20181026100630.jpg'}} />

          <View style={style.sectionStyle}>

            <Avatar.Image style={style.avatar} size={60} source={require('../../../assets/avatarTest.png')}/>

              <View style={style.sectionStyle2}>
              <Text style={style.txtUp1}>
                Luiz Henrique
              </Text>
             <Text style={style.txtUp2}>
                Goiânia, Go
              </Text>
            </View>
          </View>
        </View>

        <View style={style.downview}>
          <View style={{ marginTop: 15 }}>
            <Text style={style.downText}>
              ALBUM
            </Text>
            <ScrollView horizontal={true}>
              <View>
                <Image style={style.cardBarco} source={{ uri:'https://cdn.leouve.com.br/2019/07/IMG-1882_d_0_0_800.20181026100630.jpg'}} />
              </View>
              <View>
                <Image style={style.cardBarco} source={{ uri:'https://cdn.leouve.com.br/2019/07/IMG-1882_d_0_0_800.20181026100630.jpg'}} />
              </View>
              <View>
                <Image style={style.cardBarco} source={{ uri:'https://cdn.leouve.com.br/2019/07/IMG-1882_d_0_0_800.20181026100630.jpg'}} />
              </View>
              <View style={style.cardBarco}>

              </View>
            </ScrollView>
          </View>
        </View>
        <View style={style.Vwbutons1}>
          <TouchableOpacity style={style.butons1}>
            <Text style={style.butons1TXT}>LOCALIZAR NO MAPS</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.butons1}>
              <Text style={style.butons1TXT}>DIFERENCIAIS FORNECIDOS</Text>
          </TouchableOpacity>
        </View>
        <View style={style.Vwbutons2}>
          <TouchableOpacity style={style.butons2}>
            <Text style={style.butons1TXT}>RESERVE JÁ</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.butons2}>
              <Text style={style.butons1TXT}>TEM UMA DÚVIDA? FALE COMIGO!</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <BotoesFooter />
    </SafeAreaView>
  );
};
