import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';

const Home = props => {
  return (
    <View>
      <Button
        title="Book"
        onPress={() => {
          props.navigation.navigate('Booking');
        }}
      />
    </View>
  );
};
export default Home;
