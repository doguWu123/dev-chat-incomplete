// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB4QqPwWatcrUwzshGu4zOKlk6W27v1ohQ",
    authDomain: "chat-8145c.firebaseapp.com",
    databaseURL: "https://chat-8145c-default-rtdb.firebaseio.com",
    projectId: "chat-8145c",
    storageBucket: "chat-8145c.appspot.com",
    messagingSenderId: "446033789979",
    appId: "1:446033789979:web:28e51c7b4bcb44f987e4be"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  document.getElementById('dashboard').style.display="none"

  document.getElementById('login').addEventListener('click', GoogleLogin)
  document.getElementById('logout').addEventListener('click', LogoutUser)

  let provider = new firebase.auth.GoogleAuthProvider()

  function GoogleLogin(){
    console.log('Login Btn Call')
    firebase.auth().signInWithPopup(provider).then(res=>{
      console.log(res.user)
      document.getElementById('LoginScreen').style.display="none"
      document.getElementById('dashboard').style.display="block"
      showUserDetails(res.user)
    }).catch(e=>{
      console.log(e)
    })
  }

  function showUserDetails(user){
    document.getElementById('userDetails').innerHTML = `
      <img src="${user.photoURL}" style="width:10%">
      <p>Name: ${user.displayName}</p>
      <p>Email: ${user.email}</p>
    `
  }

  function checkAuthState(){
    firebase.auth().onAuthStateChanged(user=>{
      if(user){
        document.getElementById('LoginScreen').style.display="none"
        document.getElementById('dashboard').style.display="block"
        showUserDetails(user)
      }else{

      }
    })
  }

  function LogoutUser(){
    console.log('Logout Btn Call')
    firebase.auth().signOut().then(()=>{
      document.getElementById('LoginScreen').style.display="block"
      document.getElementById('dashboard').style.display="none"
    }).catch(e=>{
      console.log(e)
    })
  }
  checkAuthState()