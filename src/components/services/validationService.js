import { emailRegex, passwordRegex, usernameRegex, emailOrUsernameRegex } from '../../utils/regexValidations.js';
import login from '../../locales/en/login.json';
import register from '../../locales/en/register.json';

export function useValidation() {
    const validateField = (field) => {
        let error = null;

        if (field.type === login.emailOrUsernameType) {
            error = emailOrUsernameRegex.test(field.value) ? login.emptyValue : login.invalidEmailOrUsername;
        } else if (field.type === login.passwordType) {
            error = passwordRegex.test(field.value) ? login.emptyValue : login.invalidPassword;
        } else if (field.type === register.emailType) {
            error = emailRegex.test(field.value) ? register.emptyValue : register.invalidEmail;
        } else if (field.type === register.usernameType) {
            error = usernameRegex.test(field.value) ? register.emptyValue : register.invalidUsername;
        }

        field.error = error;
        return !error;
    };

    const validatePasswordsMatch = (passwordField, confirmPasswordField) => {
        if (passwordField && confirmPasswordField && passwordField.value !== confirmPasswordField.value) {
          confirmPasswordField.error = register.passwordsDontMatch;
          return false;
        }
        confirmPasswordField.error = register.emptyValue;
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
