import React from "react";
import {View, Text, TextInput, Button, Modal, ActivityIndicator} from "react-native";
import stylePack from "../../Styles/styles";
import firebase from "firebase";
import store from "../../Store/Reducers";
import PropTypes from "prop-types";
import LoadingDots from "../common/LoadingDots";
import {connect} from "react-redux";
import FullScreenActionIndicator from "../common/FullScreenActionIndicator";

class LoginPage extends React.Component {
    constructor(props, context) {
        super(props, context);


        this.handleLogin = this.handleLogin.bind(this);
        this.pretendLogin = this.pretendLogin.bind(this);
        //this.pretendLogin();
    }

    componentDidMount() {
        store.dispatch({type: "STATUSBAR_COLOR", color: "#333"});
    }

    async handleLogin() {
        if (this.state.email && this.state.password) {
            store.dispatch({type: "LOADER", onStatus: true});
            await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
              .catch(function (err) {
                  console.log("E-mail or password is wrong! see: " + err.message)
              })
              .then(() => {
                  console.log("user loged in");
                  this.props.navigation.navigate("drawerStack");
              }).finally(() => {
                  store.dispatch({type: "LOADER", onStatus: false});
              });
        }
    };

    pretendLogin() {
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE)
          .then(async () => {
              store.dispatch({type: "LOADER", onStatus: true});
              return (await firebase.auth().signInWithEmailAndPassword("Selamlar@kimo.com", "password"));
          })
          .finally(() => {
              store.dispatch({type: "LOADER", onStatus: false});
          })
          .catch(function (error) {
              console.log(error.code + " : " + error.message);
          }).then(() => {
            this.props.navigation.navigate("drawerStack");
        });
    }


    render() {
        return (
          <View style={stylePack.container}>
              <TextInput
                style={stylePack.inputText}
                onChangeText={(email) => this.setState({email})}
                placeholder="E-mail"
              />
              <TextInput
                style={stylePack.inputText}
                onChangeText={(password) => this.setState({password})}
                placeholder="password"
                secureTextEntry={true}
              />
              <Button
                title={"log in"}
                onPress={this.handleLogin}>
              </Button>
              <Text
                style={stylePack.linky}
                onPress={() => this.props.navigation.navigate('registerScreen')}>
                  Register Here!
              </Text>
              <Button
                title={"pretend Login!"}
                onPress={this.pretendLogin}>
              </Button>
              <FullScreenActionIndicator />
          </View>
        );
    }
}

LoginPage.propTypes = {
    navigation: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {
        //loaderOnStatus: state.others.loaderOnStatus
    }
};

export default connect(mapStateToProps)(LoginPage);


