import firestore from '@react-native-firebase/firestore';

export default class userOperation {
  static usersCollection = firestore().collection('Users');
  public static createNewUser(name, email, password, phoneNumber, gender) {
    this.usersCollection
      .add({userName: name, email, password, phoneNumber, gender})
      .then(res => {
        console.log(res);
      })
      .catch(e => {
        console.log(e);
      });
  }
}
