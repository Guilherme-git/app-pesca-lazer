import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

const drawer = createDrawerNavigator();

import HomeCliente from './../../screens/cliente/home/index';
import PesquisaCliente from './../../screens/cliente/pesquisa/index'

export default () => {
    return(
        <drawer.Navigator
            initialRouteName="pesquisa cliente"
        >
            <drawer.Screen name="home cliente" component={HomeCliente}></drawer.Screen>
            <drawer.Screen name="pesquisa cliente" component={PesquisaCliente}></drawer.Screen>
        </drawer.Navigator>
    );
}