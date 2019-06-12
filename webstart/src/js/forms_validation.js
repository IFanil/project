 /* Валидация формы*/ 
 $('#brif-form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
        username: {
            required: true,
            minlength: 2,
            maxlength: 15
        },
        phone: {
            required: true
        },
        email: {
            required: true,
            email: true
        }
    },
    messages: {
        username: {
            required: "Заполните поле",
            minlength: jQuery.validator.format("Осталось символов: {0}")
        },
        phone: {
            required: "Заполните поле"
        },
        email: {
            required: "Введите корректный email",
            email: "Введите корректный email"
        }
    }
});
$('#offer-form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
        username: {
            required: true,
            minlength: 2,
            maxlength: 15
        },
        phone: {
            required: true
        },
    },
    messages: {
        username: {
            required: "Заполните поле",
            minlength: jQuery.validator.format("Осталось символов: {0}")
        },
        phone: {
            required: "Заполните поле"
        },
    }
});
/* Маска для телефона*/ 
$('.phone').mask('8 (999) 999-99-99');