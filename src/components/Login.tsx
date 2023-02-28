import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";
import axios from "axios";
import "../login.css";

// const BASE_URL = "http://127.0.0.1:8080";
const BASE_URL = "https://icc-hack.ap-south-1.elasticbeanstalk.com";

const Login = () => {
  const navigate = useNavigate();

  const fetchUser = async () => {
    const response = await axios.get(`${BASE_URL}/user/admin`, {
      withCredentials: true,
    });
    if (
      response.status === 200 &&
      response.data.data &&
      response.data.data["user_type"] === 1
    ) {
      navigate("/products");

      return response.data.data;
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleLogin = async (event: any) => {
    event.preventDefault();
    const email = event.target.name.value;
    const password = event.target.password.value;

    axios.defaults.headers.post["Content-Type"] = "application/json";
    const data = new FormData();
    data.append("username", email);
    data.append("password", password);
    const response = await axios.post(`${BASE_URL}/auth/admin/login`, data, {
      withCredentials: true,
    });
    if (
      response.status === 200 &&
      response.data.data &&
      parseInt(response.data.data["user_type"]) === 1
    ) {
      navigate("/products");
    }
  };

  return (
    <div className="container" id="login-container">
      <div className="card" id="login-card">
        <form action="" onSubmit={handleLogin}>
          <div className="landing-page">
            <img src={logo} alt="" className="logo-main" />
            <p className="heading-main">ICC Admin</p>
          </div>
          <div className="username">
            <label htmlFor="username">Username or Email</label>
            <input type="text" id="name" />
          </div>

          <div className="password">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="button-div">
            <button className="login-button">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
