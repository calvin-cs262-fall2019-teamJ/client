import firebase from 'firebase'; // 4.8.1

class Fire {
  constructor() {
    if (!firebase.apps.length) {
      this.init();
    }
    // this.observeAuth();
  }

  init = () =>
    firebase.initializeApp({
    apiKey: "AIzaSyDOJIsQAZZrzEcOtFJ3QTor6_US2lMcCBw",
    authDomain: "cs262j.firebaseapp.com",
    databaseURL: "https://cs262j.firebaseio.com",
    projectId: "cs262j",
    storageBucket: "cs262j.appspot.com",
    messagingSenderId: "96122407891",
    appId: "1:96122407891:web:85c939306a90d8eae9bd26",
    measurementId: "G-PY37PP5T20"
    });

  observeAuth = () =>
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);

  onAuthStateChanged = user => {
    //firebase.auth().createUserWithEmailAndPassword("akonne16@gmail.com", "thisiscoolNow")
    alert("loging in")
    // .catch( (error)=> {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   alert(errorCode)
    //   alert(errorMessage)
    // }
  };

  Login = (email, password) => {
    return (
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(function(firebaseUser) {
          return "success"
      })
      .catch(function(error) {
          return error.message
      })
    )
  };

 SignUp = (email, password) => {
   alert("signup")
   return (
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(function(firebaseUser) {
          return "success"
      })
      .catch(function(error) {
          return error.message
      })
    )
  };

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }

  get ref() {
    return firebase.database().ref('messages');
  }

  parse = snapshot => {
    const { timestamp: numberStamp, text, user } = snapshot.val();
    const { key: _id } = snapshot;
    const timestamp = new Date(numberStamp);
    const message = {
      _id,
      timestamp,
      text,
      user,
    };
    return message;
  };

  on = callback =>
    this.ref
      .limitToLast(20)
      .on('child_added', snapshot => callback(this.parse(snapshot)));

  get timestamp() {
    return firebase.database.ServerValue.TIMESTAMP;
  }
  // send the message to the Backend
  send = messages => {
    for (let i = 0; i < messages.length; i++) {
      const { text, user } = messages[i];
      const message = {
        text,
        user,
        timestamp: this.timestamp,
      };
      this.append(message);
    }
  };

  append = message => this.ref.push(message);

  // close the connection to the Backend
  off() {
    this.ref.off();
  }
}

Fire.shared = new Fire();
export default Fire;
