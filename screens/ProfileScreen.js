import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';


export default class AboutScreen extends React.Component {

    render() {
  
      return (
        <View style={styles.container}>
          <Text>{this.props.navigation.getParam('text', 'text')}</Text>
          <Text>Profile Screen</Text>
  
          <Button
            title='Go To Home'
  
            // both navigate() & push are working
            //onPress={() => this.props.navigation.navigate('About')}
            onPress={() => this.props.navigation.navigate('Home')}
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