//Validation Code For Inputs

var email = document.forms['forms']['email'];
var password = document.forms['forms']['password'];

var email_email error = document.getElementById('email_error');
var pass_email error = document.getElementById('pass_error');

email.addEventListener('textInput , email _verify');
password.addEventListener('textInput , pass _verify');
function validated(){
    if(email.value.lenght < 9){
        email.style border = "1px solid red";
        email_error.style.display = "block";
        email.forms();
        return false;
    }
   
function validated(){
    if(password.value.lenght < 6){
        password.style border = "1px solid red";
        password_error.style.display = "block";
        password.focus();
        return false; 
}
    function email-Verify(){
        if(email.value.lenght >= 8)
             if(email.value.lenght < 9){
        email.style border = "1px solid silver";
        email_error.style.display = "none";
        return true;
    }
      function email-Verify(){
        if(password.value.lenght >=8 )
        email.style border = "1px solid silver";
        email_error.style.display = "none";
        return true;   
    }