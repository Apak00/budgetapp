import React from "react";
import {View, Text, BackHandler, Modal, TouchableHighlight} from "react-native";
import firebase from "firebase/index";
import store from '../../Store/Reducers';
import {connect} from "react-redux";
import {Alert} from "react-native";

class HomePage extends React.Component {
    constructor(props, context) {
        super(props, context);
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                console.log("user is signed in! at HomePage");
            } else {
                // TODO reset the history of react-navigation
                props.navigation.navigate("loginScreen");
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
          'Log Out',
          null,
          [
              {text: 'Cancel', onPress: () => console.log('Canceled'), style: 'cancel'},
              {text: 'OK', onPress: () => {
                      firebase.auth().signOut().then(function () {
                          // Sign-out successful.
                      }, function (error) {
                          // An error happened.
                          alert("Could not Sign Out")
                      });
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
              <Modal
                animationType="slide"
                transparent={false}
                visible={store.getState().others.modalVisible}
                onRequestClose={() => {
                    store.dispatch({type: "MODAL", state: false});
                }}>
                  <View style={{marginTop: 22}}>
                      <View>
                          <Text>Hello World!</Text>

                          <TouchableHighlight
                            onPress={() => {
                                store.dispatch({type: "MODAL", state: false});
                            }}>
                              <Text>Hide Modal</Text>
                          </TouchableHighlight>
                      </View>
                  </View>
              </Modal>
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