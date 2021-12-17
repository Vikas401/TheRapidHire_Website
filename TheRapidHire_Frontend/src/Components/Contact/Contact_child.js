import { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import "./Contact_child.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact_child = () => {
  const [value, setValue] = useState([]);
  const apiUrl = "https://therapidhiredev.herokuapp.com";
  console.log("Show the api url here===>>", apiUrl);
  const [name, setName] = useState(null==0);
  const [email, setEmail] = useState(null==0);
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
  const whiteText = {
    color: "white",
  };

  useEffect(() => {
    axios.get(`${apiUrl}/banner/`).then((resp) => {
      setValue(resp.data);
    });
    window.scrollTo(0, 0);
  }, []);
  console.log("Show the data here===>>>>>>>>>>>>", value);

  return (
    <div id="contact_child">
      <Header />
      {value &&
        value.slice(6, 7).map((data1, index) => (
          <div className="service-bg cover-background">
            <div className="container h-100">
              <div className="row h-100 align-items-center" key={index}>
                <div className="col-12 text-center" data-aos="zoom-in">
                  <h1 className="fw-light">{data1.title}</h1>
                  <p className="lead">{data1.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
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
      <section class="iq-contact-us pb-0">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="section-title mb-4">
                <h2 class="title iq-fw-8">Contact Form</h2>
              </div>
            </div>
          </div>
          <form
            name="sentMessage"
            action="mailto:sales@therapidhire.com"
            validate
            onSubmit={handleSubmit}
          >
            <div class="row">
              <div class="col-lg-12">
                <div class="project-form mb-3">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          placeholder="Name"
                          required
                          value={name || ""}

                          onChange={handleChange}
                        />
                      </div>

                      <div class="form-group">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          placeholder="Email"
                          required
                          value={email || ""}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="submit-button">
                        <button type="submit">Submit</button>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <textarea
                          class="form-control contact-message"
                          name="mesage"
                          placeholder="Type Your Requirement"
                          required
                          onChange={handleChange}
                        ></textarea>
                      </div>
                    </div>
                    <div class="col-lg-12"></div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      <section class="iq-contact-us pb-0">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 ">
              <div class="row">
                <div class="col-lg-6">
                  <h2 class="title iq-fw-8">Get in Touch</h2>
                  <div class="iq-address mt-3">
                    <div class="media ">
                      <div class="mr-3 contact-icon float-left">
                        <i class="fa fa-map-marker" aria-hidden="true"></i>{" "}
                        <span>
                          1309 Coffeen Avenue STE 1200, Sheridan, Wyoming 82801
                          USA
                        </span>
                      </div>
                    </div>
                    <div class="media pt-3">
                      <div class="mr-3 contact-icon float-left">
                        <i class="fa fa-map-marker" aria-hidden="true"></i>{" "}
                        <span>
                          {" "}
                          ED-3 Scheme no. 97 Ring Road, Near Robot Square,Indore
                          MP (452016)
                        </span>
                      </div>
                    </div>
                    <div class="media pt-3">
                      <div class="mr-3 contact-icon float-left">
                        <i class="fas fa-envelope "></i>{" "}
                        <span>sales@therapidhire.com</span>
                      </div>
                    </div>

                    <div class="media pt-3">
                      <div class="mr-3 contact-icon float-left">
                        <i class="fa fa-phone"></i>{" "}
                        <span>+1 (917) 628 2406</span>
                      </div>
                    </div>
                    <div class="footer-social-icn pt-3">
                      <li>
                        <a
                          href="https://www.facebook.com/The-Rapid-Hire-Pvt-Ltd-103302021496799/?modal=admin_todo_tour"
                          target="_blank"
                          rel="nofollow"
                        >
                          <i class="fab fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="" target="_blank" rel="nofollow">
                          <i class="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/company/therapidhire/"
                          target="_blank"
                          rel="nofollow"
                        >
                          <i class="fab fa-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="" target="_blank" rel="nofollow">
                          <i class="fab fa-instagram"></i>
                        </a>
                      </li>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <iframe
                    class="w-100 contact-ifream"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.834995446162!2d-106.94314568446521!3d44.78416917909886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5335f009b7255555%3A0xef97aa92cd680505!2s1309%20Coffeen%20Ave%20STE%201200%2C%20Sheridan%2C%20WY%2082801%2C%20USA!5e0!3m2!1sen!2sin!4v1632286156579!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    allowfullscreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact_child;
