import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Title from './componentes/title'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto} > Alexsandro Gumercindo</Text>
      <Title/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#555'
  },
  texto: {
    fontSize: 30,
    color: '#fff'
  }
});
