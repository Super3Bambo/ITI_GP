import React ,  {Component} from 'react';
import {StyleSheet,Text,View,Button} from 'react-native';
import auth from '@react-native-firebase/auth';
import { useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';






const Home = (props)=> {

    return (
     <View><Button title="Book" onPress={()=>{
       props.navigation.navigate('Booking')
     }}></Button></View>
  );
     

     

{/* <Button title="logout" onPress={ async () => { */}
//  const usersCollection = await firestore().collection('Users');
//  usersCollection.docs.forEach((doc)=>{console.log(doc._data.names);})
// const PaymentData = {
//   "merchantCode": "1tSa6uxz2nTwlaAmt38enA==",
//   "customerMobile": "01000000000",
//   "customerEmail": "test@email.com",
//   "customerProfileId": "777777",
//   "merchantRefNum": "2312465464",
//   "amount": "350.75",
//   "paymentExpiry" : "1631138400000",
//   "currencyCode": "EGP",
//   "description": "the charge request description",
//   "language" : "en-gb",
//   "chargeItems": [
//                     {
//                       "itemId": "897fa8e81be26df25db592e81c31c",
//                       "description": "Item Descriptoin",
//                       "price": "350.75",
//                       "quantity": "1"
//                     }
//                   ],
//   "signature": "2ca4c078ab0d4c50ba90e31b3b0339d4d4ae5b32f97092dd9e9c07888c7eef36",
//   "paymentMethod": "PAYATFAWRY",
//   "description": "Example Description"
// }
// const response = await fetch('https://atfawry.fawrystaging.com/ECommerceWeb/Fawry/payments/charge', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(PaymentData),
//   });
//  console.log(response)
    //  }}></Button>
    //  </View>
    // );*/


    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>☆FawrySdk example☆</Text>

       

       

       
      </View>
    );


  };
  export default Home;
  