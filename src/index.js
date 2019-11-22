import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Keyboard,
  StatusBar,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import api from './services/api';
import Card from './components/Card';

const App = () => {
  const [local, setLocal] = useState({});
  const [cep, setCep] = useState('');
  const [active, setActive] = useState(false);

  async function buscaCep(cepNumber) {
    Keyboard.dismiss();
    const response = await api.get(`/ws/${cepNumber}/json/`);
    if (response.data.erro) {
      Alert.alert('CEP INVALIDO');
      setActive(false);
      setCep('');
      return;
    }
    setLocal(response.data);
    setActive(true);
    setCep('');
  }
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="transparent" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <SafeAreaView style={styles.container}>
          <TextInputMask
            style={styles.inputCep}
            type={'zip-code'}
            onChangeText={text => setCep(text.replace('-', ''))}
            value={cep}
            textAlign={'center'}
            placeholder="Digite o CEP"
            keyboardType="number-pad"
            maxLength={9}
          />
          <TouchableOpacity onPress={() => buscaCep(cep)} style={styles.button}>
            <Text style={styles.buttonText}>Pesquisar</Text>
          </TouchableOpacity>
          {active && <Card data={local} />}
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2d3436',
  },
  inputCep: {
    alignSelf: 'stretch',
    height: 50,
    backgroundColor: '#fff',
    marginHorizontal: 20,
    paddingHorizontal: 10,
    fontSize: 30,
    borderRadius: 20,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#636e72',
    alignSelf: 'stretch',
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 20,
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default App;
