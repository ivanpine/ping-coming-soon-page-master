const input = document.querySelector('input');
const button = document.querySelector('button');
const message = document.querySelector('.error');

button.addEventListener('click', function () {
    if (!input.value) {
        message.classList.remove('hidden');
        input.style.border = '1px solid var(--color-light_red)';
    }

    else {
        if (validateEmail(input.value)) {
            message.classList.add('hidden');
            input.style.border = '1px solid var(--color-pale_blue)';
        }

        else {
            message.classList.remove('hidden');
        }
    }
});

function validateEmail (email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
};