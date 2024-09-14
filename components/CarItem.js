import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CarItem = ({ car }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.nome}>{car.nome}</Text>
      <Text style={styles.marca}>{car.marca}</Text>
      <Text style={styles.ano}>{car.ano}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: 'orange',
    borderRadius: 8,
    elevation: 2,
  },
  nome: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  marca: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
  ano: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
  },
});

export default CarItem;