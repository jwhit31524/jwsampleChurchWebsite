
"use strict"

function removeSelectDefaultsOnForm() {
    var selectValues = document.getElementsByTagName("select");
    for (var i = 0; i < selectValues.length; i++)
        selectValues[i].selectedIndex = - 1;
    
}

if (window.addEventListener) {
    window.addEventListener("load", removeSelectDefaultsOnForm, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", removeSelectDefaultsOnForm)
}

function validateCCInfo() {
    var ccinfoVar = document.getElementById("ccNum");
    if (ccinfoVar.value === "" || ccinfoVar.value.length < 16) {
        alert("Please enter a valid credit card number");
        window.location.href = 'ccInfo.html'
    }
    else {
        window.location.href = 'paymentSuccessful.html'
    }
}

function ccWrapperFunc() {
    validateCCInfo();
}

function submitInformation() {

    var submitForContactVar = document.getElementById("submitForContact");
    var name = document.getElementById("nameinput");
    var email = document.getElementById("emailinput");
    var phone = document.getElementById("phoneinput");

    if (name.value != "" && email.value != "" && phone.value != "") {
        alert("We appreciate you connecting. Someone should contact you within 48 hours");
    }
    else {
        alert("Please fill in all of the text fields");
    }

}






