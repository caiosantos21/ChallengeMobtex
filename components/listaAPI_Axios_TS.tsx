import React, { useEffect, useState } from 'react'
import { Text, View, FlatList, Switch } from 'react-native';
import { Data } from '../src/Interfaces/interface';
import Item from './item';
import Load from './load';

import axios from "axios";
import { baseURL } from '../src/constants/consts';

import general_styles from '../src/styles/general_styles';

export default function ListaApi(){

  const [data, setData] = useState<Data[]>([]);
  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [numColumns, setNumColumns] = useState<number>(1);
  const [colums, setColumns] = useState<boolean>(false);

  useEffect(()=>{
    fetchData();
  }, []);

  const toggleColumns = () =>{
    setColumns(!colums);
    colums ? setNumColumns(1) : setNumColumns(2);
  }

  const fetchData = async () => {
    setIsError(false);
    setLoading(true);
    try{
      const result = await axios(baseURL);
      setData(result.data.data);
      setSuccess(result.data.success);
    }catch(error){
      setIsError(true);
    }
    setLoading(false);
  };

  return (
    <View style={[general_styles.container, general_styles.flex1]}>
      {isError ? <Text style={general_styles.aSelfCenter}>Something went wrong ...</Text> :
        <View>
          {loading ? <Load/> : 
            <View>
              {/* <Text style={[general_styles.box, general_styles.fSize20, general_styles.tAlCenter]}>{success ?'API carregada com sucesso': 'Falha no carregamento da API'}</Text> */}
              <Switch value ={colums} onChange={toggleColumns}/>
              <FlatList
                data={data} 
                numColumns={numColumns} 
                key={numColumns}
                keyExtractor = { (item, index) => index.toString() }
                renderItem = { ({item}) => <Item item={item}/> } 
              />
            </View>
          }
        </View>
      }
    </View >
  )
}