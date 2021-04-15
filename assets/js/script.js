var input= document.getElementById('floatingInput');
var password = document.getElementById('floatingPassword');


function validate () {
    if (input.value.trim() && password.value.trim()) {
        document.querySelector('.login-btn').classList.remove('disabled');
    } else {
        document.querySelector('.login-btn').classList.add('disabled');
    }
}

input.oninput = validate;
password.oninput = validate;
 