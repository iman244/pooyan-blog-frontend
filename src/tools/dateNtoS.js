const dateNtoS = (date) => {
  const dateS = new Date(date);
  const b = dateS.toString();
  return b.substring(4, 15);
};

export default dateNtoS;
