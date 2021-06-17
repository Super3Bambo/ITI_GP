import React from 'react';
import {Text,View,Button} from 'react-native';

const Register = (props)=> {
    return (
     <View><Text>Register</Text>
     <Button
     title={"test"} 
     onPress={()=>{
       console.log(props)
       props.navigation.navigate("TabNav")
     }}></Button>
     </View>
    );
  };
  
  export default Register;
  