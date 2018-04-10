import React from "react";
import {View, Text,} from "react-native";
import stylePack from "../../../Styles/styles";


export default class Profile extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
          <View style={stylePack.container}>
              <Text>
                  Messages
              </Text>
          </View>
        );
    }
}