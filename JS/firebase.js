
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB1tqKUnsDwu_opopob0HIYC7vWyrJwGr4",
    authDomain: "portfolio-stym.firebaseapp.com",
    projectId: "portfolio-stym",
    storageBucket: "portfolio-stym.appspot.com",
    messagingSenderId: "748094438533",
    appId: "1:748094438533:web:fadad30929f415d4cd7dec",
    databaseURL:"https://portfolio-stym-default-rtdb.asia-southeast1.firebasedatabase.app/"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  import { getDatabase, ref, set, child, update, remove} from "https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js";
 
  


  const contactForm = document.querySelector(".cf");
  const name = document.querySelector(".cfname");
  const email = document.querySelector(".cfemail");
  const subject = document.querySelector(".cfsubject");
  const message = document.querySelector(".cfmessage");
  const submit = document.querySelector(".cfsubmit");
  const wrap = document.querySelector(".wrap");
  const close = document.querySelector(".wclose");


  console.log(name.value);

  function InsertData(){
    const db = getDatabase(app);
    //let ref = Database.database("https://portfolio-stym-default-rtdb.asia-southeast1.firebasedatabase.app/")
    set(ref(db,'users/'+name.value),{
      Name:name.value,
      Email:email.value,
      Subject:subject.value,
      Message:message.value
    })
    .then(()=>{
      contactForm.reset();
      wrap.classList.toggle("display-none");
      //alert("Data added successfully");
    })
    .catch((error)=>{
      alert("Unsuccesful, error"+error);
    });
  }

  submit.addEventListener("click",(e)=>{
      e.preventDefault();
      InsertData();
  });

  close.addEventListener("click",()=>{
    wrap.classList.toggle("display-none");
  });
