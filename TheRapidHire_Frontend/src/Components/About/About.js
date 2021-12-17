import React, { useState, useEffect } from "react";
import ReactReadMoreReadLess from "react-read-more-read-less";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

import axios from "axios";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const About = () => {
  const [data, setData] = useState("");
  const [value, setValue] = useState([]);
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
    axios.get("https://therapidhiredev.herokuapp.com/about/").then((res) => {
      setData(res.data);
    });
    window.scrollTo(0, 0);
  }, []);
  console.log("second", data);
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
    <div id="about">
      <Header />
      {value &&
        value.slice(1, 2).map((data1, index) => (
          <div className="service-bg cover-background">
            <div className="container h-100">
              <div
                className="row h-100 align-items-center"
                data-aos="zoom-in"
                key={index}
              >
                <div className="col-12 text-center">
                  <h1 className="fw-light">{data1.title}</h1>
                  <p className="lead">{data1.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      {data &&
        data.slice(0, 1).map((value, index) => (
          <section className="about-sec">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="who-we">
                    <h1>{value.title}</h1>
                    <p>{value.description}</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <img
                    src={value.image}
                    data-aos={"fade-left"}
                    className="img-fluid who-img"
                  />
                </div>
              </div>
            </div>
          </section>
        ))}
      {data &&
        data.slice(1, 2).map((data1, index) => (
          <section className="about-sec about-bg">
            <div className="container" key={index == 2}>
              <div className="why-choose">
                <h1>{data1.mainTitle}</h1>
              </div>
              <div className="row pt-5">
                {data &&
                  data.slice(1, 5).map((value, index) => (
                    <div className="col-md-3 choose_us">
                      <div className="img_circle">
                        <img src={value.image} className="img-fluid" alt="" />
                      </div>
                      <h3>{value.title}</h3>
                      <p>{value.description}</p>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        ))}
      {data &&
        data.slice(5, 6).map((data2, index) => (
          <section className="about-sec">
            <div className="container">
              <div className="row">
                {data &&
                  data.slice(5, 8).map((value, index) => (
                    <div className="col-md-4">
                      <div className="vision-mission-content">
                        <img
                          src={value.image}
                          alt="Vision"
                          className="img-fluid"
                        />
                        <h3>{value.title}</h3>
                        <p>
                          <ReactReadMoreReadLess
                            charLimit={70}
                            readMoreText={"Read more "}
                            readLessText={"Read less "}
                            readMoreClassName="read-more-less--more"
                            readLessClassName="read-more-less--less"
                          >
                            {value.description}
                          </ReactReadMoreReadLess>
                        </p>
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
                <h1>{data1.title}</h1>
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
export default About;
