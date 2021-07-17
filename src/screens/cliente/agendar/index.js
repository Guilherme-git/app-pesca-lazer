import React, { useState } from 'react';
import { Text, SafeAreaView, View, ScrollView,Linking} from 'react-native';
import AbrirDrawer from './../../../components/abrirDrawer';
import BotoesFooter from '../../../components/botoesFooter';
import style from './style';
import CalendarPicker from 'react-native-calendar-picker';



export default () => {
  const [setData] = useState();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AbrirDrawer title="AGENDAR PASSEIO" />
      <ScrollView>
        <View style={style.downview}>
          <View style={style.containerCalendar}>
            <Text style={style.porData}>POR DATA</Text>
            <CalendarPicker onDateChange={(t) => setData(t)} />
          </View>

          <View>
            <Text style={style.txtRef} onPress={() =>{ Linking.openURL('https://tabuademares.com/br')}}>VEJA COMO ESTÁ O TEMPO NA DATA ESCOLHIDA</Text>
            <Text style={style.txtRef} onPress={() => alert('EM CONTRUÇÃO')} >SELECIONE A DATA E HORA</Text>
            <Text style={style.txtRef} onPress={() => alert('EM CONTRUÇÃO')} >MEUS COMPROMISOS</Text>

          </View>
        </View>
      </ScrollView>
      <BotoesFooter />
    </SafeAreaView>
  );
};
