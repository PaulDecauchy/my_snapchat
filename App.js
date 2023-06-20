import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import './styles.css'


export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-red-300">
      <Text className="text-blue-500">Open up App.js to start working on your app!</Text>
      <Text className="text-blue-500">Changes you make will automatically reload.</Text>
      <Text className="text-blue-500">Shake your phone to open the developer menu.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

