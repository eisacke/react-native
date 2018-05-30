import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'typeface-roboto';
import { NativeRouter } from 'react-router-native';
import Routes from './components/utility/Routes';

import Navbar from './components/utility/Navbar';

import DeviceStorage from './lib/DeviceStorage';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { isAuthenticated } from './actions';

const store = configureStore();

export default class App extends React.Component {

  componentDidMount = () => {
    DeviceStorage.getItem('token').then((token) => {
      if (token) store.dispatch(isAuthenticated({ token }));
    });
  }

  render() {
    return (
      <Provider store={store}>
        <NativeRouter>
          <View style={styles.container}>
            <Navbar />
            <View>
              <Text>HEY AJAY!</Text>
            </View>
            <Routes />
          </View>
        </NativeRouter>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Rubik'
  }
});
