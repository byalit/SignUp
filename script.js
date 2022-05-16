const username = document.querySelector("#username");
const pass = document.querySelector("#password");
const pass2 = document.querySelector("#password2");
const email = document.querySelector("#email");
const clear = document.querySelector(".clear");
const send = document.querySelector(".send");
const popup = document.querySelector(".popup");

const errorPopup = (input, msg) => {
    const findInput = input.parentElement;
    const errText = findInput.querySelector(".error-text");

    findInput.classList.add("error");
    errText.textContent = msg;
};

const checkLength = (index, min) => {
    if (index.value.length < min) {
        errorPopup(
            index,
            `${index.previousElementSibling.innerText} is too short. Min. ${min} characters.`
        );
    }
};
const checkPassword = (input, input2) => {
    if (input.value !== input2.value) {
        errorPopup(input2, "The passwords you entered do not match.");
    }
};
const checkEmail = (email) => {
    const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email.value)) {
        clearErr(email)
    } else {
        errorPopup(email, 'Enter the valid email ')
    }
}
const clearErr = (input) => {
    const findInput = input.parentElement;
    findInput.classList.remove("error");
};

const checkBox = (el) => {
    el.forEach((input) => {
        if (input.value === "") {
            errorPopup(input, input.placeholder);
        } else {
            clearErr(input);
        }
    });
};

send.addEventListener("click", (e) => {
    e.preventDefault();
    checkBox([username, pass, pass2, email]);
    checkLength(username, 3);
    checkLength(pass, 8);
    checkPassword(pass, pass2);
    checkEmail(email)
});

clear.addEventListener("click", (e) => {
    e.preventDefault();
    [username, pass, pass2, email].forEach((el) => {
        el.value = "";
      clearErr(el);
    });
});
