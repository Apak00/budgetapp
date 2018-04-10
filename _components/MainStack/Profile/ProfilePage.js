import React from "react";
import {TabBarBottom, TabNavigator, TabView} from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";
import Profile from "./Profile";
import Messages from "./Messages";
import stylePack from "../../../Styles/styles";


export default TabNavigator({

      profile: {
          screen: Profile,
          navigationOptions: {
              tabBarLabel: "Profile",
          }
      },
      messages: {
          screen: Messages,
          navigationOptions: {
              tabBarLabel: "Messages",
          }
      }
  }, {
      navigationOptions: ({navigation}) => ({
          tabBarIcon: ({focused, tintColor}) => {
              const {routeName} = navigation.state;
              let iconName;
              if (routeName === 'profile') {
                  iconName = `user-circle${focused ? '' : '-o'}`;
              } else if (routeName === 'messages') {
                  iconName = `commenting${focused ? '' : '-o'}`;
              }

              // You can return any component that you like here! We usually use an
              // icon component from react-native-vector-icons
              return <Icon name={iconName} size={25} color={tintColor}/>;
          },
      }),
      tabBarComponent: TabBarBottom,
      tabBarPosition: 'bottom',
      tabBarOptions: {
          activeTintColor: stylePack.appMainColor.backgroundColor,
          inactiveTintColor: 'gray',
      },
  }
);