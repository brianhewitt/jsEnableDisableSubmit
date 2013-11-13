// enable/disable submit button

var unameFld = document.getElementById("uName_field");
var pwdFld = document.getElementById("passwordField");
var submitButton = document.getElementById("submitButton");

function disableSubmit() {
    submitButton.disabled = true;
}

function enableSubmit() {
    submitButton.disabled = false;
}

function checkFields() {
    var unameFldVal = unameFld.value;
    var pwdFldVal = pwdFld.value;
    
    if ( (unameFldVal.length >= 2) && (pwdFldVal.length >= 4) ) {
        enableSubmit();
    }
    
    else {
        disableSubmit();
    }
}

// field error highlighting

function checkErrors() {
    var unameErrorDetect = document.getElementsByClassName("unameErr").length;
    var pwdErrorDetect = document.getElementsByClassName("pwdErr").length;
    
    if ( unameErrorDetect > 0 ) {
        unameFld.className = unameFld.className + " fieldError";
    } 
            
    if ( pwdErrorDetect > 0 ) {
        pwdFld.className = pwdFld.className + " fieldError";
    }
}

// execution

window.onload = function() {
    checkFields();
    // reset input fields on page load
    unameFld.value = "";
    pwdFld.value = "";
    checkErrors();                
}

unameFld.onkeyup = function() {
    checkFields();
}

pwdFld.onkeyup = function() {
    checkFields();
}
