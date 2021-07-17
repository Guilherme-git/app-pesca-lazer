import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const stack = createStackNavigator();

import drawerCliente from './cliente/drawer';
import drawerBarqueiro from './barqueiro/drawer';

import login from './../screens/login/index';
import cadastro from './../screens/cadastro/index';

import CdtBarco1 from './../screens/barqueiro/cadastroBarco/part1/index';
import CdtBarco2 from './../screens/barqueiro/cadastroBarco/part2/index';
import CdtCLI from './../screens/cadastro/cliente/index';
import ResultP from './../screens/cliente/pesquisa/result/index'
import sucesso from './../screens/cliente/agendar/sucess/index'
import PesquisaCliente from './../screens/cliente/pesquisa/index';



export default () => {
  return (
    <stack.Navigator
      initialRouteName="login" // Tela que inicia quando abre o aplicativo
      screenOptions={{
        headerShown: false,
      }}>
      <stack.Screen name="login" component={login} />
      <stack.Screen name="cadastro" component={cadastro} />
      <stack.Screen name="CdtBarco1" component={CdtBarco1} />
      <stack.Screen name="CdtBarco2" component={CdtBarco2} />
      <stack.Screen name="CadastroCliente" component={CdtCLI} />
      <stack.Screen name="drawerCliente" component={drawerCliente} />
      <stack.Screen name="drawerBarqueiro" component={drawerBarqueiro} />
      <stack.Screen name="ResultadoPesquisa" component={ResultP} />
      <stack.Screen name="Sucesso" component={sucesso} />
      <stack.Screen name="PesquisaCliente" component={PesquisaCliente} />
    </stack.Navigator>
  );
};
