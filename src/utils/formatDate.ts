export const formatDate = (date: string | undefined) => {
  console.log(date);

  const format = date?.split("/");

  if (format) {
    const formatDate = [];

    //take the split values and add 0 when necessary
    for (const numberDate of format) {

      if (numberDate.length === 1) 
        formatDate.push(`0${numberDate}`);
      else
        formatDate.push(numberDate);
    }

    return formatDate.join('/')
  } else {
    return '';
  }
};
