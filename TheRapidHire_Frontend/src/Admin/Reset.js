import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Reset() {
  const [value, setValue] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [conformPassword, setconformPassword] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("data", value);
    const username = JSON.parse(localStorage.getItem("user-info"));
    if (username !== null) {
      if (localStorage.getItem("user-info")) {
        setEmail(username.email);
      }
    }
  }, []);

  const forgotPassword = () => {
    axios({
      method: "put",
      url: "https://therapidhiredev.herokuapp.com/api/auth/updatePassword",
      data: {
        email: email,
        password: password,
        conformPassword: conformPassword,
      },
    }).then((res) => {});
  };

  return (
    <div id='reset'>
      <div class='container pt-5'>
        <div class='row'>
          <div class='col-md-4 col-md-offset-4'></div>
          <div class='col-md-4 col-md-offset-4 pb-5'>
            <div class='panel panel-default'>
              <div class='panel-body'>
                <div class='text-center'>
                  <h2 class='text-center pb-3'>Change Password</h2>
                  <div class='panel-body'>
                    <form>
                      <div class='form-group'>
                        <div class='input-group'>
                          <input
                            name='email'
                            placeholder='email'
                            class='form-control'
                            defaultValue={email}
                            type='email'
                            readOnly
                          />
                        </div>
                      </div>
                      <div class='form-group'>
                        <div class='input-group'>
                          <input
                            name='password'
                            placeholder='Password'
                            class='form-control'
                            onChange={(e) => setPassword(e.target.value)}
                            type='password'
                          />
                        </div>
                      </div>
                      <div class='form-group'>
                        <div class='input-group'>
                          <input
                            name='confirmpassword'
                            placeholder='Confim Password'
                            class='form-control'
                            type='password'
                            onChange={(e) => setconformPassword(e.target.value)}
                          />
                        </div>
                      </div>
                      <div class='form-group'>
                        <button
                          name='submit'
                          onClick={forgotPassword}
                          class='btn btn-lg btn-primary btn-block'
                          type='button'>
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
