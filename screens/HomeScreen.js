import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';


export default class HomeScreen extends React.Component {

    render() {
  
      return (
        <View style={styles.container}>
          <Text>Home Screen</Text>
          <Button
            title='Go To Profile'
  
            // both navigate() & push are working
            onPress={() => this.props.navigation.navigate('Profile',{text: 'Hello Profile' })}
            //onPress={() => this.props.navigation.push('Profile',{text: 'Hello Profile'})}
          />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });