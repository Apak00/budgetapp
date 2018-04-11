import React from "react";
import {Image, View} from "react-native";
import {DrawerNavigator, StackNavigator} from 'react-navigation'
import LoginPage from '../_components/LoginStack/LoginPage'
import RegisterPage from "../_components/LoginStack/RegisterPage";
import HomePage from "../_components/MainStack/HomePage";
import AboutPage from "../_components/MainStack/AboutPage";
import ProfilePage from "../_components/MainStack/Profile/ProfilePage";
import stylePack from "../Styles/styles";
import {Menu, MenuOption, MenuOptions, MenuTrigger} from "react-native-popup-menu";
import firebase from 'firebase';
import {BaseButton} from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import store from "../Store/Reducers";


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
              drawerIcon: () => (<Icon name={"home"} size={30}/>),
          }
      },
      aboutPage: {
          screen: AboutPage, navigationOptions: {
              title: "About us",
              drawerIcon: () => (<Icon name={"turkish-lira"} size={30}/>),
          }
      },
      profilePage: {
          screen: ProfilePage, navigationOptions: {
              title: "Profile",
              drawerIcon: () => (<Icon name={"user"} size={30}/>),
          }
      }

  }, {
      navigationOptions: {},
      gesturesEnabled: false,
  }
);
const DrawerNavigation = StackNavigator({
    drawerStack: {screen: DrawerStack}
}, {
    headerMode: 'screen',
    navigationOptions: ({navigation, transitioning}) => ({
        gesturesEnabled: false,
        headerStyle: [stylePack.headerStyle, stylePack.appMainColor],
        headerTintColor: '#333',
        headerLeft:
          <BaseButton
            style={stylePack.hamburgerContainer}
            disabled={transitioning}
            onPress={() => {
                if (navigation.state.index === 0) {
                    navigation.navigate({routeName: "DrawerOpen", key: "openNiceLa"});
                } else {
                    navigation.navigate({routeName: "DrawerClose", key: "closeNiceLa"})
                }
            }}>
              <View style={stylePack.hamburgerStick}/>
              <View style={stylePack.hamburgerStick}/>
              <View style={stylePack.hamburgerStick}/>
          </BaseButton>,
        headerRight:
          <Menu>
              <MenuTrigger style={stylePack.dotMenuContainer}>
                  <View style={stylePack.dotMenu}/>
                  <View style={stylePack.dotMenu}/>
                  <View style={stylePack.dotMenu}/>
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
