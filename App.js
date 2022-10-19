/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import StackNav from './src/navigation/StackNavigation';
import {Provider} from 'react-redux';
import store from './src/store';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist'

let persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <StackNav />
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
