import React, { Component } from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import Drawer from '../compo/drawer';
import {createDrawerNavigator} from 'react-navigation-drawer'
import {BottomTab} from '../compo/tab';
import Update from '../Screens/setting';
import MyExchenges from '../Screens/Mybarter'
import Notifications from '../Screens/Notification';
  import MyItems from '../Screens/MyRecievedItem';
import { Icon } from 'react-native-elements';
import LogOut from '../Screens/logout';
export const SideDrawer = createDrawerNavigator({
  Home:{screen:BottomTab
  ,
  navigationOptions:{
   drawerIcon:<Icon name="home"/>
  }
  },
  Settings:{screen:Update,
    navigationOptions:{
      drawerIcon:<Icon name="settings"/>
     }},
  MyBarters:{screen:MyExchenges,
    navigationOptions:{
      drawerIcon:<Icon name="gift" type="font-awesome"/>
     }},
  MyRecievedItems:{screen:MyItems,
    navigationOptions:{
      drawerIcon:<Icon name="gift" type="font-awesome"/>
     }},
  YourNotification:{screen:Notifications,
    navigationOptions:{
      drawerIcon:<Icon name="bell" type="font-awesome" />
    
     }},
LogOut:{
  screen:LogOut,
  navigationOptions:{
    drawerIcon:<Icon name="logout" type="fontawesome5" />
  }
}
},
  {
      contentComponent:Drawer
    
  }
  ,{
      initialRouteName:'Home'
     
  }
  
)
export default SideDrawer;