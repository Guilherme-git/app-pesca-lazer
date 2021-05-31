/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const stack = createStackNavigator();

import drawerCliente from './cliente/drawer';
import drawerBarqueiro from './barqueiro/drawer';

import login from './../screens/login/index';
import cadastro from './../screens/cadastro/index';

export default () => {
  return (
    <stack.Navigator
      initialRouteName="drawerCliente" // Tela que inicia quando abre o aplicativo
      screenOptions={{
        headerShown: false,
      }}>
      <stack.Screen name="login" component={login} />
      <stack.Screen name="cadastro" component={cadastro} />
      <stack.Screen name="drawerCliente" component={drawerCliente} />
      <stack.Screen name="drawerBarqueiro" component={drawerBarqueiro} />
    </stack.Navigator>
  );
};
