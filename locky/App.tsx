import { StatusBar } from 'expo-status-bar';
import React from "react-native";
import { StyleSheet, Text, View } from 'react-native' 

export default function app() {
  return (
    <View style={styles.container}>
      <Text>oi</Text>
      <Text>tchau</Text>
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
  },
});
