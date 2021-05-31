import React from 'react';
import { View, Image, TouchableOpacity,Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AbrirDrawer from './../assets/abrirDrawer.png'

export default (props) => {
    const navigation = useNavigation();
    return (
        <>
        <View style={{ marginLeft: 20, marginTop:20, marginBottom: 10,flexDirection:'row',marginRight:20}}>
            
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Image source={AbrirDrawer} />
            </TouchableOpacity>

            <View style={{alignSelf:'center', flex:1,justifyContent:'center',alignItems:'center'}} >
                <Text style={{
                    color:'#4cf4fa',
                    fontWeight:'bold',
                    fontSize:19
                }}>{props.title}</Text>
            </View>

        </View>
        <Text style={{width:'100%', backgroundColor:'#4cf4fa',height:1, marginBottom:20}}></Text>
        </>
    );
}