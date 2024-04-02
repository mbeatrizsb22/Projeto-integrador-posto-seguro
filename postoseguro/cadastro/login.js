const firebaseConfig = {
apiKey: "AIzaSyAnF9iQcvhhvvvl8tuG9zmmUwzCMYUQaks",
authDomain: "posto-seguro.firebaseapp.com",
projectId: "posto-seguro",
storageBucket: "posto-seguro.appspot.com",
messagingSenderId: "815696307715",
appId: "1:815696307715:web:b3db9344cf117e7b8e9036"
};

const db = firebase.firestore();
const auth = firebaseApp.Auth();

const SignUp = () => {
const email = document.getElementByiD("email").value;
const password = document.getElementById("senha").value;
console.log(email, password)

firebase.Auth().createUserWithEmailAndPassword(email, password)
.then((result) => {
    alert("Você está inscrito");
    console.log(result);
   
})
.catch((error) => {
    console.log(error.code);
    console.log(error.message);
    
});
}

const SignIn = () => {
    const email = document.getElementByiD("email").value;
    const password = document.getElementById("senha").value;
    console.log(email, password)

    firebase.Auth().createUserWithEmailAndPassword(email, password)
    .then((result) => {
    alert("Você está inscrito");
        console.log(result);
        window.location.href = "pagina inicial.html";
})
    .catch((error) => {
        console.log(error.code);
        console.log(error.message);
        alert("usuário não encontrado ou senha errada")
});
}