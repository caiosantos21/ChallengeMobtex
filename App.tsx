import React from 'react';
import { SafeAreaView } from 'react-native';
import ListaApi from './components/listaAPI_Axios_TS';

import general_styles from './src/styles/general_styles';

export default function App(){
  return (
    <SafeAreaView style={[general_styles.flex1]}>
      <ListaApi/>
    </SafeAreaView>
  );
};