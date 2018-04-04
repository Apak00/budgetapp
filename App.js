import React from 'react';
import {connect, Provider} from 'react-redux';
import store from './Store/Reducers';
import ReduxNavigation from './Navigation/ReduxNavigation';
import firebase from 'firebase';
import {StatusBar, View} from "react-native";
import {MenuProvider} from "react-native-popup-menu";

console.disableYellowBox = true;
console.ignoredYellowBox = true;

export default class App extends React.Component {
    constructor(props, context) {
        super(props, context);

        const firebaseConfig = {
            apiKey: "AIzaSyDFcO-KUIU_TTMnkM3c0LjbTcTT0ytyWLo",
            authDomain: "budgetapp000.firebaseapp.com",
            databaseURL: "https://budgetapp000.firebaseio.com",
            projectId: "budgetapp000",
            storageBucket: "budgetapp000.appspot.com",
            messagingSenderId: "801041384220"
        };
        firebase.initializeApp(firebaseConfig);
    }

    render() {
        return (
          <Provider store={store}>
              <InterComponent/>
          </Provider>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        appState: state.others.statusBarStyle
    }
}

const InterComponent = connect(mapStateToProps)(() => (

  <View style={{flex: 1}}>
      <View style={store.getState().others.statusBarStyle}>
          <StatusBar/>
      </View>
      <MenuProvider>
          <ReduxNavigation/>
      </MenuProvider>
  </View>
));















