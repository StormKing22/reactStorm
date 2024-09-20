import React from "react-native";
import { StyleSheet, Text, View } from 'react-native' 

export default function app() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text>Box1</Text>
      </View>
      <View style={styles.box2}>
        <Text>Box 2</Text>
      </View>
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
  box1: {
    width: 100,
    height:100,
    backgroundColor: 'gold',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  box2: {
    width: 100,
    height:100,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
