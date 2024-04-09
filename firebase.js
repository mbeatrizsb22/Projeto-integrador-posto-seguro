import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyAnF9iQcvhhvvvl8tuG9zmmUwzCMYUQaks",
    authDomain: "posto-seguro.firebaseapp.com",
    projectId: "posto-seguro",
    storageBucket: "posto-seguro.appspot.com",
    messagingSenderId: "815696307715",
    appId: "1:815696307715:web:b3db9344cf117e7b8e9036"
  };

  function cadastro(){
    var auth = null;
    firebase.auth().createUserWithEmailAndPassword(document.getElementById("email").value, document.getElementById("senha").value)
    .then(function(user) {
      alert("Cadastro concluído com sucesso");
      auth = user;
    }) .catch(function(error){
        alert("Falha ao cadastrar");
    });
  } 

  function login(){
    var auth = null;
    firebase.auth().SignInWithEmailAndPassword(document.getElementById("email").value, document.getElementById("senha").value)
    .then(function(user) {
      alert("Login concluído com sucesso");
      auth = user;
    }) .catch(function(error){
        alert("Falha ao logar");
    });
  } 

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  auth.languageCode = 'pt'
  const provider = new GoogleAuthProvider();
  const googleLogin = document.getElementById("google-login-btn");
  googleLogin.addEventListener("click", function(){
    signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    console.log(user);
    window.location.href = "./pagina inicial.html"
  
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  })
