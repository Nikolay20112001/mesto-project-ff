const enableValidation = (validationConfig) => {
    const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));
    formList.forEach((formElement) => {
        setEventListeners(formElement, validationConfig);
    });
};

const clearValidation = (formElement, validationConfig) => {
    const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
    inputList.forEach((inputElement) => {
        hideInputError(formElement, inputElement, validationConfig);
    });
};

const setEventListeners = (formElement, validationConfig) => {
    const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            isValid(formElement, inputElement, validationConfig);
        });
    });
};

const isValid = (formElement, inputElement, validationConfig) => {
    if (!inputElement.validity.valid) {
        if (inputElement.validity.patternMismatch) {
            showInputError(formElement, inputElement, inputElement.dataset.patternErrorMessage, validationConfig);
        } else {
            showInputError(formElement, inputElement, inputElement.validationMessage, validationConfig);
        }
    } else {
        hideInputError(formElement, inputElement, validationConfig);
    }
};

const showInputError = (formElement, inputElement, errorMessage, validationConfig) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    const submitButton = formElement.querySelector(validationConfig.submitButtonSelector);
    inputElement.classList.add(validationConfig.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validationConfig.errorClass);
    submitButton.disabled = true;
    submitButton.classList.add(validationConfig.inactiveButtonClass);
}

const hideInputError = (formElement, inputElement, validationConfig) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    const submitButton = formElement.querySelector(validationConfig.submitButtonSelector);
    inputElement.classList.remove(validationConfig.inputErrorClass);
    errorElement.classList.remove(validationConfig.errorClass);
    errorElement.textContent = '';
    submitButton.disabled = false;
    submitButton.classList.remove(validationConfig.inactiveButtonClass);
};

export {enableValidation, clearValidation};