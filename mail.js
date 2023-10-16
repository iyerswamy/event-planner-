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

  var eventname = getElementVal("eventname");
  var eventplan = getElementVal("eventplan");
  var phonenumber = getElementVal("phonenumber");
  var bridename = getElementVal("bridename");
  var groomname = getElementVal("groomname");
  var brideaddress = getElementVal("brideaddress");
  var groomaddress = getElementVal("groomaddress");
  var emailid = getElementVal("emailid");
  var city = getElementVal("city");
  var state = getElementVal("state");
  var guests = getElementVal("guests");
  var eventdate = getElementVal("eventdate");
  var eventtime = getElementVal("eventtime");
  var msgContent = getElementVal("msgContent");

  saveMessages(eventname, eventplan, phonenumber, bridename, groomname, brideaddress, groomaddress, emailid, city, state, guests, eventdate, eventtime, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (eventname, eventplan, phonenumber, bridename, groomname, brideaddress, groomaddress, emailid, city, state, guests, eventdate, eventtime, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    eventname: eventname,
    eventplan: eventplan,
    phonenumber:phonenumber,
    bridename:bridename,
    groomname:groomname,
    brideaddress:brideaddress,
    groomaddress:groomaddress,
    emailid: emailid,
    city:city,
    state:state,
    eventdate:eventdate,
    eventtime:eventtime,
    guests:guests,
    
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};