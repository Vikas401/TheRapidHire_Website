import React, {useState} from "react";
import "./Contact.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import addressMap from "../../assets/images/map.PNG";
import India from "../../assets/images/India-icon.png";
import Usa from "../../assets/images/us-icon.png";
import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    else if (name === "email") setEmail(value);
    else setMessage(value);
  };
  const data = { name, email, message };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const API = "https://therapidhiredev.herokuapp.com";
    const res = await axios.post(`${API}/contactus/`, data).then((res) =>
      res.data === "Email sent successfully"
        ? toast.success("Email sent successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        : null
    );
  };
    // const whiteText = {
    //   color: "white",
    // };

  // function sendEmail(e) {
  //   e.preventDefault();
  //   emailjs
  //     .sendForm(
  //       "service_nla3o8q",
  //       "template_k2gyn8q",
  //       e.target,
  //       "user_rbaFUyv8MppoyJZo9AxOz"
  //     )
  //     .then(
  //       (result) => {
  //         console.log("Email successfully sent!", result.text);
  //       },
  //       (error) => {
  //         console.log("Email not sent!", error);
  //       }
  //     );
  //   e.target.reset();
  // }
  return (
    <div id="contact">
       <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="container">
        <div class="nio-eig-contact-content position-relative">
          <div class="row">
            <div
              class="col-lg-6 wow fadeInLeft animated"
              data-wow-delay="00ms"
              data-wow-duration="1000ms"
            >
              <div class="nio-eig-contact-form-wrap headline">
                <h3>Contact Us Today and Get a Free Consultation!</h3>
                <div class="nio-eig-contact-area">
                  <form  name="sentMessage"
            action="mailto:sales@therapidhire.com"
            validate
            onSubmit={handleSubmit}>
                    <div class="nio-eig-contact-input d-flex">
                      <input type="text" name="name" placeholder="Your name*"  required
                          value={name || ""}
                          onChange={handleChange} />
                      <input type="text" name="email" placeholder="Email" required
                          value={email || ""}
                          onChange={handleChange} />
                    </div>
                    <textarea name="mesage" placeholder="message" required
                          onChange={handleChange} ></textarea>
                    <div className="submitbutton">
                      <button type="submit" class="btn btn-primary">
                        Get a Quote <i class="fas fa-arrow-right"></i>
                      </button>
                    </div>
                  </form>
                  <div class="contact-bottom-cta"></div>
                </div>
              </div>
            </div>
            <div
              class="col-lg-6 wow fadeInUp animated"
              data-wow-delay="300ms"
              data-wow-duration="1000ms"
            >
              <div class="nio-eig-contact-img position-relative">
                <div class="nio-eig-contact-img-wrap">
                  <img src={addressMap} class="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
