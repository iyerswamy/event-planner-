const firebaseConfig = {
    apiKey: "AIzaSyDq_saukSnDi1XtLLEUqfbwRRUR6Iq3E0A",
    authDomain: "contactform-c5604.firebaseapp.com",
    databaseURL: "https://contactform-c5604-default-rtdb.firebaseio.com",
    projectId: "contactform-c5604",
    storageBucket: "contactform-c5604.appspot.com",
    messagingSenderId: "112584724978",
    appId: "1:112584724978:web:173d513a738d4823c59b6b"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var eventplan = getElementVal("eventplan");
    var nameofthesinger = getElementVal("nameofthesinger");
    var phonenumber = getElementVal("phonenumber");
    var alternativephonenumber = getElementVal("alternativephonenumber");
    var city = getElementVal("city");
    var state = getElementVal("state");
    var guests = getElementVal("guests");
    var eventdate = getElementVal("eventdate");
    var eventtime = getElementVal("eventtime");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(eventplan, nameofthesinger,  phonenumber, alternativephonenumber, city, state, guests, eventdate, eventtime,   emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (eventplan, nameofthesinger, phonenumber, alternativephonenumber, city, state, guests, eventdate, eventtime,  emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      eventplan:eventplan,
      nameofthesinger:nameofthesinger,
      phonenumber:phonenumber,
      alternativephonenumber:alternativephonenumber,
      city:city,
      state:state,
      guests:guests,
      eventdate:eventdate,
      eventtime:eventtime,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };