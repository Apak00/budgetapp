import React from "react";
import {View, StyleSheet, Text} from "react-native";

export default class AboutPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
          <View>
              <Text>
                  Holla About
              </Text>
          </View>
        );
    }
}