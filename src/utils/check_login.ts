import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const checkLogin = async () => {
  const response = await axios.get(`${BASE_URL}/user/admin`, {
    withCredentials: true,
  });
  if (response.status === 200 && response.data.data) {
    return true;
  }
  return false;
};

export default checkLogin;
