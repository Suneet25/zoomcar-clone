import axios from "axios";
export const fetchData = () => {
    return axios.get(`https://backend-by-nitin.onrender.com/api/cars`);
  };