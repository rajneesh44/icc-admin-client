import { useEffect } from "react";
import "../login.css";
const Login = () => {
  //   const fetchUser = () => {
  //     const respons = await
  //   };
  //   useEffect(() => {
  //     fetchUser();
  //   }, []);

  return (
    <div className="container" id="login-container">
      <div className="card">
        <form action="">
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
