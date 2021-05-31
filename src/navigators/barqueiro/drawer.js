import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

const drawer = createDrawerNavigator();

import HomeBarqueiro from './../../screens/barqueiro/home/index';

export default () => {
  return (
    <drawer.Navigator>
      <drawer.Screen name="home barqueiro" component={HomeBarqueiro} />
    </drawer.Navigator>
  );
};
