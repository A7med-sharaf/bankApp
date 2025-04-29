
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
    import {  getAuth,createUserWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyCcW2KlHzEl8lyzsmc97shZYQY_yg6LvIM",
      authDomain: "system-bank-39989.firebaseapp.com",
      databaseURL: "https://system-bank-39989-default-rtdb.firebaseio.com",
      projectId: "system-bank-39989",
      storageBucket: "system-bank-39989.firebasestorage.app",
      messagingSenderId: "403628476845",
      appId: "1:403628476845:web:886d4c2106ecf232ef7924"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    // console.log(app)
    const auth = getAuth(app);

    // export let text=document.querySelector("#text").value
    let submit=document.querySelector("#submit")
     
submit.addEventListener("click", function(event){
    event.preventDefault()
    let email=document.querySelector("#emailV").value
    let password=document.querySelector("#passwordV").value
   
    
    createUserWithEmailAndPassword (auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Success create Account ...")
   
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("error email or password ")
    // ..
  });

})     
//  let text=document.querySelector("#text").value

