import React from 'react';
import {Provider} from 'react-redux';
import createStore from './Store/Reducers';
import ReduxNavigation from './Navigation/ReduxNavigation';
import {
    AppRegistry,
    StyleSheet,
    View,
    StatusBar,
    Platform,
} from 'react-native';

const store = createStore;
export default class App extends React.Component {
    constructor() {
        super();
        console.log("APP OPENED");
    }

    render() {
        return (
          <Provider store={store}>
                  <AppWithStatusBar/>
          </Provider>
        )
    }
}


const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

class AppWithStatusBar extends React.Component {
    render() {
        return (
          <View style={styles.container}>
              <MyStatusBar backgroundColor={"#000000"} barStyle="light-content" />
              <ReduxNavigation/>
          </View>
        );
    }
}

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 30 : 24;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    statusBar: {
        height: STATUSBAR_HEIGHT,
    },
});

AppRegistry.registerComponent('App', () => AppWithStatusBar);



