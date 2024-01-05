import { emailRegex, passwordRegex, usernameRegex, emailOrUsernameRegex } from '../../utils/regexValidations.js';

export function useValidation() {
    const validateField = (field) => {
        let error = null;

        if (field.type === 'text') {
            error = emailOrUsernameRegex.test(field.value) ? null : 'Invalid email or username';
        } else if (field.type === 'password') {
            error = passwordRegex.test(field.value) ? null : 'Invalid password';
        } else if (field.type === 'email') {
            error = emailRegex.test(field.value) ? null : 'Invalid email';
        } else if (field.type === 'username') {
            error = usernameRegex.test(field.value) ? null : 'Invalid username';
        }

        field.error = error;
        return !error;
    };

    const validatePasswordsMatch = (passwordField, confirmPasswordField) => {
        if (passwordField && confirmPasswordField && passwordField.value !== confirmPasswordField.value) {
          confirmPasswordField.error = 'Passwords do not match';
          return false;
        }
        confirmPasswordField.error = null;
        return true;
    };
    
    const validateForm = (fields) => {
    let isFormValid = true;

    for (const field of fields) {
        const isValidField = validateField(field);
            if (!isValidField) {
            isFormValid = false;
            }
        }

        // Find the password and confirm password fields by their names or labels
        const passwordField = fields.find(field => field.name === 'password');
        const confirmPasswordField = fields.find(field => field.name === 'confirmPassword');

        // Validate that the passwords match, if applicable
        if (passwordField && confirmPasswordField) {
            const passwordsMatch = validatePasswordsMatch(passwordField, confirmPasswordField);
                if (!passwordsMatch) {
                isFormValid = false;
                }
            }

        return isFormValid;
    };

    return { validateField, validateForm };
}
