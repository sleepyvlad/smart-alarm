import BleManager from 'react-native-ble-manager';

export const enableBluetooth = () => {
    BleManager.enableBluetooth()
        .then(() => {
            console.log('Bluetooth enabled');
        })
        .catch((error) => {
            console.log('Oops some error');
        })
};

export const findDeivce = () => {
  BleManager.start({showAlert: false}).then(() => {
      alert(2);
  } );
};