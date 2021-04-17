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
    if (!$('#forgotInput').val().trim()) {
        $('#forgotInput').addClass('is-invalid')
    } else {
        $('#forgotInput').removeClass('is-invalid')
    }

}

$('.search-btn').on('click', function () {
    checkInp()
})


// SignUp page Name input character count//

var text_max = 50;
$('#charCount').html('0 / ' + text_max);

$('#signupNameInput').keyup(function () {
    var text_length = $('#signupNameInput').val().trim().length;
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





// SignUp Page Step-2 Checkbox activation //

var trackCheckLabel = $('#trackCheckLabel') 
var trackCheckInput = $('#trackCheckBox')

trackCheckLabel.on('click',function() {
    $('.check-bg').toggleClass('active')
    $('.check-wrapper').toggleClass('active')
    trackCheckInput.prop("checked", !trackCheckInput.prop("checked"));
})

trackCheckInput.on('click',function(){
    trackCheckInput.prop("checked", !trackCheckInput.prop("checked"));
})


// Login Page check if both inputs are empty  //
var input = document.getElementById('loginEmailInput');
var password = document.getElementById('loginPasswordInput');


function validate() {
    if (input.value.trim() && password.value.trim()) {
        document.querySelector('.login-btn').classList.remove('disabled');
    } else {
        document.querySelector('.login-btn').classList.add('disabled');
    }
}

input.oninput = validate;
password.oninput = validate;