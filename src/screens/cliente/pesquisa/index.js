/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Text, SafeAreaView, TouchableOpacity, TextInput, View, Image, ScrollView } from 'react-native';
import AbrirDrawer from './../../../components/abrirDrawer';
import BotoesFooter from '../../../components/botoesFooter';
import style from './style';
import imgBackground from './../../../assets/backhomecliente.jpeg';
import imgPesq from './../../../assets/icon-pesquisa-home.png';
import CalendarPicker from 'react-native-calendar-picker';

export default ({


  values,
  selectedValue,
  setSelectedValue,
}) => {
  const [data, setData] = useState();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AbrirDrawer title="PESQUISA" />
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
          <Text style={style.downText}> PESQUISAR POR </Text>

          <Text style={style.tipoServico}>TIPO DE SERVIÇO</Text>

          <View style={style.containerTipoPesquisa}>
            <TouchableOpacity active style={style.botaoPesca}>
              <Text style={style.botaoPescaText}>Pesca</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.botaoPasseio}>
              <Text style={style.botaoPasseioText}>Passeio</Text>
            </TouchableOpacity>
          </View>

          <View style={style.containerCalendar}>
            <Text style={style.porData}>POR DATA</Text>
            <CalendarPicker onDateChange={(t) => setData(t)} />
          </View>

          <View>
            <Text style={style.porValor}>POR VALOR</Text>
            <View style={style.containerValor}>

              <TextInput
                style={style.input}
                placeholder="Valor min."
              />
              <TextInput
                style={style.input}
                placeholder="Valor max."
              />
            </View>

          </View>
          <View style={style.vpesquisar}>
            <TouchableOpacity style={style.pesquisar}>
              <Text style={style.botaoPasseioText,{color: '#fff'}}>PESQUISAR</Text>
            </TouchableOpacity>
          </View>

          <BotoesFooter />
        </View>


      </ScrollView>
    </SafeAreaView>
  );
};
