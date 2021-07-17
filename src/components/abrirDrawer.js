/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AbrirDrawer from './../assets/abrirDrawer.png';

export default props => {
  const navigation = useNavigation();
  return (
    <>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          marginLeft: 20,
          marginTop: 10,
          marginBottom: 10,
          flexDirection: 'row',
          marginRight: 20,
        }}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image source={AbrirDrawer}
          style={{
            width:20,
            height:20,
            alignContent:'flex-start',
            alignItems:'flex-start',
            tintColor:'#1c7acb',
            marginLeft: 2,
            flexDirection: 'row',
          }}
          />
        </TouchableOpacity>

        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              color: '#1c7acb',
              fontWeight: 'bold',
              fontSize: 16,
            }}>
            {props.title}
          </Text>
        </View>
      </View>
    </>
  );
};
