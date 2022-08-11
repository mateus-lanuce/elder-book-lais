const formatNumber = (Number: number | string): string => {
  return new Intl.NumberFormat().format(Number);
};

export default formatNumber;
