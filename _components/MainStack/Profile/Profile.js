import React from "react";
import {View, Text,} from "react-native";
import stylePack from "../../../Styles/styles";
import firebase from "firebase";


export default class Profile extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            user: firebase.currentUser,
        }
    }

    render() {
        return (
          <View style={stylePack.container}>
              <Text>
                  Wellcome!
              </Text>
          </View>
        );
    }
}