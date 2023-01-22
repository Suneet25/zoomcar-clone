let getLocalData = (key) => {
  let data = localStorage.getItem(key);
  return data;
};

let setLocalData = (key, value) => {
  if (key && value) {
    localStorage.setItem(key, value);
  }
};
export { getLocalData, setLocalData };
