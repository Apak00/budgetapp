import React from "react";
import {Image, StatusBar, StyleSheet, TouchableOpacity, View} from "react-native";
import {DrawerNavigator, StackNavigator} from 'react-navigation'
import LoginPage from '../_components/LoginStack/LoginPage'
import RegisterPage from "../_components/LoginStack/RegisterPage";
import HomePage from "../_components/MainStack/HomePage";
import AboutPage from "../_components/MainStack/AboutPage";


const styles = StyleSheet.create({

    hamburgerStick: {
        backgroundColor: "black",
        width: 30,
        height: 4,
        marginTop: 3,
        marginBottom: 3,
        borderRadius: 2,
    },
    hamburgerContainer: {
        marginLeft: 10,
    }
});

const LoginStack = StackNavigator({
    loginScreen: {
        screen: LoginPage, navigationOptions: {
            title: "Login"
        }
    },
    registerScreen: {screen: RegisterPage, navigationOptions: {title: "Register"}},
}, {
    initialRouteName: 'loginScreen',
    headerMode: 'float',
    navigationOptions: {
        headerStyle: {backgroundColor: '#444444'},
        headerTintColor: 'white'
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
      gesturesEnabled: false
  }
);
const DrawerNavigation = StackNavigator({
    drawerStack: {screen: DrawerStack}
}, {
    headerMode: 'float',
    navigationOptions: ({navigation}) => ({
        gesturesEnabled: false,
        headerStyle: {backgroundColor: '#05a1d1'},
        headerTintColor: 'white',
        headerLeft: <TouchableOpacity
          style={styles.hamburgerContainer}
          onPress={() => {
              navigation.navigate('DrawerToggle');
          }}>
            <View style={styles.hamburgerStick}/>
            <View style={styles.hamburgerStick}/>
            <View style={styles.hamburgerStick}/>
        </TouchableOpacity>
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
        headerStyle: {backgroundColor: '#05a1d1'},
        headerTintColor: '#fafafa',
        headerTitleStyle: {fontWeight: 'bold',},
    },
});

export default PrimaryNav;
