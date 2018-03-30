import React from "react";
import {View, StyleSheet, Text, StatusBar} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    linky: {
        color: 'blue',
        paddingTop: 10
    },
});
export default class LoginPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
          <View style={styles.container}>
              <Text>
                  Holla Login
              </Text>
              <Text
                style={styles.linky}
                onPress={() => this.props.navigation.navigate('drawerStack')} >
                  Pretend we logged in
              </Text>
          </View>
        );
    }
}

