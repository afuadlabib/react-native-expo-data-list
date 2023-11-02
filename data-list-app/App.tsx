import AppLayout from './src/navigator/AppLayout';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <AppLayout/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App