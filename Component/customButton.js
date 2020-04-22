import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignUp from './signUp';
import {StyleSheet, Text, Button, TouchableOpacity, View} from 'react-native';

export default (CustomButton = ({navigation}) => {
  let elv = 10;
  const onClick = () => {
    elv = 0;
  };

  const onRemove = () => {
    elv = 10;
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, {elevation: elv}]}
        onPressIn={onClick()}
        onPressOut={onRemove()}>
        <Text style={{color: '#fff', fontSize: 15, textTransform: 'uppercase'}}>
          Login
        </Text>
      </TouchableOpacity>
      <View style={styles.signupText}>
        <Text style={{}}>Dont have an account?</Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('signUp')}
          style={[styles.button, {elevation: elv}]}
          onPressIn={onClick()}
          onPressOut={onRemove()}>
          <Text
            style={{color: '#fff', fontSize: 15, textTransform: 'uppercase'}}>
            Signup
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    marginVertical: 50,
    paddingVertical: 50,
    alignItems: 'center',
  },
  signupText: {
    marginTop: 30,
    marginBottom: -30,
  },
  button: {
    alignItems: 'center',
    width: 150,
    padding: 15,
    position: 'absolute',
    backgroundColor: '#742dd2',
    borderRadius: 100,
    shadowColor: '#ffffff',
    shadowOffset: {width: -70, height: -70},
    shadowOpacity: 0.3,
    shadowRadius: 50,
  },
});
