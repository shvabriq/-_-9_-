const first_name = document.getElementById('first_name');
const email = document.getElementById('email');
const phone_number = document.getElementById('phone_number');
const quantity = document.getElementById('quantity');
const payment = document.getElementById('payment');

const emailError = document.getElementById('span_email');
const first_nameError = document.getElementById('span_first_name');
const phone_numberError = document.getElementById('span_phone_number');
const quantityError = document.getElementById('span_quantity');
const sum = document.getElementById('span_sum');
const paymentError = document.getElementById('span_payment');



first_name.addEventListener('input', function (event) {
    if (first_name.validity.valid) {
        first_nameError.textContent = '';
        first_nameError.className = 'error';
        first_name.style.background = 'green';
        first_name.style.color = 'black';
    } else {
        showError();
    }
});

email.addEventListener('input', function (event) {
    if (email.validity.valid) {
        emailError.textContent = '';
        emailError.className = 'error';
    } else {
        showError();
    }
});

phone_number.addEventListener('input', function (event) {
    if (phone_number.validity.valid) {
        phone_numberError.textContent = '';
        phone_numberError.className = 'error';
    } else {
        showError();
    }
});

quantity.addEventListener('input', function (event) {
    if (quantity.validity.valid) {
        quantityError.textContent = '';
        quantityError.className = 'error';
        sum.textContent = `Сумма чего-нибудь: ${quantity.value * 50} рублей`;
    } else {
        showError();
    }
});

payment.addEventListener('change', function (event) {
    if (payment.value != "None") {
        paymentError.textContent = '';
        paymentError.className = 'error';
    } else {
        showError();
    }
});

function pleasehelp() {
    if (payment.value != "None") {
        alert("Здравствуйте, " + first_name.value +
            "! Ваш заказ был успешно оформлен. Проверьте указанные вами данные: почта " + email.value 
            + ", номер телефона: " + phone_number.value + ", количество чего-нибудь: " + quantity.value + ", метод оплаты: " 
            + payment.value + ". К оплате: " + quantity.value * 50 + " рублей.");
    }
}

function showError() {
    if (!first_name.validity.valid) {
        first_nameError.className = 'error active';
    }
    if (first_name.validity.valueMissing) {
        first_nameError.textContent = 'Пожалуйста, введите имя.';
    }

    if (!email.validity.valid) {
        emailError.className = 'error active';
    }
    if (email.validity.valueMissing) {
        emailError.textContent = 'Пожалуйста, введите адрес электронной почты.';
    }
    if (email.validity.typeMismatch) {
        emailError.textContent = 'Адрес электронной почты должен иметь вид example@example.com.';
    }

    if (!phone_number.validity.valid) {
        phone_numberError.className = 'error active';
    }
    if (phone_number.validity.valueMissing) {
        phone_numberError.textContent = 'Пожалуйста, введите номер телефона.';
    }

    if (phone_number.validity.valueMissing) {
        phone_numberError.textContent = 'Пожалуйста, введите номер телефона в формате цифр.';
    }

    if (!quantity.validity.valid) {
        quantityError.className = 'error active';
        quantityError.textContent = 'Пожалуйста, введите число от 0 до 100.';
    }
    if (quantity.validity.valueMissing) {
        quantityError.textContent = 'Пожалуйста, введите количество.';
    }
    if (quantity.validity.rangeUnderflow) {
        quantityError.textContent = 'Пожалуйста, введите число больше 0.';
    }
    if (quantity.validity.rangeOverflow) {
        quantityError.textContent = 'Пожалуйста, введите число меньше 101.';
    }

    if (!payment.validity.valid) {
        paymentError.className = 'error active';
    }
    if (payment.value == "None") {
        paymentError.textContent = 'Пожалуйста, выберите способ оплаты.';
    }

}
