export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export const isValidPhoneNumber = (phoneNumber) => {
    const phoneNumberRegex = /^\d{9}$/;
    return phoneNumberRegex.test(phoneNumber);
}




export const validateFormData = (formData, validateInput) => {
    const errors = {...formData.errors};
    let formIsValid = true;

    for (const [key, value] of Object.entries(formData)) {
        const errorMessage = validateInput(key, value);
        errors[key] = errorMessage;
        if (errorMessage) {
            formIsValid = false;
        }
    }

    return formIsValid ? null : errors;
};