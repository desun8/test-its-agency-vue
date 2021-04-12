export default (value, nospace = false) => {
  const currency = "₽";
  let string = `${value}`;

  const arr = string.split(".");
  const space = nospace ? "" : " ";

  if (arr[0].length >= 5) {
    string = `${arr[0].slice(0, -3)} ${arr[0].slice(-3)}${space}${currency}`;

    if (arr[1]) {
      string += `.${arr[1]}`;
    }
  } else {
    string = `${string}${space}${currency}`;
  }

  return string;
};
