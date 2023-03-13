var firebaseConfig = {
    apiKey: "AIzaSyDQKUsOCXzJxVtYwqsaWfBmibRJv0DDBBU",
    authDomain: "apex-realtors-bdf9e.firebaseapp.com",
    databaseURL: "https://apex-realtors-bdf9e-default-rtdb.firebaseio.com",
    projectId: "apex-realtors-bdf9e",
    storageBucket: "apex-realtors-bdf9e.appspot.com",
    messagingSenderId: "88377639602",
    appId: "1:88377639602:web:22d46177a242b3af7effab",
    measurementId: "G-KT1Z8D7D0Y"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

// let's code 
var datab  = firebase.database().ref('Admin');
function UserRegister(){
var email = document.getElementById('eemail').value;
var password = document.getElementById('lpassword').value;
firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
    
}).catch(function (error){
    var errorcode = error.code;
    var errormsg = error.message;
});
}
const auth = firebase.auth();
function SignIn(){
    var email = document.getElementById('eemail').value;
    var password = document.getElementById('lpassword').value;
    const promise = auth.signInWithEmailAndPassword(email,password);
    promise.catch( e => alert(e.msg));
    window.open("https://www.google.com","_self");
}
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    var userInfo = datab.push();
    userInfo.set({
        name: getId('fname'),
        email : getId('eemail'),
        password : getId('lpassword')
    });
    alert("Successfully Signed Up");
    console.log("sent");
    document.getElementById('form').reset();
});
function  getId(id){
    return document.getElementById(id).value;
}
