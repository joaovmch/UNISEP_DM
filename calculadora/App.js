import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [resultado, setResultado] = useState('');

  // Se algum campo estiver vazio, avisa e retorna true (pra operação não continuar)
  const faltaValor = () => {
    if (valor1.trim() === '' || valor2.trim() === '') {
      setResultado('Preencha os dois valores');
      return true;
    }
    return false;
  };

  const soma = () => {
    if (faltaValor()) return;
    setResultado(String(Number(valor1) + Number(valor2)));
  };

  const subtracao = () => {
    if (faltaValor()) return;
    setResultado(String(Number(valor1) - Number(valor2)));
  };

  const multiplicacao = () => {
    if (faltaValor()) return;
    setResultado(String(Number(valor1) * Number(valor2)));
  };

  const divisao = () => {
    if (faltaValor()) return;
    if (Number(valor2) === 0) {
      setResultado('Não dá pra dividir por zero');
      return;
    }
    setResultado(String(Number(valor1) / Number(valor2)));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora</Text>

      <TextInput
        style={styles.input}
        placeholder="Valor 1"
        placeholderTextColor="#888"
        keyboardType="numeric"
        value={valor1}
        onChangeText={setValor1}
      />

      <TextInput
        style={styles.input}
        placeholder="Valor 2"
        placeholderTextColor="#888"
        keyboardType="numeric"
        value={valor2}
        onChangeText={setValor2}
      />

      <View style={styles.botoes}>
        <Button title="+" onPress={soma} />
        <Button title="-" onPress={subtracao} />
        <Button title="x" onPress={multiplicacao} />
        <Button title="/" onPress={divisao} />
      </View>

      <Text style={styles.label}>Resultado</Text>
      <TextInput
        style={styles.input}
        value={resultado}
        editable={false}
      />

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#090909',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
    fontSize: 18,
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 10,
  },
  label: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 5,
  },
});
