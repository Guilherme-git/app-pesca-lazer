import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

const drawer = createDrawerNavigator();

import HomeCliente from './../../screens/cliente/home/index';
import PesquisaCliente from './../../screens/cliente/pesquisa/index';
import CdtCLI from './../../screens/cadastro/cliente/index';
import ResultP from './../../screens/cliente/pesquisa/result/index'
import Agendar from './../../screens/cliente/agendar/index'
import sucesso from './../../screens/cliente/agendar/sucess/index'
import Ionicons from 'react-native-ionicons'


export default () => {
  return (
    <drawer.Navigator initialRouteName="homeCliente">


      <drawer.Screen name="homeCliente" component={HomeCliente}
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
      <drawer.Screen name="pesquisaCliente" component={PesquisaCliente}
      options={{
        title: 'PESQUISA',
           drawerIcon: ({focused, size}) => (
              <Ionicons
                 name="search"
                 size={size}
                 color={focused ? '#7cc' : '#ccc'}
              />
           ),
        }}
      />
      <drawer.Screen name="Agendar" component={Agendar}
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

      {/*
      <drawer.Screen name="cadastrocliente" component={CdtCLI} />
      <drawer.Screen name="resultadoPesquisa" component={ResultP} />
      <drawer.Screen name="Sucesso" component={sucesso} />
      */}
    </drawer.Navigator>
  );
};
