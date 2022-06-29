const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const bio = document.getElementById('bio');
const submit = document.getElementById('submit');

const fnameError = document.getElementById('fnameError');
const lnameError = document.getElementById('lnameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const bioError = document.getElementById('bioError');

//EMAIL VALIDATION FUNCTION

//function ValidateEmail()
//{
//
//    
// if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
//  {
//    console.log('de ba')
//    emailError.textContent = '';
//  } else{
//    emailError.textContent = 'Email must be a valid address, e.g. example@example.com'
//  } 
//}   

//FIRST NAME VALIDATION FUNCTION

const ValidateFirstName = () =>{
    const regex = /^[a-z0-9]{3,16}$/i;
    if(!fname.value.match(regex)){
        fnameError.textContent = 'Name must be alphanumeric and contain 3-16 characters';
    } else {
        fnameError.textContent = '';
    } 
    
}

//SUBMIT EVENT LISTENER

submit.addEventListener('click', (e)=>{
    e.preventDefault();
    ValidateFirstName();
});
