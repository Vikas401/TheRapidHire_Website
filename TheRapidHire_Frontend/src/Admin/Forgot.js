import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";

const Forgot = () => {
  const [value, setValue] = useState([]);
  const [email, setEmail] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("data", value);
  }, []);

  const forgotPassword = () => {
    axios({
      method: "post",
      url: "https://therapidhiredev.herokuapp.com/api/auth/forgetPassword",
      data: {
        email: value,
      },
    }).then((res) => {});
    toast("email as been sent successfully");
  };

  return (
    <div id='forgot'>
      <div class='container pt-5'>
        <div class='row'>
          <div class='col-md-4 col-md-offset-4'></div>
          <div class='col-md-4 col-md-offset-4 pb-5'>
            <div class='panel panel-default'>
              <div class='panel-body'>
                <div class='text-center'>
                  <h3>
                    <i class='fa fa-lock fa-4x'></i>
                  </h3>
                  <h2 class='text-center'>Forgot Password?</h2>
                  <p>You can reset your password here.</p>
                  <div class='panel-body'>
                    <form>
                      <div class='form-group'>
                        <div class='input-group'>
                          <span class='input-group-addon'>
                            <i class='glyphicon glyphicon-envelope color-blue'></i>
                          </span>
                          <input
                            id='email'
                            name='email'
                            onChange={(e) => setValue(e.target.value)}
                            placeholder='email address'
                            class='form-control'
                            type='email'
                          />
                        </div>
                      </div>
                      <div class='form-group'>
                        {/* <Link to='/reset'> */}
                        <button
                          name='recover-submit'
                          class='btn btn-lg btn-primary btn-block'
                          type='button'
                          onClick={forgotPassword}
                          value='Reset Password'>
                          Submit
                        </button>
                        <ToastContainer />
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
};

export default Forgot;
