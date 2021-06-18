import React from 'react';
import {Text, View, Button} from 'react-native';

const Profile = props => {
  return (
    <View>
      <Button
        title="Latest Trips"
        onPress={() => {
          props.navigation.navigate('TripsHistory');
        }}
      />

      <Button
        title="Edit Profile"
        onPress={() => {
          props.navigation.navigate('Edit');
        }}
      />
    </View>
  );
};

export default Profile;
