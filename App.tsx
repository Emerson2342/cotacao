import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ClientesProvider } from './src/Context/useClienteContext';
import { Routes } from './src/routes';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <ClientesProvider>
          <Routes />
          <StatusBar
            backgroundColor='#281637'
            style="light"
            translucent={false}
          />
        </ClientesProvider>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});