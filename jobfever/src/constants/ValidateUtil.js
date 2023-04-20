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