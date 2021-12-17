import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import "./Login.css";
const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [message, setMessage] = useState(null);
  const [data, setData] = useState({});
  const API = "https://therapidhiredev.herokuapp.com";
  const [error, setError] = useState(null);
  const [emailError] = useState(null);
  const [passwordError] = useState(null);

  const LogInHandle = async (event) => {
    event.preventDefault();
    if (!email.toString().trim().length) return console.log("enter email");
    if (!password) return console.log("enter password");

    let loginApi = await axios
      .post(`${API}/api/auth/login`, { email, password })
      .then(({ data }) => {
        setMessage(data.message);
        setData(data.data);
        setError(false);
        let pathAdmin = `/admin/dashboard`;
        let pathHR = `/hr`;
        let pathSales = `/sales`;
        if (data.roleName == "hr") {
          history.push(pathHR);
        } else if (data.roleName == "sales") {
          history.push(pathSales);
        } else if (data.roleName == "admin") {
          history.push(pathAdmin);
        } else {
        }
        localStorage.setItem('myData',data.roleName);
        window.location.reload()
      })
      .catch(function (error) {
        setError(true);
        console.log("invalid username or password");
        return Promise.reject(error);
      });
  };

  return (
    <div id="login">
      <div class="card">
        <form>
          <h2 class="title"> Log in</h2>
          <div class="email-login">
            <label for="email">
              <b>Email</b>
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Enter Email"
              name="uname"
              required
            />
            <label for="psw">
              <b>Password</b>
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            />
          </div>
          <button onClick={LogInHandle} class="cta-btn">
            Log In
          </button>
          <Link class="forget-pass" to="/forgot">
            Forgot password?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
