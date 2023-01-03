export const checkPhoneNumberIsValid = (input: string): boolean => {
  const phoneRegex = /^[+]?\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  return phoneRegex.test(input);
};

export const checkNameIsValid = (input: string): boolean => {
  const nameRegex = /^([a-zA-Z]+( ?[a-zA-Z]+)+)$/;

  return nameRegex.test(input);
};

export const checkEmailIsValid = (input: string): boolean => {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  return emailRegex.test(input);
};
