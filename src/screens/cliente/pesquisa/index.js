import React, { useState,Component} from 'react';
import { Text, SafeAreaView, TouchableOpacity, TextInput, View, Image, ScrollView } from 'react-native';
import AbrirDrawer from './../../../components/abrirDrawer';
import BotoesFooter from '../../../components/botoesFooter';
import style from './style';
import imgBackground from './../../../assets/backhomecliente.jpeg';
import imgPesq from './../../../assets/icon-pesquisa-home.png';
import CalendarPicker from 'react-native-calendar-picker';
import {useNavigation} from '@react-navigation/native';

export default () => {
  const [data, setData] = useState();
  const [botaoPesca, setBotaoPesca] = useState(false);
  const [botaoPasseio, setBotaoPasseio] = useState(false);
  const navigation = useNavigation();

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

            {botaoPesca ? //Verdadeiro
              <TouchableOpacity
                onPress={() => setBotaoPesca(false)}
                style={style.botaoPescaAtivo}>
                <Text style={style.botaoPescaTextAtivo}>Pesca</Text>
              </TouchableOpacity>
              : // Falso
              <TouchableOpacity
                onPress={() => setBotaoPesca(true)}
                style={style.botaoPesca}>
                <Text style={style.botaoPescaText}>Pesca</Text>
              </TouchableOpacity>
            }

            {botaoPasseio ? //Verdadeiro
              <TouchableOpacity
                onPress={() => setBotaoPasseio(!botaoPasseio)}
                style={style.botaoPasseioAtivo}>
                <Text style={style.botaoPasseioTextAtivo}>Passeio</Text>
              </TouchableOpacity>
              : // Falso
              <TouchableOpacity
                onPress={() => setBotaoPasseio(!botaoPasseio)}
                style={style.botaoPasseio}>
                <Text style={style.botaoPasseioText}>Passeio</Text>
              </TouchableOpacity>
            }




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

            <TouchableOpacity style={style.pesquisar} onPress={() => navigation.navigate('ResultadoPesquisa')}>
              <Text style={style.botaoPasseioText, { color: '#fff' }}>PESQUISAR</Text>
            </TouchableOpacity>

          </View>


        </View>


      </ScrollView>
      <BotoesFooter />
    </SafeAreaView>
  );
};
