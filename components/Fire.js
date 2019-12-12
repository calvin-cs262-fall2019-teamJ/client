// import database
import { firebase } from '@firebase/app';
import '@firebase/firestore';
import '@firebase/auth';

class Fire {
  constructor() {
    if (!firebase.apps.length) {
      this.init();
    }
    this.dbh = firebase.firestore();
  }

  // initializing the database
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

  // logging in with firebase
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
  
  // signing up with firebase
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
  
  // getting user ID
  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }

  // pulling mentor list from the firebase
  pullMentorList = () => {
    let datalist = []; // where to store the data
    return this.dbh
      .collection('user')
      .where('mentor', '==', true)
      .get()
      .then(function(result) {
        result.forEach(function(doc) {
          datalist.push(doc.data()); // add the data to the array
        });
      })
      .then(() => {
        return datalist;
      })
      .catch(function(error) {
        console.log('Error getting documents: ', error);
        return error;
      });
  };

  // takes in unique ID of the user
  PullUserInfo = id => {
    let datalist = []; // where to store the data
    return this.dbh
      .collection('user')
      .doc(id)
      .get()
      .then(function(querySnapshot) {
        // doc.data() is never undefined for query doc snapshots
        datalist.push(querySnapshot.data()); // add the data to the array
      })
      .then(function(data) {
        return datalist[0]; //return the top element
      })
      .catch(function(error) {
        console.log('Error getting documents: ', error);
        return error;
      });
  };

  // takes in unique id of the user
  searchUser = query => {
    let datalist = []; // where to store the data
    let datalist_filtered = [];
    return this.dbh
      .collection('user')
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          datalist.push(doc.data()); // add the data to the array
        });
      })
      .then(function(data) {
        datalist_filtered = datalist.filter(item => {
          return (
            item.profile.nameLast.toLowerCase().includes(query.toLowerCase()) ||
            item.profile.nameFirst.toLowerCase().includes(query.toLowerCase())
          );
        });
        console.log(datalist_filtered);
        console.log('grrrr!');
        return datalist_filtered;
      })
      .catch(function(error) {
        console.log('Error getting documents: ', error);
        return error;
      });
  };

  //Async function that pulls posts; returns nested object iff query is succesful
  PullPosts() {
    let postList = []; // where to store the data
    let userRef = [];
    return this.dbh
      .collection('posts')
      .orderBy('timeOfPost')
      .get()
      .then(function(querySnapshot) {
        //necessary if there are multiple results
        querySnapshot.forEach(async doc => {
          let temp = doc.data();
          postList.push(temp); // add the data to the array
        });
      })
      .then(function(data) {
        //console.log("tester: ", postList[0].timeOfPost, "now", Date.now())

        return postList; //return the top element
      })
      .catch(function(error) {
        console.log('Error getting documents: ', error);
        return error;
      });
  }
  //Async function that push post user creates; returns promise indicating upload status
  CreatePost = (userID, userName, textInput, scope, tags, anonymous) => {
    let getScope = scopeArg => {
      let temp = {
        institution: false,
        department: false,
        friends: true,
      };

      if (scopeArg == 'To your institution') {
        temp = {
          institution: true,
          department: false,
          friends: false,
        };
      } else if (scopeArg == 'To your department') {
        temp = {
          institution: false,
          department: true,
          friends: false,
        };
      }

      return temp;
    };

    let uploadBucket = {
      anonymous: anonymous,
      departments: ['CS'],
      displayName: userName,
      editted: false,
      likeCount: 0,
      likedBy: {},
      owner: userID,
      scope: getScope(scope),
      tags: tags,
      text: textInput,
      timeOfPost: Date.now(),
    };

    console.log('upload call');
    console.log('content: ', uploadBucket);

    return this.dbh
      .collection('posts')
      .doc()
      .set(uploadBucket);
  };
}

Fire.shared = new Fire();
export default Fire;
