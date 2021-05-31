import React from 'react';
import {Text,SafeAreaView, StyleSheet} from 'react-native';
import AbrirDrawer from './../../../components/abrirDrawer';
import BotoesFooter from '../../../components/botoesFooter';

export default () => {
    return(
        <SafeAreaView>
            <AbrirDrawer title="HOME" />
                
            <BotoesFooter />
        </SafeAreaView>
        
    );
}

