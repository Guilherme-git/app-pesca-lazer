import React, { useState } from 'react';
import { Text, SafeAreaView, View, ScrollView,Linking} from 'react-native';
import AbrirDrawer from './../../../components/abrirDrawer';
import BotoesFooter from '../../../components/botoesFooter';
import style from './style';
import CalendarPicker from 'react-native-calendar-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

export default () => {
  const [setData] = useState("null");
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AbrirDrawer title="MINHA AGENDA" />
      <ScrollView>
        <View style={style.downview}>
          <View style={style.containerCalendar}>
            <CalendarPicker onDateChange={(t) => setData(t)} />
          </View>

          <View>
            <View horizontal={true}>
              <Text style={style.txtRef} onPress={() => alert('EM CONTRUÇÃO')}>ADICIONAR COMPROMISSOS
              <Icon.Button name="plus" color="#1c7acb" backgroundColor="" style={style.icoM} padding={0} borderRadius={25} size={15}/></Text>
            </View>
            <View>
              <Text style={style.txtRef2}>MEUS COMPROMISSOS</Text>
              <View style={style.cardBarco}>
              </View>
            </View>

          </View>
        </View>
      </ScrollView>
      <BotoesFooter />
    </SafeAreaView>
  );
};
