import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./services.css";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
AOS.init();

const Services = () => {
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
    axios.get("https://therapidhiredev.herokuapp.com/service").then((res) => {
      setData(res.data);
    });
    window.scrollTo(0, 0);
  }, []);
  console.log("second", data);
  useEffect(() => {
    axios.get("https://therapidhiredev.herokuapp.com/footerBanner").then((res) => {
      setValue1(res.data);
    });
    window.scrollTo(0, 0);
  }, []);
  console.log("show the data", value1);

  return (
    <div id="services">
      <Header />
      {value &&
        value.slice(0, 1).map((data1, index) => (
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
        data.map((data, index) =>
          index % 2 == 0 ? (
            <div className="container sec-service">
              <div className="row">
                <div className="col-md-6">
                  <img
                    data-aos={"fade-right"}
                    className="img-fluid web-img"
                    src={data.image}
                  />
                </div>
                <div className="col-md-6">
                  <div className="web-head">
                    <h3>{data.title}</h3>
                    <p>{data.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <section className="web-bg">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="web-head">
                      <h3>{data.title}</h3>
                      <p> {data.description}</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <img
                      data-aos={"fade-left"}
                      className="img-fluid web-img"
                      src={data.image}
                    />
                  </div>
                </div>
              </div>
            </section>
          )
        )}
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
export default Services;
