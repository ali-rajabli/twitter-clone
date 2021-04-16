// SignUp page change input from phone to email // 

$('#changeToEmail').click(function (event) {
    event.preventDefault();
    $('.signup-inputs .form-floating.email').css('display', 'block')
    $('.signup-inputs .form-floating.phone').css('display', 'none')
    $('#changeToEmail').css('display', 'none')
    $('#changeToPhone').css('display', 'block')
})

$('#changeToPhone').click(function (event) {
    event.preventDefault();
    $('.signup-inputs .form-floating.email').css('display', 'none')
    $('.signup-inputs .form-floating.phone').css('display', 'block')
    $('#changeToEmail').css('display', 'block')
    $('#changeToPhone').css('display', 'none')
})


// ForgotPassword page  check if input is empty // 
function checkInp() {
    if (!$('#floatingForgot').val().trim()) {
        $('#floatingForgot').addClass('is-invalid')
    } else {
        $('#floatingForgot').removeClass('is-invalid')
    }

}

$('.search-btn').on('click', function () {
    checkInp()
})


// SignUp page Name input character count//

var text_max = 50;
$('#charCount').html('0 / ' + text_max);

$('#floatingNameInput').keyup(function () {
    var text_length = $('#floatingNameInput').val().trim().length;
    // var text_remaining = text_max - text_length;

    $('#charCount').html(text_length + ' / ' + text_max);
});



// SignUp Page Phone input validation //

// var phoneInput = $('#floatingPhoneInput')
// var phonePattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

// phoneInput.on('input',function(event) {
// event.preventDefault
// if(!$(this).val().match(phonePattern)) {
//     console.log('invalid')
// }
     
// })


// Login Page check if both inputs are empty  //
var input = document.getElementById('floatingInput');
var password = document.getElementById('floatingPassword');


function validate() {
    if (input.value.trim() && password.value.trim()) {
        document.querySelector('.login-btn').classList.remove('disabled');
    } else {
        document.querySelector('.login-btn').classList.add('disabled');
    }
}

input.oninput = validate;
password.oninput = validate;