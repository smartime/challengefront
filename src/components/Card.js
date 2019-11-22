import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import flags from '../utils/Constants';

export default function Card({ data }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerFlag}>
        <Image source={flags[data.uf]} style={styles.flag} />
      </View>
      <View>
        <View style={styles.info}>
          <Text style={styles.infoText}>Logradouro:</Text>
          <Text style={styles.text}>{data.logradouro}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.infoText}>Complemento:</Text>
          {data.complemento ? (
            <Text style={styles.text}>{data.complemento}</Text>
          ) : (
            <Text style={styles.text}>Sem Complemento</Text>
          )}
        </View>
        <View style={styles.info}>
          <Text style={styles.infoText}>Bairro:</Text>
          <Text style={styles.text}>{data.bairro}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.infoText}>Localidade:</Text>
          <Text style={styles.text}>{data.localidade}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    marginTop: 30,
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  containerFlag: {
    alignItems: 'center',
    marginBottom: 20,
  },
  flag: {
    width: 100,
    height: 80,
  },
  infoText: {
    color: '#333',
    fontSize: 12,
  },
  text: {
    fontSize: 18,
    color: '#000',
  },
  info: {
    marginBottom: 10,
  },
});
