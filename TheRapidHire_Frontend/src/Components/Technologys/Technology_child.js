import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Technology_child.css";
import Ricon from "../../assets/images/illustration.png";
import webdesign from "../../assets/images/techno.jpg";
import Ricon2 from "../../assets/images/jquery.png";
import Ricon3 from "../../assets/images/vue.png";
import Ricon4 from "../../assets/images/bootstrap.png";
import Ricon5 from "../../assets/images/ember.png";

import iot1 from "../../assets/images/azure.png";
import iot2 from "../../assets/images/cloud-tech.png";
import iot3 from "../../assets/images/vue.png";
import iot4 from "../../assets/images/firebase.png";
import iot5 from "../../assets/images/google_cloud.png";
import iot6 from "../../assets/images/k.png";
import iot7 from "../../assets/images/k1.png";
import technology2 from "../../assets/images/k3.png";
import technology3 from "../../assets/images/k5.png";
import technology4 from "../../assets/images/k7.png";
import technology5 from "../../assets/images/mern.png";
import technology6 from "../../assets/images/no-sql.png";
import technology7 from "../../assets/images/oracle-sql.png";
import axios from "axios";

import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
AOS.init();

const Technology_child = () => {
  const [data, setData] = useState("");
  const [value, setValue] = useState([]);
  const [content, setContent] = useState([]);
  const [value1, setValue1] = useState([]);

  const apiUrl = "https://therapidhiredev.herokuapp.com";
  console.log("Show the api url here===>>", apiUrl);

  useEffect(() => {
    axios.get(`${apiUrl}/banner/`).then((resp) => {
      setValue(resp.data);
    });
    window.scrollTo(0, 0);
  }, []);

  console.log("Show the data here===>>>>>>>>>>>>", value);

  useEffect(() => {
    axios
      .get("https://therapidhiredev.herokuapp.com/ourTechnology")
      .then((res) => {
        setData(res.data);
      });
    window.scrollTo(0, 0);
  }, []);
  console.log("second", data);

  useEffect(() => {
    axios
      .get("https://therapidhiredev.herokuapp.com/tecnologyExpertise")
      .then((res) => {
        setContent(res.data);
      });
    window.scrollTo(0, 0);
  }, []);
  console.log("Show the data", content);
  useEffect(() => {
    axios
      .get("https://therapidhiredev.herokuapp.com/footerBanner")
      .then((res) => {
        setValue1(res.data);
      });
    window.scrollTo(0, 0);
  }, []);
  console.log("show the data", value1);
  return (
    <div id="technology_child">
      <Header />
      {value &&
        value.slice(3, 4).map((data1, index) => (
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
      {data &&
        data.slice(0, 1).map((value, index) => (
          <section className="home-info-grey pb-3">
            <div className="container">
              <div className="row ">
                <div className="col-md-7">
                  <div className="our-tech">
                    <h2>{value.title}</h2>
                    <p>{value.body}</p>
                  </div>
                </div>
                <div className="col-md-5 drop-cap-text">
                  <img
                    src={value.image}
                    className="iamge2 img-fluid"
                    data-aos="fade-left"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out-cubic"
                  />
                </div>
              </div>
            </div>
          </section>
        ))}
      {content &&
        content.slice(0, 1).map((content, index) => (
          <section className="icon3">
            <div className="container rounded">
              <div className="h1 fw-bold text-center mt-2">
                {content.title}{" "}
              </div>

              <div className="fs-5 text-center pb-3 mb-3">{content.body}</div>
              <div className="rollers position-relative overflow-hidden">
                <div className="start-roller"></div>
                <div className="wrapper">
                  <div className="items-container roll-LL">
                    <div className="item">
                      <img
                        src={content.image}
                        className="image1"
                        width="100px"
                        height="80px"
                      />
                    </div>
                   
                  </div>
                  <div className="items-container roll-RL">
                    <div className="item">
                      <img
                        src={iot1}
                        className="image1"
                        width="100px"
                        height="80px"
                      />
                    </div>
                    <div className="item">
                      <img
                        src={iot2}
                        className="image1"
                        width="100px"
                        height="80px"
                      />
                    </div>
                    <div className="item">
                      <img src={iot3} className="image1" />
                    </div>
                    <div className="item">
                      <img
                        src={iot4}
                        className="image1"
                        width="100px"
                        height="80px"
                      />
                    </div>
                    <div className="item">
                      <img
                        src={iot5}
                        className="image1"
                        width="150px"
                        height="80px"
                      />
                    </div>
                    <div className="item">
                      <img
                        src={iot6}
                        className="image1"
                        width="100px"
                        height="80px"
                      />
                    </div>
                  </div>
                </div>
                <div className="wrapper">
                  <div className="items-container reverse-roll-LL">
                    <div className="item">
                      <img
                        src={iot7}
                        className="image1"
                        width="100px"
                        height="80px"
                      />
                    </div>
                    <div className="item">
                      <img
                        src={Ricon2}
                        className="image1"
                        width="100px"
                        height="80px"
                      />
                    </div>
                    <div className="item">
                      <img
                        src={Ricon3}
                        className="image1"
                        width="100px"
                        height="80px"
                      />
                    </div>
                    <div className="item">
                      <img
                        src={Ricon4}
                        className="image1"
                        width="100px"
                        height="80px"
                      />
                    </div>
                    <div className="item">
                      <img
                        src={Ricon5}
                        className="image1"
                        width="100px"
                        height="80px"
                      />
                    </div>
                  </div>
                  <div className="items-container reverse-roll-RL">
                    <div className="item">
                      <img
                        src={technology2}
                        className="image1"
                        width="100px"
                        height="80px"
                      />
                    </div>
                    <div className="item">
                      <img
                        src={technology3}
                        className="image1"
                        width="100px"
                        height="80px"
                      />
                    </div>
                    <div className="item">
                      <img
                        src={technology4}
                        className="image1"
                        width="100px"
                        height="80px"
                      />
                    </div>
                    <div className="item">
                      <img
                        src={technology5}
                        className="image1"
                        width="130px"
                        height="80px"
                      />
                    </div>
                    <div className="item">
                      <img
                        src={technology6}
                        className="image1"
                        width="100px"
                        height="80px"
                      />
                    </div>
                    <div className="item">
                      <img
                        src={technology7}
                        className="image1"
                        width="100px"
                        height="80px"
                      />
                    </div>
                  </div>
                </div>
               
              </div>
            </div>
          </section>
        ))}

      {data &&
        data.slice(0, 1).map((data2, index) => (
          <section className="technlogy2 pb-5">
            <div className="container">
              <div className="row">
                {data &&
                  data.slice(1, 3).map((value, index) => (
                    <div className="col-md-4 Services-tab item">
                      <div className="folded-corner service_tab_1">
                        <div className="text">
                          <img
                            src={value.image}
                            className="image1"
                            width="60px"
                            height="80px"
                          />
                          <p className="item-title">
                            <h3> {value.title}</h3>
                          </p>
                          <p>{value.body}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                {data &&
                  data.slice(3, 7).map((value, index) => (
                    <div className="col-md-4 Services-tab item">
                      <div className="folded-corner service_tab_1">
                        <div className="text">
                          <img
                            src={value.image}
                            className="image1"
                            width="120px"
                            height="80px"
                          />
                          <p className="item-title">
                            <h3> {value.title}</h3>
                          </p>
                          <p>{value.body}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        ))}
      <section className="contact-bg">
      {value1 &&
        value1.map((data1, index) => (
        <div className="container">
          <div className="contact-description">
            <h1>
              {data1.title}
            </h1>
            <button type="button">
              <Link to="contact_child">Contact Us</Link>
            </button>
          </div>
        </div>
        ))}
      </section>

      <Footer />
    </div>
  );
};

export default Technology_child;
