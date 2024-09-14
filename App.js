import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import carro from './components/carros';
import styles from './components/style';
import CarItem from './components/CarItem';

const Carros = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Lista de Carros</Text>
      <FlatList
        data={carro} 
        renderItem={({item}) => 
        <CarItem car = {item}/>
        }/>
        

    </View>
  );
};


export default Carros;

