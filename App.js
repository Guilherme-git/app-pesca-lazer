import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Stack from './src/navigators/stack';
 
export default () => {
  return(
    <NavigationContainer>
        <Stack />
    </NavigationContainer>
  );
}