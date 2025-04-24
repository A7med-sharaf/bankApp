
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
    import {  getAuth,  signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyCSvZ5bcy7UQB7WCBK900sqgQckK0XIGEc",
      authDomain: "portfolio-a0e3c.firebaseapp.com",
      projectId: "portfolio-a0e3c",
      storageBucket: "portfolio-a0e3c.firebasestorage.app",
      messagingSenderId: "393845999476",
      appId: "1:393845999476:web:615ed0891f7d8ea08fce21"
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
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });

})     