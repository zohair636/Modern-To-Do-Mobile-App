import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function RootLayout() {

  return (
    <View>
      <StatusBar style="dark" />
      <Text>Hello</Text>
    </View>
  );
}
