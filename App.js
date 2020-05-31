import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { findDeivce } from "./utils/bluetooth";

import { buttonColor } from "./constants/colors";

export default function App() {

  return (
    <View style={styles.container}>
        <Text style={styles.header}>Smart alarm</Text>
        <View style={styles.buttonContainer}>
            <Button title="Найти устройство" onPress={findDeivce} color={buttonColor}/>
        </View>
        <View style={styles.buttonContainer}>
            <Button title="Установить будильник" onPress={() => {}} color={buttonColor}/>
        </View>
        <View style={styles.buttonContainer}>
            <Button title="Установить период просыпания" onPress={() => {}} color={buttonColor}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: 100,
  },
  buttonContainer: {
      marginTop: 20,
      paddingHorizontal: 20
  },
  header: {
      fontSize: 30,
      textAlign: 'center'
  }
});
