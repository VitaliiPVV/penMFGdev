interface UseInputValidation {
  required: (value: string | object) => string | true;
  email: (value: string) => string | true;
  phone: (value: string) => string | true;
  noNumbers: (value: string) => string | true;
}

const useInputValidation = (): UseInputValidation => {
  const required = (value: string | object) => {
    if (
      (value === null || value === undefined) ||
      (typeof value === "object" && Object.keys(value).length === 0) ||
      (typeof value === "string" && !value?.trim())
    ) {
      return "This field is required.";
    }

    return true;
  };

  const email = (value: string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

    if (value && !emailRegex.test(value)) {
      return "Please enter a valid email address.";
    }

    return true;
  };

  const phone = (value: string) => {
    const allowedCharsRegex = /^[\d\s\+\-\(\)]+$/;

    if (value && !allowedCharsRegex.test(value)) {
      return "Please enter a valid phone number (only digits, +, -, (), and spaces are allowed)";
    }

    const digitsOnly = value?.replace(/\D/g, '') || '';
    if (value && digitsOnly.length < 10) {
      return "Please enter a valid phone number (at least 10 digits required)";
    }

    if (value && digitsOnly.length > 15) {
      return "Please enter a valid phone number (maximum 15 digits allowed)";
    }

    return true;
  };

  const noNumbers = (value: string) => {
    const numberRegex = /\d/;

    if (value && numberRegex.test(value)) {
      return "This field should not contain numbers.";
    }

    return true;
  };

  return {
    required,
    email,
    phone,
    noNumbers
  };
};

export default useInputValidation;
