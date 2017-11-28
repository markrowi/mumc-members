import * as firebase from 'firebase'
let database;
let family

export const init = ()=>{
      // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDlCrMx1Z0vo2e8Cq4EhwJt7KmJGN7CZQk",
    authDomain: "members-34f65.firebaseapp.com",
    databaseURL: "https://members-34f65.firebaseio.com",
    projectId: "members-34f65",
    storageBucket: "members-34f65.appspot.com",
    messagingSenderId: "297737399796"
  };
  firebase.initializeApp(config);
  database = firebase.database();
  database.ref('/').once('value',(res)=>{
    console.log(res.val());
  })
  
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