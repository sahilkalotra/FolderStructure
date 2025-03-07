import { useState } from 'react';
import { showErrorToast } from '../components/toast';

type ValidationRules = {
  [key: string]: {
    required?: boolean;
    minLength?: number;
    regex?: RegExp;
    customValidation?: (value: string) => boolean;
    message?: string;
    emptyMessage?: string;
    match?: string;  // New field to specify the field this should match (e.g. 'password' for 'confirmPassword')
  };
};

type ValidateProps = {
  values: { [key: string]: string };
  rules: ValidationRules;
  setErrorState: (errors: { [key: string]: boolean }) => void;
};

const Validate = ({ values, rules, setErrorState }: ValidateProps) => {
  const [isTouched, setIsTouched] = useState<{ [key: string]: boolean }>({});

  const validate = () => {
    let valid = true;
    const errors: { [key: string]: boolean } = {};
    const errorMessages: string[] = [];
    let firstErrorMessage: string | null = null;

    // Loop through all fields and validate according to the rules
    Object.keys(values).forEach((field) => {
      const value = values[field];
      const fieldRules = rules[field];

      if (fieldRules) {
        // Check for required field
        if (fieldRules.required && !value.trim()) {
          errors[field] = true;
          valid = false;
          if (!firstErrorMessage) {
            firstErrorMessage = fieldRules?.emptyMessage || "Please fill all the details."; // Only set the first error message
          }
          return;  // Skip further validation if it's empty and required
        }

        // Check for minimum length
        if (fieldRules.minLength && value.length < fieldRules.minLength) {
          errors[field] = true;
          valid = false;
          if (!firstErrorMessage) {
            firstErrorMessage = `${field} must be at least ${fieldRules.minLength} characters long.`;
          }
        }

        // Check for regex validation only if the field value is not empty
        if (value.trim() && fieldRules.regex && !fieldRules.regex.test(value)) {
          errors[field] = true;
          valid = false;
          if (!firstErrorMessage) {
            firstErrorMessage = fieldRules.message || `Please enter a valid ${field}.`;
          }
        }

        // Custom validation function (if provided)
        if (fieldRules.customValidation && !fieldRules.customValidation(value)) {
          errors[field] = true;
          valid = false;
          if (!firstErrorMessage) {
            firstErrorMessage = fieldRules.message || `${field} is invalid.`;
          }
        }

        // Match validation (if `match` is specified)
        if (fieldRules.match && values[field] !== values[fieldRules.match]) {
          errors[field] = true;
          valid = false;
          if (!firstErrorMessage) {
            firstErrorMessage = fieldRules.message || `${field} does not match ${fieldRules.match}.`;
          }
        }
      }
    });

    // Show one toast message for the first encountered error
    if (!valid && firstErrorMessage) {
      showErrorToast({
        title: "Oops! Something went wrong.",
        message: firstErrorMessage,
        duration: 3000, // Increased duration for better user visibility
      });
    }

    // Update the error state after validation
    setErrorState(errors);

    return valid;
  };

  const handleValidation = () => {
    // Set all fields as touched
    setIsTouched(Object.keys(values).reduce((acc, field) => ({ ...acc, [field]: true }), {}));
    return validate();
  };

  return { handleValidation, isTouched };
};

export default Validate;
