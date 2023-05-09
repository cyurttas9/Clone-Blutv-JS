const email = document.getElementById('email')
const password = document.getElementById('sifre')
const passwordIcon = document.getElementById('showPassword')

addMail = false;

email.onkeydown = function() {

    if(email.value.length > 1 && addMail) {

        email.value = email.value + '@gmail.com'
        return addMail = false;
    }

    if(email.value.length < 1 || !email.value.length.includes('@gmail.com')) {

        addMail = true;
    }
}

passwordIcon.onclick = function() {

    if(password.type == 'password') {

        password.type = 'text'
    } else {

        password.type = 'password'
    }
}