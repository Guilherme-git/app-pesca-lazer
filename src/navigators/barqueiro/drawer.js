/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, SafeAreaView, TouchableOpacity, TextInput, View, Image, ScrollView } from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CdtBarco1 from './../../screens/barqueiro/cadastroBarco/part1/index';
import CdtBarq from './../../screens/barqueiro/cadastroBarco/part2/index';
import Perfil from './../../screens/barqueiro/perfilBarqueiro/index';
import Agenda from './../../screens/barqueiro/agenda/index';
import Ionicons from 'react-native-ionicons'


const drawer = createDrawerNavigator();


export default () => {
  return (

    <drawer.Navigator initialRouteName="PerfilBarqueiro">



      <drawer.Screen name="PerfilBarqueiro" component={Perfil}
      options={{
        title: 'PERFIL',
           drawerIcon: ({focused, size}) => (
              <Ionicons
                 name="person"
                 size={size}
                 color={focused ? '#7cc' : '#ccc'}
              />
           ),
        }}
      />
      <drawer.Screen name="Agenda" component={Agenda}
            options={{
              title: 'AGENDA',
                 drawerIcon: ({focused, size}) => (
                    <Ionicons
                       name="calendar"
                       size={size}
                       color={focused ? '#7cc' : '#ccc'}
                    />
                 ),
              }}
      />
      <drawer.Screen name="cadastroBarqueiro" component={CdtBarq}
      options={{
        title: 'CADASTRE BARCOS',
           drawerIcon: ({focused, size}) => (
              <Ionicons
                 name="boat"
                 size={size}
                 color={focused ? '#7cc' : '#ccc'}
              />
           ),
        }}
      />
      {/*
      <drawer.Screen name="cadastroBarcoPt1" component={CdtBarco1} />
      <drawer.Screen name="CadastroBarcoPt2 " component={CdtBarco2} />
      */}
    </drawer.Navigator>
  );
};
