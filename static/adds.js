 // JS form Validation
var form = document.getElementById("form");

form.addEventListener("submit", (e) => {

    var isValid = true;
    //name validation
    var studentname = document.getElementById("name").value;

    if (studentname === "") {
        document.getElementById("nameerror").innerHTML = " *Student Name is Required";
        document.getElementById("name").focus();
        isValid = false;
    }
    else if (isNaN(studentname) === false) {
        document.getElementById("nameerror").innerHTML = " *Student Name Can not be a number";
        document.getElementById("name").focus();
        isValid = false;
    }
    else {
        document.getElementById("nameerror").innerHTML = "";
        isValid = (isValid) ? true : false;
    }
    //id validation
    var studentid = document.getElementById("id").value;

    if (studentid.toString().length == 0) {
        document.getElementById("iderror").innerHTML = " *Student ID is Required";
        document.getElementById("id").focus();
        isValid = false;
    }
    else if (studentid.toString().length < 8 && studentid.toString().length != 0) {
        document.getElementById("iderror").innerHTML = " *Student ID Must contians 8 number";
        document.getElementById("id").focus();
        isValid = false;
    }
    else {
        document.getElementById("iderror").innerHTML = "";
        isValid = (isValid) ? true : false;
    }
    //birth date validation
    var studentBD = document.getElementById("date").value;

    if (studentBD === "") {
        document.getElementById("dateerror").innerHTML = " *Student Birth date is Required";
        document.getElementById("date").focus();
        isValid = false;
    }
    else {
        document.getElementById("dateerror").innerHTML = "";
        isValid = (isValid) ? true : false;
    }
    //gpa validation
    var studentgpa = document.getElementById("gpa").value;


    if (studentgpa === "") {
        document.getElementById("gpaerror").innerHTML = " *Student Gpa is Required";
        document.getElementById("gpa").focus();
        isValid = false;
    }
    else {
        document.getElementById("gpaerror").innerHTML = "";
        isValid = (isValid) ? true : false;
    }
    //Gender validation
    var genfem = document.getElementById("fem").checked;
    var genmale = document.getElementById("ma").checked;
    if (genfem == "" && genmale == "") {
        document.getElementById("gendererror").innerHTML = " *Student Gender is Required";
        isValid = false;
    }
    else {
        document.getElementById("gendererror").innerHTML = "";
        isValid = (isValid) ? true : false;
    }
    //level validation
    var studentlev = document.getElementById("level").value;
    if (studentlev === "") {
        document.getElementById("levelerror").innerHTML = " *Student Level is Required";
        isValid = false;
    }
    else {
        document.getElementById("levelerror").innerHTML = "";
        isValid = (isValid) ? true : false;
    }
    //status validation

    var statact = document.getElementById("act").checked;
    var statinact = document.getElementById("inact").checked;

    if (statact == "" && statinact == "") {
        document.getElementById("statuserror").innerHTML = " *Student Status is Required";
        isValid = false;
    }
    else {
        document.getElementById("statuserror").innerHTML = "";
        isValid = (isValid) ? true : false;
    }
    //department validation
    var studentdep = document.getElementById("dep").value;
    if (studentdep === "") {
        document.getElementById("deperror").innerHTML = " *Student Department is Required";
        isValid = false;
    }
    else {
        document.getElementById("deperror").innerHTML = "";
        isValid = (isValid) ? true : false;
    }
    //email validation
    var studentemail = document.getElementById("em").value;


    let at = studentemail.indexOf("@");
    let dot = studentemail.indexOf(".");

    if (studentemail === "") {
        document.getElementById("emailerror").innerHTML = " *Student Email is Required";
        document.getElementById("em").focus();
        isValid = false;
    }
    else if (at == -1 || dot == -1) {
        document.getElementById("emailerror").innerHTML = " *Invalid Email";
        document.getElementById("em").focus();
        isValid = false;
    }
    else {
        document.getElementById("emailerror").innerHTML = "";
        isValid = (isValid) ? true : false;
    }
    //mobile number validation
    var studentphone = document.getElementById("mnum").value;

    let x = studentphone.indexOf("011");
    let y = studentphone.indexOf("010");
    let z = studentphone.indexOf("012");
    let w = studentphone.indexOf("015");
    if (studentphone === "") {
        document.getElementById("phoneerror").innerHTML = " *Student Mobile Number is Required";
        document.getElementById("mnum"), focus();
        isValid = false;
    }
    else if (studentphone.length < 11) {
        document.getElementById("phoneerror").innerHTML = " *Invalid Mobile Number";
        document.getElementById("mnum"), focus();
        isValid = false;
    }
    else if (x != 0 && y != 0 && z != 0 && w != 0) {
        document.getElementById("phoneerror").innerHTML = " *Invalid Mobile Number";
        document.getElementById("mnum"), focus();
        isValid = false;
    }
    else {
        document.getElementById("phoneerror").innerHTML = "";
        isValid = (isValid) ? true : false;
    }
//if all info is validated
    if (isValid == false) {
        e.preventDefault();
    }
    var IsDep;
    if (studentlev == 3 && (studentdep == "General" || studentdep == "special")) {
        IsDep == true;
    }

    
})

// function to clear all erros onclick reset button
function clearerrors() {
    var array = ["nameerror", "iderror", "dateerror", "gpaerror", "gendererror", "levelerror"
    ,"statuserror","deperror","emailerror","phoneerror"]
    for (let i = 0; i < array.length; i++) {
        document.getElementById(array[i]).innerHTML = "";
    }
}