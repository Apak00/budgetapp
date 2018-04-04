import React from "react";
import {View, StyleSheet, Text, TextInput, Button} from "react-native";
import stylePack from "../../Styles/styles";
import firebase from "firebase";

export default class RegisterPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleRegister = this.handleRegister.bind(this);
    }

    handleRegister() {
        if (this.state.email && this.state.password) {
            firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function (err) {
                console.log("user didint registered: " + err);
            }).then(() => {
                console.log("user is registered!");

                this.props.navigation.navigate("drawerStack");
            })
        }
    };

    render() {
        return (
          <View style={stylePack.container}>
              <TextInput
                style={stylePack.inputText}
                onChangeText={(email) => this.setState({email})}
              />
              <TextInput
                style={stylePack.inputText}
                onChangeText={(password) => this.setState({password})}
                secureTextEntry={true}
              />
              <Button
                title={"Register"}
                onPress={this.handleRegister}>
              </Button>
              <Text
                style={stylePack.linky}
                onPress={() => this.props.navigation.navigate('loginScreen')}>
                  Login Here!
              </Text>
          </View>
        );
    }


}