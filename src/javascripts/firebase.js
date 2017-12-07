import * as firebase from 'firebase';
// import * as firebaseui from 'firebaseui';

let database;

var config = {
    apiKey: "AIzaSyDlCrMx1Z0vo2e8Cq4EhwJt7KmJGN7CZQk",
    authDomain: "members-34f65.firebaseapp.com",
    databaseURL: "https://members-34f65.firebaseio.com",
    projectId: "members-34f65",
    storageBucket: "members-34f65.appspot.com",
    messagingSenderId: "297737399796"
};

firebase.initializeApp(config);

export const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: 'http://localhost:3000/',
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ],
    tosUrl: '/'
};
//   var ui = new firebaseui.auth.AuthUI(firebase.auth());
  
//   ui.start('#firebaseui-auth-container', uiConfig);

//   firebase.auth().onAuthStateChanged(function(user) {
//       if(user){
//         database = firebase.database();
//         database.ref('/').once('value',(res)=>{
//           console.log(res.numChildren());
//         })

//         console.log('Logged In', user)
//       }else{
//           console.log('LoggedOut')
//       }
//   })

export const firebaseAuth = firebase.auth;
export const ref = firebase.database().ref();

export const signOut = () =>{
    return firebase.auth().signOut();
}

export const getCurrentUser = () => {
    return firebase.auth().currentUser;
}

export const getSectionsDB = () => {
    return database.ref('/').once('value')
}

export const setName = (name) => {
    return database.ref('/name').set(name)
    //set "string" for value of name
    //set {} for object value of name
}
export const getFamilies = () =>{
    return database.ref('/families').once('value')
}


export const getFamily = (famID) =>{
    return database.ref(`/families/${famID}`).once('value')
}


export const getMembers = () =>{
    return database.ref('/members').once('value')
}

export const getMember = (memID) =>{
    return database.ref(`/members/${memID}`).once('value')
}