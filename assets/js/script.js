

$('#changeToEmail').click(function(event){
    event.preventDefault();
    $('.signup-inputs .form-floating.email').css('display','block')
    $('.signup-inputs .form-floating.phone').css('display','none')
    $('#changeToEmail').css('display','none')
    $('#changeToPhone').css('display','block')
})

$('#changeToPhone').click(function(event){
    event.preventDefault();
    $('.signup-inputs .form-floating.email').css('display','none')
    $('.signup-inputs .form-floating.phone').css('display','block')
    $('#changeToEmail').css('display','block')
    $('#changeToPhone').css('display','none')
})


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
 