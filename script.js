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
var errorMsg = document.getElementById('error-msg-2');
var userName = document.getElementById('user-name');
var userEmail = document.getElementById('user-email');
var userPassword = document.getElementById('user-password');
var newPassword = document.getElementById('new-password');
var container = document.getElementById("container");
var messageContainer = document.getElementById("message-container");
var subMessageContainer = document.getElementById("sub-message-container");
var subVerificationContainer = document.getElementById("sub-verification-container");
var subRepasswordContainer = document.getElementById("sub-repassword-container");
var forgotProcess = document.getElementById("forgot-process");
var verificationCode = document.getElementById("verification-code");
var forgotEmail = document.getElementById("forgot-email");
var forgotCode = document.getElementById("forgot-code");
var forgotRePassword = document.getElementById("forgot-repassword");
var newPsw = document.getElementById("new-psw");
var reNewPsw =document.getElementById("re-new-psw"); 


var checkEmail = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;

function forgotPassword(){
    if(!checkEmail.test(forgotEmail.value.trim())){
        forgotProcess.textContent = "Please Enter Valid Email !"
        forgotProcess.style.display = 'block';
        // subMessageContainer.style.display = 'none';
        //  subVerificationContainer.style.display = 'block';
    }
    else{
        forgotProcess.style.display = 'none';
        subMessageContainer.style.display = 'none';
         subVerificationContainer.style.display = 'block';
    }
    allClear();
    return false;
}

function forgotVerification(){
    if(verificationCode.value.trim().length < 6){
        forgotCode.textContent = "Verification Code must be 6 Numbers";
        forgotCode.style.display = 'block';
    }
    else{
        forgotCode.style.display = 'none';
        subMessageContainer.style.display = 'none';
         subVerificationContainer.style.display = 'none';
          subRepasswordContainer.style.display = 'block';
    }
    allClear();
    return false;
}

function reEnterPassword(){
    if(newPsw.value.trim().length < 6){
        forgotRePassword.textContent = "Password must be 6 Numbers";
        forgotRePassword.style.display = 'block';
    }
   else if(newPsw.value != reNewPsw.value){
         forgotRePassword.textContent = "Password Not Match";
        forgotRePassword.style.display = 'block';
    }
    else{
        forgotRePassword.style.display = 'none';
        subMessageContainer.style.display = 'none';
         subVerificationContainer.style.display = 'none';
          subRepasswordContainer.style.display = 'none';
           messageContainer.style.display = 'none';
          alert("Your Password Changed Successfully")
    }
    allClear();
    return false;
}

function cancelShowForgot(){
     messageContainer.style.display = 'none';
    subMessageContainer.style.display = 'none';
    subVerificationContainer.style.display = 'none';
    subRepasswordContainer.style.display = 'none';
}


function showForgot(){
    messageContainer.style.display = 'block';
    subMessageContainer.style.display = 'block';
    subVerificationContainer.style.display = 'none';
    subRepasswordContainer.style.display = 'none';
}



// function showVerification(){
//      messageContainer.style.display = 'block';
//     subMessageContainer.style.display = 'none';
//     subVerificationContainer.style.display = 'block';
//     subRepasswordContainer.style.display = 'none';
// }

// function showRePassword(){
//      messageContainer.style.display = 'block';
//     subMessageContainer.style.display = 'none';
//     subVerificationContainer.style.display = 'none';
//     subRepasswordContainer.style.display = 'block';
// }

// function rePasswordFinish(){
//     messageContainer.style.display = 'none';
//     subMessageContainer.style.display = 'none';
//     subVerificationContainer.style.display = 'none';
//     subRepasswordContainer.style.display = 'none';
//     alert("Your Password Changed Successfully");
// }

function showError(){
    errorMessage.style.display = 'block';
   
}

// function showErrorMsg(){
//      errorMsg.style.display = 'block';
// }

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
    // if(email.value == ''){
    //     errorMsg.style.display = 'none';
    // }
 if(!emailCheck.test(email.value.trim())){
    errorMessage.textContent = "Please Enter Valid Email !";
    errorMsg.textContent = "Please Enter Valid Email !";
    showError();
    if(window.innerWidth < 500){
            errorMsg.style.display = 'block';
    }
    else{
         errorMsg.style.display = 'none';
    }

    allClear();
    return false;
}
else{
    errorMessage.textContent = '';
    errorMsg.textContent = '';
    errorMessage.style.display = 'none';
    alert("You Logged In Successfully");
    allClear()
} 
}


function formValidationSecond(){

    // if(userName.value == ''){
    //     errorMsg.style.display = 'none';
    //     errorMsg.textContent = '';
    // }

    if(userName.value.trim().length < 3){
    errorMessage.textContent = "Please Enter Name More than 3 letters";
    errorMsg.textContent = "Please Enter Name More than 3 letters"
    showError();
    if(window.innerWidth < 500){
            errorMsg.style.display = 'block';
    }
    else{
         errorMsg.style.display = 'none';
    }
    return false;
}

    if(!emailCheck.test(userEmail.value.trim())){
    errorMessage.textContent = "Please Enter Valid Email !";
    errorMsg.textContent = "Please Enter Valid Email !"
    showError();
    if(window.innerWidth < 500){
            errorMsg.style.display = 'block';
    }
    else{
         errorMsg.style.display = 'none';
    }
    return false;
}

if(userPassword.value.trim().length < 6){
    errorMessage.textContent = "Password Must Contain 6 Letters";
    errorMsg.textContent = "Password Must Contain 6 Letters"
    showError();
    if(window.innerWidth < 500){
            errorMsg.style.display = 'block';
    }
    else{
         errorMsg.style.display = 'none';
    }
    return false;
}

if(userPassword.value.trim() != newPassword.value.trim()){
    errorMessage.textContent = "Password Not Match";
    errorMsg.textContent = "Password Not Match";
    showError();
    if(window.innerWidth < 500){
            errorMsg.style.display = 'block';
    }
    else{
         errorMsg.style.display = 'none';
    }
    return false;
}
    errorMessage.textContent = '';
    alert("You Signed In Successfully");
    allClear();
    errorMsg.textContent = '';
     errorMessage.style.display = 'none';
    return true;
    
}

                        // Script For Responsive mobile screen 

                //   Adding p tag to login page

var word = document.getElementById("word");
 var p = document.createElement('p');
 var span = document.createElement('span');
 p.id = 'new-p';
 span.id = 'login-span';
 let loginMessageAdded = false;

function adding(){
    if(window.innerWidth <= 500 && !loginMessageAdded){  
        p.innerHTML = `Don't have an account ` ;
        span.innerHTML = `SignIn`;
        word.appendChild(p);
        word.appendChild(span);
          loginMessageAdded = true;
          
    }
    else if(window.innerWidth > 500 && loginMessageAdded){
          var newPara = document.getElementById("new-p");
          var newSpan = document.getElementById("login-span");      
        if(newPara && newSpan){   
            newPara.remove();
            newSpan.remove();
               loginMessageAdded = false; 
        }
    }
    }

  window.addEventListener('resize', adding);
  window.addEventListener('load', adding);


                    // Adding p and span tag to sign in page



  var words = document.getElementById("words");
 var pa = document.createElement('p');
 var spans = document.createElement('span');
 pa.id = 'new-pa';
 spans.id = 'signin-span';
 let messageAdded = false;

function addingFlip(){

    if(window.innerWidth <= 500 && !messageAdded){  
        pa.innerHTML = `Already have an account ` ;
        spans.innerHTML = `Log In`;
        words.appendChild(pa);
        words.appendChild(spans);
          messageAdded = true;
    }
    else if(window.innerWidth > 500 && messageAdded){
          var newParas = document.getElementById("new-pa");
          var newSpans = document.getElementById("signin-span");
           errorMsg.style.display = 'none';
        if(newParas && newSpans){   
            newParas.remove();
            newSpans.remove();
               messageAdded = false;  
        }
    }
    }

  window.addEventListener('resize', addingFlip);
  window.addEventListener('load', addingFlip);



                    // Flip to Signin page in responsive design





var logInSpan = document.getElementById("login-span");

    span.onclick = function(){
 subContainer.classList.toggle('flip');
    signInContainer.style.display = 'grid';
    //  errorMsg.style.display = 'none';
    };
  
      // Flip to Login page in responsive design


      var signInSpan = document.getElementById("signin-span");

    spans.onclick = function(){
 subContainer.classList.toggle('flip');
    logInContainer.style.display = 'grid';
    signInContainer.style.display = 'grid';
        //  errorMsg.style.display = 'none';
    };