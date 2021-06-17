import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { RadioButton } from "react-native-paper";
import registerStyle from './../Styles/register';

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("male");

  return (
    <ScrollView>
      <View style={registerStyle.container}>
        <Input
          placeholder="User Name"
          keyboardType="ascii-capable"
          style={(registerStyle.inputStyle, { marginTop: 25 })}
          leftIcon={<Icon name="user" style={registerStyle.iconStyle} />}
          onChangeText={(value) => setUserName(value)}
        />
        <Input
          style={registerStyle.inputStyle}
          keyboardType="email-address"
          placeholder="Email"
          leftIcon={<Icon name="envelope" style={registerStyle.iconStyle} />}
          onChangeText={(value) => setEmail(value)}
        />
        <Input
          style={registerStyle.inputStyle}
          secureTextEntry={true}
          placeholder="Password"
          leftIcon={<Icon name="lock" style={registerStyle.iconStyle} />}
          onChangeText={(value) => setPassword(value)}
        />
        <Input
          style={registerStyle.inputStyle}
          secureTextEntry={true}
          placeholder="Confirm Password"
          leftIcon={<Icon name="lock" style={registerStyle.iconStyle} />}
          onChangeText={(value) => setConfirmPassword(value)}
        />
        <Input
          style={registerStyle.inputStyle}
          keyboardType="phone-pad"
          placeholder="Phone Number"
          leftIcon={<Icon name="phone" style={registerStyle.iconStyle} />}
          onChangeText={(value) => setPhoneNumber(value)}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 25,
          }}
        >
          <Icon name="mars" style={registerStyle.iconStyle}></Icon>
          <Text>Male</Text>
          <RadioButton
            color="#2596be"
            value="male"
            status={gender === "male" ? "checked" : "unchecked"}
            onPress={() => setGender("male")}
          />
          <Icon name="venus" style={registerStyle.iconStyle}></Icon>
          <Text>Female</Text>
          <RadioButton
            value="female"
            color="#2596be"
            status={gender === "female" ? "checked" : "unchecked"}
            onPress={() => setGender("female")}
          />
        </View>

        <TouchableOpacity
          style={registerStyle.submitBtn}
          onPress={() => {
            console.log(
              "Pressed",
              userName,
              email,
              phoneNumber,
              password,
              confirmPassword,
              gender
            );
          }}
        >
          <Text style={registerStyle.textBtn}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Register;


