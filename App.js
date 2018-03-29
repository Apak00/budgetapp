import React from 'react';
import {Provider} from 'react-redux';
import createStore from './Store/Reducers';
import ReduxNavigation from './Navigation/ReduxNavigation';
import {StatusBar, StyleSheet, View} from "react-native";

const store = createStore;

export default class App extends React.Component {
    render() {
        return (
              <Provider store={store}>
                  <ReduxNavigation/>
              </Provider>
        )
    }
}


