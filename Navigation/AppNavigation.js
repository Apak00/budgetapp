import React from "react";
import {Image, Text, TouchableOpacity, View} from "react-native";
import {DrawerNavigator, StackNavigator} from 'react-navigation'
import LoginPage from '../_components/LoginStack/LoginPage'
import RegisterPage from "../_components/LoginStack/RegisterPage";
import HomePage from "../_components/MainStack/HomePage";
import AboutPage from "../_components/MainStack/AboutPage";
import stylePack from "../Styles/styles";
import {Menu, MenuOption, MenuOptions, MenuTrigger} from "react-native-popup-menu";
import firebase from 'firebase';


const LoginStack = StackNavigator({
    loginScreen: {screen: LoginPage, navigationOptions: {title: "Login",}},
    registerScreen: {screen: RegisterPage, navigationOptions: {title: "Register"}},
}, {
    initialRouteName: 'loginScreen',
    headerMode: 'screen',
    navigationOptions: {
        headerStyle: stylePack.headerStyle,
        headerTintColor: "#fff",
    }
});
const DrawerStack = DrawerNavigator({
      homePage: {
          screen: HomePage, navigationOptions: {
              title: "Home",
              drawerIcon: () => (
                <Image
                  source={{uri: `https://dummyimage.com/60x60/000/fff.jpg&text=1`}}
                  style={{width: 20, height: 20, borderRadius: 10}}
                />),
          }
      },
      aboutPage: {
          screen: AboutPage, navigationOptions: {
              title: "About us",
              drawerIcon: () => (
                <Image
                  source={{uri: `https://dummyimage.com/60x60/000/fff.jpg&text=2`}}
                  style={{width: 20, height: 20, borderRadius: 10}}
                />),
          }
      },

  }, {
      navigationOptions: {},
      gesturesEnabled: false
  }
);
const DrawerNavigation = StackNavigator({
    drawerStack: {screen: DrawerStack}
}, {
    headerMode: 'screen',
    navigationOptions: ({navigation}) => ({
        gesturesEnabled: false,
        headerStyle: [stylePack.headerStyle, {backgroundColor: '#05a1d1', borderTopColor: "#27B18A"}],
        headerTintColor: '#fff',
        headerLeft:
          <TouchableOpacity
            style={stylePack.hamburgerContainer}
            onPress={() => {
                navigation.navigate('DrawerToggle');
            }}>
              <View style={stylePack.hamburgerStick}/>
              <View style={stylePack.hamburgerStick}/>
              <View style={stylePack.hamburgerStick}/>
          </TouchableOpacity>,
        headerRight:
          <Menu>
              <MenuTrigger style={stylePack.dotContainer}>
                  <View style={stylePack.dot}/>
                  <View style={stylePack.dot}/>
                  <View style={stylePack.dot}/>
              </MenuTrigger>
              <MenuOptions>
                  <MenuOption
                    onSelect={() => {
                        firebase.auth().signOut().then(function () {
                            // Sign-out successful.
                        }, function (error) {
                            // An error happened.
                            alert("Could not Sign Out")
                        });
                    }}
                    text='Log Out'/>
              </MenuOptions>
          </Menu>
    })
});
const PrimaryNav = StackNavigator({
    loginStack: {
        screen: LoginStack
    },
    drawerStack: {screen: DrawerNavigation},
}, {
    headerMode: "none",
    initialRouteName: 'loginStack',
    navigationOptions: {
        headerTintColor: '#fafafa',
    },
});

export default PrimaryNav;
