import React from "react";
import {View, Text, BackHandler} from "react-native";
import store from '../../Store/Reducers';
import {connect} from "react-redux";
import {Alert} from "react-native";
import {NavigationActions} from "react-navigation";
import firebase from "firebase";

class HomePage extends React.Component {
    constructor(props, context) {
        super(props, context);

        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                console.log("user is signed in! at HomePage");
            } else {
                const resetAction = NavigationActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({routeName: "loginStack"})],
                    key: null
                });
                props.navigation.dispatch(resetAction);
                // TODO reset the history of react-navigation
                console.log("user is signed out!");
            }
        });

    }

    componentDidMount() {
        store.dispatch({type: "STATUSBAR_COLOR", color: "#27B18A"});
        BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
    }

    onBackPress = () => {
        Alert.alert(
          'Exit App',
          null,
          [
              {text: 'Cancel', style: 'cancel'},
              {
                  text: 'OK', onPress: () => {
                      BackHandler.exitApp();
                  }
              },
          ],
          {cancelable: false}
        );
        return true;
    };

    render() {
        return (
          <View>
              <Text>
                  Holla Home
              </Text>
          </View>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        appState: state
    }
}

export default connect(mapStateToProps)(HomePage);