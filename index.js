var uname = document.getElementById('uname');
var email = document.getElementById('email');
var password = document.getElementById('password');
var password2 = document.getElementById('password2');
var unameerror = document.getElementById('unameerr');
var btn = document.getElementById('btn');
var emailerror = document.getElementById("emailerr");
var passworderror = document.getElementById("passworderr");
var password2error = document.getElementById("password2err");

btn.addEventListener('click', (e) => {
    e.preventDefault();
    submit();
});



function submit() {
    var count = 0;

    if (uname.value == '') {
        unameerror.textContent = "Invalid Username!";
        unameerror.style.visibility = "visible";
        uname.style.border = "2px solid red ";
        unameerror.style.color = "red";
    }
    else if (uname.value.length > 10) {
        unameerror.textContent = "Name should not exceed 10 characters.";
        unameerror.style.visibility = "visible";
        unameerror.style.color = "red";
        uname.style.border = "2px solid red ";
    }
    else {
        uname.style.border = "2px solid green ";
        unameerror.style.visibility = "hidden";
        count += 1;
    }

    if (email.value == "") {
        emailerror.textContent = " Invalid Email!";
        emailerror.style.visibility = "visible";
        emailerror.style.color = "red";
        email.style.border = "2px solid red";
    }
    else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        email.style.border = "2px solid green ";
        emailerror.style.visibility = "hidden";
        count += 1;
    }
    else {
        emailerror.textContent = "Email is not valid!";
        emailerror.style.visibility = "visible";
        emailerror.style.color = "red";
        email.style.border = "2px solid red";
    }

    if (password.value == "") {
        passworderror.style.visibility = "visible";
        passworderror.style.color = "red";
        passworderror.textContent = "Enter a valid password!";
        password.style.border = "2px solid red ";
    }
    else if (!password.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/)) {
        passworderror.textContent = "Password minimum length should be 8 characaters. It must contains 1 upper-case, 1 lower-case, 1 special chartacters and 1 digit.";
        passworderror.style.visibility = "visible";
        passworderror.style.color = "red";
        password.style.border = "2px solid red";
        password.style.marginBottom = "25px";
    }
    else {
        password.style.border = "2px solid green";
        passworderror.style.visibility = "hidden";
        count += 1;
    }

    if (password2.value == "") {
        password2error.style.visibility = "visible";
        password2error.textContent = "Wrong password!";
        password2error.style.color = "red";
        password2.style.border = "2px solid red";
    }
    else if (password.value == password2.value) {
        password2.style.border = "2px solid green";
        password2error.style.visibility = "hidden";
        count += 1;
    }
    else {
        password2error.style.visibility = "visible";
        password2error.textContent = "Password does not match!";
        password2error.style.color = "red";
        password2.style.border = "2px solid red";
    }
    if (count == 4) {

        console.log(uname.value);
        console.log(email.value);
        console.log(password.value);
        console.log(password2.value);
    }
    else {
        console.log("Invalid data!!!");
        console.log("Register button wouldn't work.");
    }

}