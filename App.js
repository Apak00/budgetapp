import React from 'react';
import {connect, Provider} from 'react-redux';
import store from './Store/Reducers';
import ReduxNavigation from './Navigation/ReduxNavigation';
import firebase from 'firebase';
import {StatusBar, View} from "react-native";
import {MenuProvider} from "react-native-popup-menu";
import {NavigationActions} from "react-navigation";

console.disableYellowBox = true;


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
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                // User is signed in.
                console.log("user is signed in!");
            } else {
                console.log("No user found");
                const resetAction = NavigationActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({routeName: "loginStack"})],
                    key: null
                });
                store.dispatch(resetAction)
            }
        });

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















