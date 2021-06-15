document.getElementById("SubBtn").addEventListener("click",buttonClicked);


function buttonClicked(){

var naam= document.getElementById('fname').value;
var jaati= document.getElementById('lname').value;
var phone= Number(document.getElementById('phnumber').value);
var mail= document.getElementById('email').value;
var text= document.getElementById('comment').value;


if (naam=="" || jaati=="" || mail=="" || text=="" || phnumber=="") {
    alert("Complete the specifications please !!!");
}
else if(phone>9999999999 || phone<999999999){
    alert("Please enter valid phone number");

}
else {


/*email ka code */


    Email.send({
    SecureToken : "4be49735-edb6-4b8d-aba7-02ae87969d9c",
    To : 'amlendushekhar828@gmail.com',
    From : mail,
    Subject : "Client Contacting",
    Body : text
}).then(
  
);



alert("Message Sent");
}
    }






    /* IDs
    first name id    - fname
    lname id - lname
    phone number   -  phnumber
    email id  -    email
    id of textarea   - comment
    */







    /*
        Email.send({
    SecureToken : "03e95d8c-b985-4b4c-9c93-92ee65560e06",
    To : 'amlendushekhar828@gmail.com',
    From : mail,
    Subject : "Client Contacting",
    Body : text
}).then(
  
);

*/





/*
Email.send({
    Host : "smtp.gmail.com",
    Username : "incognito_user",
    Password : "Incognito_User",
    To : 'amlendushekharcss_cse18@its.edu.in',
    From : mail,
    Subject : "Client Contact",
    Body : text
}).then(
  message => alert(message)
);
*/