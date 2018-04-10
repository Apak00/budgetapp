import React from "react";
import {View, Text, BackHandler, AppState, Alert} from "react-native";
import store from '../../Store/Reducers';
import {connect} from "react-redux";
import Icon from "react-native-vector-icons/EvilIcons";


class HomePage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            activityState: AppState.currentState
        }
    }

    componentDidMount() {
        store.dispatch({type: "STATUSBAR_COLOR", color: "#2e4d6f"});
        BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
        AppState.addEventListener("change", this.handleChangeOnAppState);
    }

    handleChangeOnAppState = (nextAppState) => {
        console.log(nextAppState);
        if (this.state.activityState === "active" ) {
            Alert.alert("Unpause", null, [
                {
                    text: 'OK', onPress: () => {
                    }
                },
            ], {cancelable: false});
        }
    };

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
                  <Icon name="heart" size={24} color={"black"}/>

                  &nbsp;Holla Home
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