const formatNumber = (Number: number | any): string => {
  return new Intl.NumberFormat().format(Number);
};

export default formatNumber;
