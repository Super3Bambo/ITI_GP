import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {RadioButton} from 'react-native-paper';
import registerStyle from '../Styles/register';
import FirebaseUtilities from '../Utilities/firebaseAuth';
import Validator from '../Utilities/inputValidation';
import userOperation from './../Utilities/firebaseDatabase';

const Register = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('male');
  const [errorMsg, setErrorMsg] = useState(null);
  const [errorFlag, setErrorFlag] = useState(null);
  let signUp = (
    name,
    emailValue,
    passwordValue,
    passwordConValue,
    phone,
    genderflag,
  ) => {
    console.log('pressed', emailValue, passwordValue);
    FirebaseUtilities.signUp(emailValue, passwordValue)
      .then(() => {
        console.log('user Created');
        userOperation.createNewUser(
          name,
          emailValue,
          passwordValue,
          phone,
          gender,
        );
      })
      .catch(e => {
        console.log(e);
      });
  };
  let validate = (value, type) => {
    if (type == 'userName') {
      if (!Validator.requiredValidator(value)) {
        console.log('name is  vaild');
        setUserName(value);
        setErrorMsg(null);
        setErrorFlag(false);
      } else {
        setErrorFlag(true);
        setErrorMsg('Please Enter Valid name');
      }
    } else if (type == 'email') {
      if (
        !Validator.requiredValidator(value) &&
        Validator.emailValidtaor(value)
      ) {
        console.log('email is vaild');
        setEmail(value);
        setErrorMsg(null);
        setErrorFlag(false);
      } else {
        console.log('email is not vaild');
        setErrorFlag(true);
        setErrorMsg('Please Enter Valid mail');
      }
    } else if (type == 'password') {
      if (
        !Validator.requiredValidator(value) &&
        Validator.passwordValidator(value)
      ) {
        console.log('password is vaild');
        setErrorFlag(false);
      } else {
        setErrorFlag(true);
        setErrorMsg('Please Enter Valid password');
      }
    } else if (type == 'confirmPassword') {
      if (
        !Validator.requiredValidator(value) &&
        Validator.confirmPasswordVlaidator(value)
      ) {
        console.log('con is  vaild');
        setErrorFlag(false);
      } else {
        setErrorFlag(true);
        setErrorMsg('Please Enter identical password');
      }
    } else if (type == 'phoneNumber') {
      if (
        !Validator.requiredValidator(value) &&
        Validator.phoneNumberValidtaor(value)
      ) {
        console.log('phone number is vaild');
        setErrorFlag(false);
      } else {
        setErrorMsg('Please Enter Valid phone number');
        setErrorFlag(true);
      }
    }
  };

  return (
    <ScrollView>
      <View style={registerStyle.container}>
        <View style={{marginTop: 20}}>
          <Input
            placeholder="User Name"
            keyboardType="ascii-capable"
            style={registerStyle.inputStyle}
            leftIcon={<Icon name="user" style={registerStyle.iconStyle} />}
            onChangeText={value => setUserName(value)}
            onEndEditing={value => validate(value, 'userName')}
            onPressOut={value => validate(value, 'userName')}
            errorMessage={errorFlag ? errorMsg : null}
          />
          <Input
            style={registerStyle.inputStyle}
            keyboardType="email-address"
            placeholder="Email"
            leftIcon={<Icon name="envelope" style={registerStyle.iconStyle} />}
            onChangeText={value => setEmail(value)}
            onEndEditing={value => validate(value, 'email')}
            onPressOut={value => validate(value, 'email')}
            errorMessage={errorFlag ? errorMsg : null}
          />
          <Input
            style={registerStyle.inputStyle}
            secureTextEntry={true}
            placeholder="Password"
            leftIcon={<Icon name="lock" style={registerStyle.iconStyle} />}
            onChangeText={value => setPassword(value)}
            onEndEditing={value => validate(value, 'password')}
            onPressOut={value => validate(value, 'password')}
            errorMessage={errorFlag ? errorMsg : null}
          />
          <Input
            style={registerStyle.inputStyle}
            secureTextEntry={true}
            placeholder="Confirm Password"
            leftIcon={<Icon name="lock" style={registerStyle.iconStyle} />}
            onChangeText={value => setConfirmPassword(value)}
            onEndEditing={value => validate(value, 'confirmPassword')}
            onPressOut={value => validate(value, 'confirmPassword')}
            errorMessage={errorFlag ? errorMsg : null}
          />
          <Input
            style={registerStyle.inputStyle}
            keyboardType="phone-pad"
            placeholder="Phone Number"
            leftIcon={<Icon name="phone" style={registerStyle.iconStyle} />}
            onChangeText={value => setPhoneNumber(value)}
            onEndEditing={value => validate(value, 'phoneNumber')}
            onPressOut={value => validate(value, 'phoneNumber')}
            errorMessage={errorFlag ? errorMsg : null}
          />
        </View>

        <View style={registerStyle.genderContainer}>
          <RadioButton
            color="#2596be"
            value="male"
            status={gender === 'male' ? 'checked' : 'unchecked'}
            onPress={() => setGender('male')}
          />
          <Text>Male</Text>
          <Icon name="mars" style={registerStyle.iconStyle} />
          <RadioButton
            value="female"
            color="#2596be"
            status={gender === 'female' ? 'checked' : 'unchecked'}
            onPress={() => setGender('female')}
          />

          <Text>Female</Text>
          <Icon name="venus" style={registerStyle.iconStyle} />
        </View>

        <TouchableOpacity
          style={registerStyle.submitBtn}
          onPress={() =>
            signUp(
              userName,
              email,
              password,
              confirmPassword,
              phoneNumber,
              gender,
            )
          }>
          <Text style={registerStyle.textBtn}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Register;
