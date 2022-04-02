const warningMessageInvalid = document.querySelector(".warning_message_invalid");
const warningMessageEmpty = document.querySelector(".warning_message_empty")
const inputArea = document.querySelector(".form_email__input");
const inputContainer = document.querySelector(".input_container");
const form = document.getElementById("myForm");

const handleForm = (event) => {
    event.preventDefault();
}

const warningMessageInvalidHide = () => {
    warningMessageInvalid.style.position = "absolute";
    warningMessageInvalid.style.opacity = "0";
}

const warningMessageEmptyHide = () => {
    warningMessageEmpty.style.position = "absolute";
    warningMessageEmpty.style.opacity = "0";
}

const warningMessageInvalidShow = () => {
    inputContainer.style.margin = "auto";
    warningMessageInvalid.style.position = "static";
    warningMessageInvalid.style.opacity = "1";
    inputArea.style.border = "1px solid var(--Light-Red)";
}

const warningMessageEmptyShow = () => {
    inputContainer.style.margin = "auto";
    warningMessageEmpty.style.position = "static";
    warningMessageEmpty.style.opacity = "1";
    inputArea.style.border = "1px solid var(--Light-Red)";
}

const validateEmail = (inputText) => {
    let emailRegex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (inputText.value.match(emailRegex)) {
        document.form1.text1.focus();
        location.reload();
        return true;
    } else if (inputText.value == "") {
        warningMessageInvalidHide();
        warningMessageEmptyShow();
        document.form1.text1.focus();
        form.addEventListener('submit', handleForm);
        return false;
    } else {
        warningMessageEmptyHide();
        warningMessageInvalidShow();
        document.form1.text1.focus();
        form.addEventListener('submit', handleForm);
        return false;
    }
}