import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native';
import { Obj } from '../src/Interfaces/interface';

import general_styles from '../src/styles/general_styles';

export default function item(props:Obj){

  const [img, setImg] = useState<string>(props.item.img);

  useEffect( () =>{
    checkYoutubeImg()
  },[]);

  const checkYoutubeImg = ()=>{
    const youtube = youtube_parser(img);

    youtube && setImg(`https://img.youtube.com/vi/${youtube}/0.jpg`)
  }

  const defImg = ()=> setImg('https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930');

  function youtube_parser(url:string){
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
  }

  return (
    <View style={[general_styles.box, general_styles.flex1]} >
      <View style={[general_styles.center]}>
        <Text style={general_styles.fSize20}>ID: {props.item.id}</Text>
        <Text style={general_styles.fSize20}>Name: {props.item.name}</Text>
      </View>
      <Image style={[styles.Logo, general_styles.flex1]} source={{uri:img}} onError={defImg}>
      </Image>
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