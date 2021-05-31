import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

const drawer = createDrawerNavigator();

import HomeCliente from './../../screens/cliente/home/index';

export default () => {
    return(
        <drawer.Navigator>
            <drawer.Screen name="home cliente" component={HomeCliente}></drawer.Screen>
        </drawer.Navigator>
    );
}