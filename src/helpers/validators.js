export const isNumber = (val) => !isNaN(val) && val > 0;

export const isRange = (val) => val >= 1 & val <= 180000;

export const isEmpty = (val) => val !== undefined && val !== null && val.trim().length !== 0;

export const isNotZero = (val) => val > 0;

export const isZero = (val) => val === 0;

export const isObject = (val) => Object.prototype.toString.call(val) === "[object Object]";

export const isBoolean = (val) => 'boolean' === typeof val;

export const isValidEmail = (val) =>
  new RegExp(
    "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
  ).test(val);

// Format dd/mm/yyyy | dd-mm-yyyy
export const isValidDate = (val) =>
  new RegExp(
    "^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$"
  ).test(val);

export const isValidDomain = (val) => {
  let domain = val.split('@');
  return domain[1] === "correo.policia.gov.co" || domain[1] === "policia.gov.co" ? true : false;
}

export const isEqualPassword = (password, conPassword) => (isEmpty(password) && isEmpty(conPassword) && password === conPassword) ? true : false

export const minLength = (val, min) => val.length >= min ? true : false;

export const slugify = (text) => {
  return text
    .toString() // Cast to string
    .toLowerCase() // Convert the string to lowercase letters
    .normalize("NFD") // The normalize() method returns the Unicode Normalization Form of a given string.
    .trim() // Remove whitespace from both sides of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
};

export const replaceSpaces = (text) => {
  return text
    .toString() // Cast to string
    .toLowerCase() // Convert the string to lowercase letters
    .normalize("NFD") // The normalize() method returns the Unicode Normalization Form of a given string.
    .trim() // Remove whitespace from both sides of a string
    .replace(/\s+/g, "%") // Replace spaces with %
}

export const imcCal = (weight, height) => {
  // Fórmula: peso(kg) / [estatura(m)]2
  const imc = (weight / ((height / 100) ** 2)).toFixed(2);
  switch (true) {
    case imc < 18.5:
      return (
        {
          imc: imc,
          text: "Bajo Peso",
          class: "text-gray-500"
        }
      )
    case imc >= 18.5 && imc <= 24.9:
      return ({
        imc: imc,
        text: "Normal",
        class: "text-green-500"
      })
    case imc >= 25 && imc <= 29.9:
      return ({
        imc: imc,
        text: "Sobrepeso",
        class: "text-yellow-500"
      })
    case imc >= 30 && imc <= 34.9:
      return (
        {
          imc: imc,
          text: "Obesidad I",
          class: "text-red-500"
        })
    case imc >= 35 && imc <= 39.9:
      return (
        {
          imc: imc,
          text: "Obesidad II",
          class: "text-red-600"
        })
    case imc >= 40 && imc <= 49.9:
      return ({
        imc: imc,
        text: "Obesidad III",
        class: "text-red-700"
      })
    case imc >= 50:
      return ({
        imc: imc,
        text: "Obesidad IV",
        class: "text-red-800"
      })
    default:
      return false;
  }
}

export const obesityCal = (sex, abdomen) => {
  const message = {
    text: "Obesidad abdominal",
    class: "text-red-800 font-semibold"
  };
  switch (true) {
    case sex === 'F' && abdomen > 80:
      return (message)
    case sex === 'M' && abdomen > 90:
      return (message)
    default:
      return false;
  }
}