import React from "react";
import {View, Text,} from "react-native";
import store from '../../Store/Reducers';
import firebase from "firebase";
import stylePack from "../../Styles/styles";


export default class AboutPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
          <View style={stylePack.container}>
              <Text
                style={stylePack.linky}
                onPress={() => {
                    store.dispatch({type: "LOG", text: "Redux's actions and reducers work just fine"})
                }}>
                  Release
              </Text>
          </View>
        );
    }
}