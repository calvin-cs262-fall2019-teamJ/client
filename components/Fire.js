import { firebase } from '@firebase/app';
import '@firebase/firestore';
import '@firebase/auth';

class Fire {
  constructor() {
    if (!firebase.apps.length) {
      this.init();
    }
    this.dbh = firebase.firestore();
    // this.observeAuth();
  }

  init = () =>
    firebase.initializeApp({
      apiKey: 'AIzaSyDOJIsQAZZrzEcOtFJ3QTor6_US2lMcCBw',
      authDomain: 'cs262j.firebaseapp.com',
      databaseURL: 'https://cs262j.firebaseio.com',
      projectId: 'cs262j',
      storageBucket: 'cs262j.appspot.com',
      messagingSenderId: '96122407891',
      appId: '1:96122407891:web:85c939306a90d8eae9bd26',
      measurementId: 'G-PY37PP5T20',
    });

  observeAuth = () =>
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);

  onAuthStateChanged = user => {
    //firebase.auth().createUserWithEmailAndPassword("akonne16@gmail.com", "thisiscoolNow")
    alert('loging in');
    // .catch( (error)=> {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   alert(errorCode)
    //   alert(errorMessage)
    // }
  };

  Login = (email, password) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function(firebaseUser) {
        return 'success';
      })
      .catch(function(error) {
        return error.message;
      });
  };

  SignUp = (email, password) => {
    alert('signup');
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function(firebaseUser) {
        return 'success';
      })
      .catch(function(error) {
        return error.message;
      });
  };

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }

  //takes a name and returns the profile, will need to take more parametrs in the future
  PullProfileInfo = name => {
     let datalist = [] // where to store the data
    return this.dbh
      .collection('profile')
      .where('name', '==', name)
      .get()
      .then(function(querySnapshot) {
        //necessary if there are multiple results
        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          datalist.push(doc.data()); // add the data to the array
        });
      })
      .then(function(data) {
        return datalist[0] //return the top element
      })
      .catch(function(error) {
        console.log('Error getting documents: ', error);
        return error;
      });
  };
}

Fire.shared = new Fire();
export default Fire;
