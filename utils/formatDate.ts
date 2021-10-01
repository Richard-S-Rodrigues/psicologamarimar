const formatDate = (dateValue: string) => {
  const date = new Date(dateValue);

  const day = date.getDate().toString();
  const formattedDay = day.length == 1 ? "0" + day : day;
  const month = (date.getMonth() + 1).toString();
  const formattedMonth = month.length == 1 ? "0" + month : month;
  const year = date.getFullYear();

  return formattedDay + "/" + formattedMonth + "/" + year;
};

export default formatDate;
