
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
    import {  getAuth,  signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
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
    
    //    let logValue=document.querySelector(".logValue")
   let submit=document.querySelector(".submit")
submit.addEventListener("click", function(event){
    event.preventDefault()
    let email=document.querySelector("#email").value
    let password=document.querySelector("#password").value
      
    //    console.log(email + "  "+ password)

       
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    
        alert("Login ...")
       window.location.href="home.html"
        // let Utext=document.querySelector(".text")
        // let theme=document.querySelector(".theme-text")
        // theme.innerHTML=Utext
    
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("error email or password")
    // ..
  });

})     