
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyB8416NVhCfNgO4Ll8XyWm-dBjheodHoN4",
    authDomain: "login-7693d.firebaseapp.com",
    projectId: "login-7693d",
    storageBucket: "login-7693d.appspot.com",
    messagingSenderId: "126782516281",
    appId: "1:126782516281:web:fc084953de4b40f14bb1e8",
    measurementId: "G-F2MZKP32T3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();

  //signup function
  async function signUp(){
    try {
      var email = document.getElementById("email");
      var password  = document.getElementById("password");
      const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
  
  
  
      console.log(promise)
      
      window.location.href="chat.html";
      } catch(error) {
        alert(error)
      }
  }

  //signIN function
  async function signIn() {
    try {
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const result = await auth.signInWithEmailAndPassword(email.value,password.value);



    console.log(result)
    
    window.location.href="chat.html";
    } catch(error) {
      alert(error)
    }
  }


  //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Active user "+email );

    }else{
      alert("No Active user Found")
    }
  })