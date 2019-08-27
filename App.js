import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen'


const MyHome = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    defaultNavigationOptions:{
      title: 'Home'
    }
  } 
);

const MyProfile = createStackNavigator(
  {
    Profile: ProfileScreen
  },
  {
    defaultNavigationOptions:{
      title: 'Profile'
    }
  } 
);

const MyTabs = createBottomTabNavigator(
  {
    Home: MyHome,
    Profile: MyProfile
  },
  {
    defaultNavigationOptions:({navigation}) =>{
      return {
        tabBarIcon:({tintColor}) =>{
           const {routeName} = navigation.state;
           let iconName
          // if(routName =="Home"){

          //   iconName = 'md-home'
  
          // }else if(routName == "Profile"){

          //   iconName = 'md-home'
          // }
  
          // return <Ionicons name = {iconName} size = {30} color = {tintColor}/>

          if(routeName == 'Home'){

            iconName =  <Image
                              source = {require('./icons/home.png')}
                              style = {{width:30, height: 30}}
                              tintColor = {tintColor}
                        />
          
          }else if(routeName == 'Profile'){

            iconName = <Image
                             source = {require('./icons/profile.png')}
                             style = {{width:30, height: 30}}
                             tintColor = {tintColor}
                       />
          }
          
          return iconName
        },

        tabBarOptions:{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }
      }
      
    }
 
  } 
);

const AppContainer =  createAppContainer(MyTabs);

export default class App extends React.Component{

  render(){
    return <AppContainer/>
  }
}


