import React ,  {Component} from 'react';
import {StyleSheet,Text,View,Button} from 'react-native';
import auth from '@react-native-firebase/auth';
import { useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';
import FawrySdk from 'react-native-fawry-sdk';

const Home = (props)=> {
useEffect(()=>{
  // firestore().collection('Users').onSnapshot(QuerySnapshot=>{
  //    QuerySnapshot.docs.forEach((doc)=>{console.log(doc._data.names);});
  // });

  FawrySdk.initSDK(FawrySdk.STYLES.STYLE1);
 return ()=>{FawrySdk.resetFawrySDK();}
},[])

initPaymentPlugin = () => {
  const data = {
    merchantID: "1tSa6uxz2nTwlaAmt38enA==",
    serverURL:"https://fawry.com" ,
    items: [
      {
        price: '100',
        description: 'Hello',
        quantity: '1',
        sku: '1234',
      },
    ],
    language: FawrySdk.LANGUAGES.EN,
  };
  FawrySdk.initPaymentPlugin(data);
};

initCardTokenizer = () => {
  const data = {
    merchantID: "1tSa6uxz2nTwlaAmt38enA==",
    serverURL:"https://fawry.com" ,
    customerEmail: 'mahmoud.ali@1trolley.com',
    customerMobile: '01115299051',
    language: FawrySdk.LANGUAGES.EN,
  };
  FawrySdk.initCardTokenizer(data);
};

startPaymentActivity = () => {
  FawrySdk.startPaymentActivity();
};

   /* return (
     <View><Button title="Book" onPress={()=>{
       props.navigation.navigate('Booking')
     }}></Button>
     
     

<Button title="logout" onPress={ async () => {




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
     }}></Button>
     </View>
    );*/


    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>☆FawrySdk example☆</Text>

        <Button
          title={'Init Payment Plugin'}
          onPress={this.initPaymentPlugin}
        />

        <Button
          title={'Init Card Tokenizer'}
          onPress={this.initCardTokenizer}
        />

        <Button
          title={'start payment activity'}
          onPress={this.startPaymentActivity}
        />
      </View>
    );


  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
  });
  export default Home;
  