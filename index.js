import { registerRootComponent } from 'expo';
import React from 'react';
import { View } from 'react-native';



// import { registerRootComponent } from 'expo';

import Apps from './App';

// // registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// // It also ensures that whether you load the app in the Expo client or in a native build,
// // the environment is set up appropriately

registerRootComponent(Apps);
