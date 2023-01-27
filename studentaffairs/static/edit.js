//js form validation
var form = document.getElementById("form2");

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
    var studentgender = document.getElementById("gender").value;

    if (studentgender === "") {
        document.getElementById("gendererror").innerHTML = " *Student Gender is Required";
        document.getElementById("gender").focus();
        isValid = false;
    }
    else if (isNaN(studentgender) === false) {
        document.getElementById("gendererror").innerHTML = " *Student Gender Can not be a number";
        document.getElementById("gender").focus();
        isValid = false;
    }
    else if (studentgender!=="Female"&& studentgender!=="female"&& studentgender!=="Male"&& studentgender!=="male"){
        document.getElementById("gendererror").innerHTML = " *Write Correct Gender";
        document.getElementById("gender").focus();
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
        document.getElementById("level").focus();
        isValid = false;
    }
    else if (studentlev !== "1" && studentlev !== "2" && studentlev !== "3" && studentlev !== "4") {
        document.getElementById("levelerror").innerHTML = " *write correct level 1 or 2 or 3 or 4";
        document.getElementById("level").focus();
        isValid = false;
    }
    else {
        document.getElementById("levelerror").innerHTML = "";
        isValid = (isValid) ? true : false;
    }
    //status validation
    var status = document.getElementById("stats").value;

    if (status === "" ) {
        document.getElementById("statuserror").innerHTML = " *Student State is Required";
        document.getElementById("stats").focus();
        isValid = false;
    }
    else if (status !== 'active' && status !== 'Active' && status !== 'inactive'&& status !== 'Inactive' ) {
        document.getElementById("statuserror").innerHTML = " *Student State active or inactive";
        document.getElementById("stats").focus();
        isValid = false;
    }
    else {
        document.getElementById("statuserror").innerHTML = "";
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
})

function confirmation() {
    var result = confirm("Are you sure you want to save changes?");
    if (result) {
        alert("saved");
    }
    else
    {
        alert("undone");
    }
}
            