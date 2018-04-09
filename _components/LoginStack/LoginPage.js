import React from "react";
import {View, Text, TextInput, Button} from "react-native";
import stylePack from "../../Styles/styles";
import firebase from "firebase";
import store from "../../Store/Reducers";
import PropTypes from "prop-types";

export default class LoginPage extends React.Component {
    constructor(props, context) {
        super(props, context);


        this.handleLogin = this.handleLogin.bind(this);
        this.pretendLogin = this.pretendLogin.bind(this);
    }

    componentDidMount() {
        store.dispatch({type: "STATUSBAR_COLOR", color: "#333"});
    }

    handleLogin() {
        if (this.state.email && this.state.password) {
            firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(function (err) {
                console.log("E-mail or password is wrong! see: " + err.message)
            }).then(() => {
                console.log("user loged in");
                this.props.navigation.navigate("drawerStack");
            });
        }
    };

    pretendLogin() {
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE)
          .then(function() {
              return firebase.auth().signInWithEmailAndPassword("Selamlar@kimo.com", "password");
          })
          .catch(function(error) {
              // Handle Errors here.
              let errorCode = error.code;
              let errorMessage = error.message;
              console.log(errorCode + " : " + errorMessage)
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


          </View>
        );
    }
}

LoginPage.propTypes = {
    navigation: PropTypes.object.isRequired,
};

