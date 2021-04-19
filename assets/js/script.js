// SignUp Page Step-5 Password Input validation //
$("#step5PasswordInput").on('input', function() {
    if ($(this).val().length >= 8) {
        $(this).removeClass('is-invalid')
        $(this).addClass('valid')
    } else {
        $(this).removeClass('valid')
        $(this).addClass('is-invalid')
    }
})

$('.step5-hint #show-pass').on('click', function() {
    $(this).css('display', 'none')
    $('.step5-hint #hide-pass').css('display', 'inline-block')
    $('#step5PasswordInput').prop("type", "text");
})
$('.step5-hint #hide-pass').on('click', function() {
    $(this).css('display', 'none')
    $('.step5-hint #show-pass').css('display', 'inline-block')
    $('#step5PasswordInput').prop("type", "password");
})



// SignUp page change input from phone to email // 

$('#changeToEmail').click(function(event) {
    event.preventDefault();
    $('.signup-inputs .form-floating.email').css('display', 'block')
    $('.signup-inputs .form-floating.phone').css('display', 'none')
    $('#changeToEmail').css('display', 'none')
    $('#changeToPhone').css('display', 'block')
})

$('#changeToPhone').click(function(event) {
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

$('.search-btn').on('click', function() {
    checkInp()
})


// SignUp page Name input character count//

var text_max = 50;
$('#charCount').html('0 / ' + text_max);

$('#signupNameInput').keyup(function() {
    var text_length = $('#signupNameInput').val().trim().length;
    $('#charCount').html(text_length + ' / ' + text_max);
});




// SignUp Page Step-2 Checkbox activation //

var trackCheckLabel = $('#trackCheckLabel')
var trackCheckInput = $('#trackCheckBox')

trackCheckLabel.on('click', function() {
    $('.check-bg').toggleClass('active')
    $('.check-wrapper').toggleClass('active')
    trackCheckInput.prop("checked", !trackCheckInput.prop("checked"));
})

trackCheckInput.on('click', function() {
    trackCheckInput.prop("checked", !trackCheckInput.prop("checked"));
})



$('.step3 #step3NameInput').val('Ali Gurbanli')
$('.step3 #step3PhoneInput').val('+994507224461')
$('.step3 #step3DateInput').val('Feb 16, 1997')




//SignUp Page check if inputs are valid  //

var signupNameInput = document.getElementById('signupNameInput');
var signupPhoneInput = document.getElementById('signupPhoneInput');
var signupEmailInput = document.getElementById('signupEmailInput');
var signupSelectMonth = document.getElementById('signupSelectMonth');
var signupSelectDay = document.getElementById('signupSelectDay');
var signupSelectYear = document.getElementById('signupSelectYear');


signupNameInput.onkeyup = function() {
    if (!signupNameInput.value.trim()) {
        signupNameInput.classList.remove('valid')
        signupNameInput.classList.add('is-invalid')
        validateSignUp()
    } else {
        signupNameInput.classList.add('valid')
        signupNameInput.classList.remove('is-invalid')
        validateSignUp()
    }

}


function validateSignUp() {
    if (signupNameInput.classList.contains('valid') &&
        signupPhoneInput.classList.contains('valid') &&
        signupSelectMonth.value &&
        signupSelectYear.value &&
        signupSelectDay.value) {
        document.querySelector('.next-btn').classList.remove('disabled');

    } else if (signupNameInput.classList.contains('valid') &&
        signupEmailInput.classList.contains('valid') &&
        signupSelectMonth.value &&
        signupSelectYear.value &&
        signupSelectDay.value
    ) {
        document.querySelector('.next-btn').classList.remove('disabled');


    } else {
        document.querySelector('.next-btn').classList.add('disabled');

    }
}
signupNameInput.oninput = validateSignUp;
signupPhoneInput.oninput = validateSignUp;
signupEmailInput.oninput = validateSignUp;
signupSelectMonth.oninput = validateSignUp;
signupSelectDay.oninput = validateSignUp;
signupSelectYear.oninput = validateSignUp;



// SignUp Page Email and Phone input validation //

var emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
var phonePattern = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/g;


let timer,
    timeoutVal = 500; // time it takes to wait for user to stop typing in ms

let timer2,
    timeoutVal2 = 500; // time it takes to wait for user to stop typing in ms

// pointers to our simple DOM elements

// detects when the user is actively typing
signupEmailInput.addEventListener('keypress', emailKeyPress);
// triggers a check to see if the user is actually done typing
signupEmailInput.addEventListener('keyup', emailKeyUp);

signupPhoneInput.addEventListener('keypress', phoneKeyPress);
signupPhoneInput.addEventListener('keyup', phoneKeyUp);

function emailKeyUp(e) {
    window.clearTimeout(timer); // prevent errant multiple timeouts from being generated
    timer = window.setTimeout(() => {

        if (this.value.match(emailPattern)) {
            console.log('valid')
            $('#signupEmailInput').removeClass('is-invalid')
            $('#signupEmailInput').addClass('valid')

            validateSignUp()

        } else {
            console.log('invalid')
            $('#signupEmailInput').addClass('is-invalid')
            $('#signupEmailInput').removeClass('valid')

            validateSignUp()
        }

    }, timeoutVal);
}

function emailKeyPress(e) {
    window.clearTimeout(timer2);
}


function phoneKeyPress(e) {
    window.clearTimeout(timer2);
}

function phoneKeyUp(e) {
    window.clearTimeout(timer2); // prevent errant multiple timeouts from being generated
    timer2 = window.setTimeout(() => {

        if (this.value.match(phonePattern)) {
            console.log('valid')
            $('#signupPhoneInput').removeClass('is-invalid')
            $('#signupPhoneInput').addClass('valid')
            validateSignUp()
        } else {
            console.log('invalid')
            $('#signupPhoneInput').addClass('is-invalid')
            $('#signupPhoneInput').removeClass('valid')
            validateSignUp()

        }
    }, timeoutVal);
}



// Login Page check if inputs are valid  //
var loginInput = document.getElementById('loginEmailInput');
var loginPassword = document.getElementById('loginPasswordInput');


function validateLogin() {
    if (loginInput.value.trim() && loginPassword.value.trim()) {
        document.querySelector('.login-btn').classList.remove('disabled');
    } else {
        document.querySelector('.login-btn').classList.add('disabled');
    }
}

loginInput.oninput = validateLogin;
loginPassword.oninput = validateLogin;