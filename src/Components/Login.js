import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import registerStyle from '../Styles/register';
import FirebaseUtilities from '../Utilities/firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScrollView>
      <View style={registerStyle.container}>
        <View style={{marginTop: 20}}>
          <Input
            style={registerStyle.inputStyle}
            keyboardType="email-address"
            placeholder="Email"
            leftIcon={<Icon name="envelope" style={registerStyle.iconStyle} />}
            onChangeText={value => setEmail(value)}
          />
          <Input
            style={registerStyle.inputStyle}
            secureTextEntry={true}
            placeholder="Password"
            leftIcon={<Icon name="lock" style={registerStyle.iconStyle} />}
            onChangeText={value => setPassword(value)}
          />
        </View>

        <TouchableOpacity
          style={registerStyle.submitBtn}
          onPress={() => {
            console.log('Pressed', email, password);
            FirebaseUtilities.signIn(email, password);
            console.log('Done');
          }}>
          <Text style={registerStyle.textBtn}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Login;
