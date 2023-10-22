let enter = () => {
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let regUsername = /[a-zA-Z]{3,}$/;
  let regEmail = /[a-zA-Z0-9]{3,}@gmail\.([a-z]{3})$/;
  let alertPassword = document.getElementById("alertPassword");
  let alertUsername = document.getElementById("alertUsername");
  let alertEmail = document.getElementById("alertEmail");
  // regular expression
  // password validation
  if (password.length != 0 && email.match(regEmail) && username.match(regUsername)) {
    alert('your acount is created succefully')
    alertEmail.innerHTML=''
    alertUsername.innerHTML=''
    alertPassword.innerHTML=''
  }
  else{
    if(username.length==0&&email.length==0&&password.length==0){
        alert('please type all data')
       
    }
  }
};
let validName = () => {
    let username = document.getElementById("username").value;
    let regUsername = /[a-zA-Z]{3,}$/;
    let alertUsername = document.getElementById("alertUsername");
    if(username.length!=0 && username.match(regUsername)){
        alertUsername.innerHTML = '';
    }
    else{
        alertUsername.innerHTML='<p style="color:red">Please type a valid username </p>'
    }
};
let validEmail = () => {
    let email = document.getElementById("email").value;
    let regEmail = /[a-zA-Z0-9]{3,}@gmail\.([a-z]{3})$/;
    let alertEmail = document.getElementById("alertEmail");
    if(email.length !=0 && email.match(regEmail)){
        alertEmail.innerHTML = '';
    }
    else{
        alertEmail.innerHTML = `<p style="color:red">Please enter a valid email</p>`;
    }
};
let validPassword = () => {
    let password = document.getElementById("password").value;
    let alertPassword = document.getElementById("alertPassword");
    if(password.length==0){
        alertPassword.innerHTML = '';
    }
};
