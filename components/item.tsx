import React, { FC } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native';
import { Obj } from '../src/Interfaces/interface';

import general_styles from '../src/styles/general_styles';

export default function item(props:Obj){
  return (
    <View style={[general_styles.box, general_styles.flex1]} >
      <View style={[general_styles.center]}>
        <Text style={general_styles.fSize20}>ID: {props.item.id}</Text>
        <Text style={general_styles.fSize20}>Name: {props.item.name}</Text>
      </View>
      <Image style={[styles.Logo, general_styles.flex1]} source={{uri:props.item.img}}/>
    </View >
  )
}

const styles = StyleSheet.create({
  Logo: {
    height: '100%',
    width: '100%',
    resizeMode:'contain',
    aspectRatio: 1,
  },
});