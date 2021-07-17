import React from 'react';
import {
  Text,
  Image,
  SafeAreaView,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import {Link, useNavigation} from '@react-navigation/native';
import style from './style.js';
import imgLogin from './../../../../assets/login.jpg';
import imgLogo from './../../../../assets/logo.png';
import BotoesFooter from '../../../../components/botoesFooter';
import AbrirDrawer from './../../../../components/abrirDrawer';

export default () => {
  const navegacao = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AbrirDrawer title="AGENDAR PASSEIO" />
      <ScrollView>
      <View style={style.ContTxtRef}>
        <Text style={style.txtRef}>RESERVA CONFIRMADA</Text>
      </View>
      <View style={style.ContImg}>
        <Image style={style.logo} source={imgLogo} />
      </View>
      <View style={style.ContTxtRef}>
        <TouchableOpacity style={style.containerEntrar}>
          <Text style={style.containerEntrarText}>REALIZAR PAGAMENTO</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
      <BotoesFooter />
    </SafeAreaView>
  );
};
