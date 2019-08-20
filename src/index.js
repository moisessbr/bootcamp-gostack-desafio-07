import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import FlashMessage from 'react-native-flash-message';
import './config/ReactotronConfig';
import store from './store';
import Routes from './routes';

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
      <StatusBar barStyle="light-content" backgroundColor="#141419" />
      <FlashMessage position="top" />
    </Provider>
  );
}
