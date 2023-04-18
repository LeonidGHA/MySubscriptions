// comma separation of the thousandth value
export const separationComma = (amount) => {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
// empty separation of the thousandth value
export const separationEmpty = (amount) => {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};
