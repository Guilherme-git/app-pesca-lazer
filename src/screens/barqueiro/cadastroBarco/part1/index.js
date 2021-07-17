import React from 'react';
import {
  Text,
  Image,
  SafeAreaView,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Link, useNavigation} from '@react-navigation/native';
import style from './style';
import imgBackground from './../../../../assets/CadastroCLI.jpeg';
import AbrirDrawer from './../../../../components/abrirDrawer';



export default () => {
  const navegacao = useNavigation();

  return (
    <SafeAreaView style={{flex:1},style.container}>
      <Image style={style.imgBackground} source={imgBackground} />
      <AbrirDrawer title="CADASTRO" style={style.topdrawer} />
      <View style={style.containerTitulo}>
        <Text style={style.textTitulo}>
          CADASTRE SEU BARCO 1/2
        </Text>
      </View>
      <ScrollView>
      <View style={style.containerInput}>
        <TextInput
          style={style.input}
          placeholder="MODELO DO BARCO"
          placeholderTextColor="#1c7acb"
        />
        <TextInput
          style={style.input}
          placeholder="DOCUMENTO DO BARCO"
          placeholderTextColor="#1c7acb"
        />
        <TextInput
          style={style.input}
          placeholder="ENDEREÇO DO LOCAL"
          placeholderTextColor="#1c7acb"
        />
      </View>
      <View style={style.containerInput2}>
        <TextInput
          style={style.input2}
          placeholder="Nº"
          placeholderTextColor="#1c7acb"
        />
        <TextInput
          style={style.input2}
          placeholder="CEP"
          placeholderTextColor="#1c7acb"
        />
      </View>
      <View style={style.containerInput2}>
        <TextInput
          style={style.input2}
          placeholder="LAT"
          placeholderTextColor="#1c7acb"
        />
        <TextInput
          style={style.input2}
          placeholder="LONG"
          placeholderTextColor="#1c7acb"
        />
      </View>

      <View style={style.containerMaps}>
        <TouchableOpacity style={style.botaoMaps}>
          <Text style={style.containerMapsText}>LOCALIZAR NO MAPS</Text>
        </TouchableOpacity>
      </View>

      <View style={style.containerInput3}>
        <TextInput
          style={style.input3}
          placeholder="SEGMENTO QUE IREI SEGUIR"
          placeholderTextColor="#1c7acb"
        />
      </View>
      </ScrollView>
      <View style={style.containerProx}>
        <TouchableOpacity style={style.botaoProx} onPress={() => navegacao.navigate('CdtBarco2')}>
          <Text style={style.containerProxText}>➔</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
