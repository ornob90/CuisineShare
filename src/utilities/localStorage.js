export const getDataLS = () => {
  const data = localStorage.getItem("data");

  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

export const addDataInLS = (newData) => {
  const data = getDonationsFromLS();

  data.push(newData);
  localStorage.setItem("data", JSON.stringify(data));
};

export const deleteDataFromLS = (email) => {
  const data = getDonationsFromLS();
  const newData = data.filter((item) => item.email !== email);
  localStorage.setItem("data", JSON.stringify(newData));
  return newData;
};
