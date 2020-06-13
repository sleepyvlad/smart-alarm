import React,{ useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, NativeEventEmitter, NativeModules } from 'react-native';
import BleManager from 'react-native-ble-manager';
import { Scene, Router, Actions, Stack } from 'react-native-router-flux';

import {buttonColor} from "./constants/colors";

const BleManagerModule = NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);

export default function App() {

    let foundDevices = [];
    let hc05;


    const enableBluetoothAndScan = () => {

        BleManager.enableBluetooth()
            .then(() => {
                console.log('Bluetooth enabled');
            })
            .catch((err) => {
                console.log(err);
            });
        BleManager.scan([], 10)
            .catch((err) => {
                console.log(err);
            })
            .then(() => {
                console.log('scanning');
            });
        BleManager.getBondedPeripherals([])
            .then((bondedPeripherals) => {
              foundDevices = bondedPeripherals;
            })
    };


    const handleDiscoverPeripheral = (peripheral) => {
        console.log('somth');
        if (peripheral.name) {
            foundDevices.set(peripheral.id, peripheral.name);
        }
    };

    const handleStopScan = () => {
        hc05 = foundDevices.find((el) => el.advertising.localName === 'HC-05');
        console.log(hc05.id);
        BleManager.connect(hc05.id).then(() => {
            alert('connected');
        }).catch((error) => {
            // Failure code
            console.log(error);
        });
        BleManager.getConnectedPeripherals([]).then((peripheralsArray) => {
            // Success code
            console.log("Connected peripherals: " + peripheralsArray.length);
        });
    };

    useEffect(() => {
        BleManager.start({showAlert: false});
        bleManagerEmitter.addListener('BleManagerDiscoverPeripheral', handleDiscoverPeripheral);
        bleManagerEmitter.addListener('BleManagerStopScan', handleStopScan);

        return () => {
            bleManagerEmitter.removeListener('BleManagerDiscoverPeripheral', handleDiscoverPeripheral);

            bleManagerEmitter.removeListener('BleManagerStopScan', handleStopScan);
        }

    });



  return (
      <View style={styles.container}>
          <Text style={styles.header}>Smart alarm</Text>
          <View style={styles.buttonContainer}>
              <Button title="Найти устройство" onPress={() => enableBluetoothAndScan()} color={buttonColor}/>
          </View>
          <View style={styles.buttonContainer}>
              <Button title="Установить будильник" onPress={() => {
              }} color={buttonColor}/>
          </View>
          <View style={styles.buttonContainer}>
              <Button title="Установить период просыпания" onPress={() => {
              }} color={buttonColor}/>
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
