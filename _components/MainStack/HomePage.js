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
    }

    componentDidMount() {
        store.dispatch({type: "STATUSBAR_COLOR", color: "#2e4d6f"});
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