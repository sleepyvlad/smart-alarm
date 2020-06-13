import BleManager from 'react-native-ble-manager';

// export const findDeivce = () => {
//   BleManager.start({showAlert: false})
//       .catch((err) => {
//           console.log(err);
//       })
//       .then(() => {
//           console.log('bluetooth started');
//       });
//   BleManager.enableBluetooth()
//       .catch((err) => {
//           console.log(err);
//       })
//       .then(() => {
//           console.log('Bluetooth enabled');
//       });
//   setTimeout(() => { BleManager.stopScan()
//       .catch((err) => {
//           console.log(err);
//       })
//       .then(() => {
//           console.log('scan stopped');
//           BleManager.getDiscoveredPeripherals([])
//               .then((peripheralsArray) => {
//                   console.log('Discovered peripherals: ' + peripheralsArray.length);
//               });
//       }); }, 10000);
//
// };
//
// const bluetoothHandler = () => {
//
// }