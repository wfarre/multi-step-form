export const checkPhoneNumberIsValid = (input) => {
  const phoneRegex = /^[+]?\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  return phoneRegex.test(input);
};

export const checkNameIsValid = (input) => {
  const nameRegex = /^([a-zA-Z]+( ?[a-zA-Z]+)+)$/;

  return nameRegex.test(input);
};

export const checkEmailIsValid = (input) => {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  return emailRegex.test(input);
};
