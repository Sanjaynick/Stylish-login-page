var  subContainer = document.getElementById("sub-container");
var slider = document.getElementById("slider")
var sliderBtn = document.getElementById("sign-btn");
var signInContainer = document.getElementById("signin-content");
var logInContainer = document.getElementById("login-content");
var Greating = document.querySelector('.greating');
var aboutAccount = document.querySelector('.account');
var inputClear = document.querySelectorAll('input');
var email = document.getElementById('email');
var errorMessage = document.getElementById('error-message');
var userName = document.getElementById('user-name');
var userEmail = document.getElementById('user-email');
var userPassword = document.getElementById('user-password');
var newPassword = document.getElementById('new-password');

function showError(){
    errorMessage.style.display = 'block';
}

 sliderBtn.textContent = "Sign In";

 function allClear(){
    inputClear.forEach(clear => {
        clear.value = '';
    });
 }

function changeSlider(){
    if(sliderBtn.textContent == "Sign In"){
        slider.classList.add('slider-move');
        subContainer.classList.add('sub-container-move');
        slider.classList.remove('slider-move-right');
        subContainer.classList.remove('sub-container-move-left');
        sliderBtn.textContent = "Log In";
        signInContainer.style.display = 'grid';
        logInContainer.style.display = 'none';
        errorMessage.style.display = 'none';
         Greating.textContent = "Welcome Back";
        aboutAccount.textContent = "Already have an Account";
        allClear();
    }
    else if(sliderBtn.textContent == "Log In"){
        slider.classList.add('slider-move-right');
        subContainer.classList.add('sub-container-move-left');
        slider.classList.remove('slider-move');
        subContainer.classList.remove('sub-container-move');
        sliderBtn.textContent = "Sign In";
        logInContainer.style.display = 'grid';
        signInContainer.style.display = 'none';
        errorMessage.style.display = 'none';
       Greating.textContent = "Hi There !";
        aboutAccount.textContent = "Don't have an Account";
    }

    allClear();
}

var emailCheck = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;

function formValidation(){
if(!emailCheck.test(email.value.trim())){
    errorMessage.textContent = "Please Enter Valid Email !";
    showError()
    allClear();
    return false;
}
else{
    errorMessage.textContent = '';
    alert("You Logged In Successfully");
    allClear()
} 
}

var emailCheck = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;

function formValidationSecond(){

    if(userName.value.trim().length < 3){
    errorMessage.textContent = "Please Enter Name More than 3 letters";
    showError()
    return false;
}

    if(!emailCheck.test(userEmail.value.trim())){
    errorMessage.textContent = "Please Enter Valid Email !";
    showError()
    return false;
}

if(userPassword.value.trim().length < 6){
    errorMessage.textContent = "Password Must Contain 6 Letters";
    showError()
    return false;
}

if(userPassword.value.trim() != newPassword.value.trim()){
    errorMessage.textContent = "Password Not Match";
    showError()
    return false;
}
    errorMessage.textContent = '';
    alert("You Signed In Successfully");
    allClear();
    return true;
    

}