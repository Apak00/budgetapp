import React from "react";
import {View, StyleSheet, Text, StatusBar} from "react-native";

export default class HomePage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

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