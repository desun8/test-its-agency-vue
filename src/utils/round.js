export default (number) => {
  const fixed = number.toFixed(2);
  const floor = Math.floor(number);

  if (+fixed === floor) {
    return floor;
  }

  return fixed;
};
