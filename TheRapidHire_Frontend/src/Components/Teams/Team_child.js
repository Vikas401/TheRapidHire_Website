import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Team_child.css";
import axios from "axios";

import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
AOS.init();
const Team_child = () => {
  const [data, setData] = useState("");
  const [value, setValue] = useState([]);
  const [value2, setValue2] = useState([]);
  const [value3, setValue3] = useState([]);
  const [value1, setValue1] = useState([]);
  const apiUrl = "https://therapidhiredev.herokuapp.com";
  console.log("Show the api url here===>>", apiUrl);

  useEffect(() => {
    axios.get(`${apiUrl}/banner/`).then((resp) => {
      setValue(resp.data);
    });
    window.scrollTo(0, 0);
  }, []);
  console.log("Show the data here===>", value);

  useEffect(() => {
    axios.get("https://therapidhiredev.herokuapp.com/teams/").then((res) => {
      setData(res.data);
    });
    window.scrollTo(0, 0);
  }, []);
  console.log("second", data);

  useEffect(() => {
    axios
      .get("https://therapidhiredev.herokuapp.com/innovativeTeam")
      .then((res) => {
        setValue2(res.data);
      });
    window.scrollTo(0, 0);
  }, []);
  console.log("show the data==>>>", value2);

  useEffect(() => {
    axios
      .get("https://therapidhiredev.herokuapp.com/testimonial")
      .then((res) => {
        setValue3(res.data);
      });
    window.scrollTo(0, 0);
  }, []);
  console.log("show the data==>>>", value3);
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
    <div id="team_child">
      <Header />
      {value &&
        value.slice(4, 5).map((data1, index) => (
          <div className="service-bg cover-background">
            <div className="container h-100">
              <div className="row h-100 align-items-center">
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
          <section className="home-info-grey">
            <div className="container">
              <div className="row">
                <div className="col-md-7">
                  <h2>{value.title}</h2>
                  <p>{value.description}</p>
                </div>
                <div className="col-md-5 drop-cap-text">
                  <img
                    src={value.image}
                    className="iamge2 img-fluid"
                    data-aos="fade-left"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out-cubic"
                  />
                </div>
              </div>
            </div>
          </section>
        ))}
      {value2 &&
        value2.slice(0, 1).map((data2, index) => (
          <section className="team1">
            <div className="container mt-5 d-flex justify-content-center ">
              <div className="row1">
                <div className="container text-center content">
                  <h2>{data2.title}</h2>
                  <p>{data2.description}</p>
                </div>
              </div>
            </div>
            <div className="container mt-5 mb-5">
              <div className="row">
                {value2 &&
                  value2.slice(3, 7).map((value, index) => (
                    <div className="col-md-4 mb-md-0 mb-3">
                      <div className="card d-flex flex-column align-items-center justify-content-center">
                        <div className="inner-content d-flex flex-column align-items-center justify-content-center">
                          <div className="img-container rounded-circle">
                            <img src={value.image} className="rounded-circle" />
                          </div>
                          <div className="h3">{value.name}</div>
                          <p className="designation text-muted text-uppercase">
                            {value.designation}
                          </p>
                        </div>
                        <ul className="social-links d-flex align-items-center justify-content-around list-unstyled w-100 fs-5 m-0 p-0">
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                        </ul>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="container">
              <div className="row">
                {value2 &&
                  value2.slice(0, 3).map((value, index) => (
                    <div className="col-md-4 mb-md-0 mb-3">
                      <div className="card d-flex flex-column align-items-center justify-content-center">
                        <div className="inner-content d-flex flex-column align-items-center justify-content-center">
                          <div className="img-container rounded-circle">
                            <img src={value.image} className="rounded-circle" />
                          </div>
                          <div className="h3">{value.name}</div>
                          <p className="designation text-muted text-uppercase">
                            {value.designation}
                          </p>
                        </div>
                        <ul className="social-links d-flex align-items-center justify-content-around list-unstyled w-100 fs-5 m-0 p-0">
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                        </ul>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        ))}
      {/* testimonial */}
      {value3 &&
        value3.slice(0, 1).map((data2, index) => (
          <section className="team2">
            <div
              className="container mt-5 d-flex justify-content-center"
              key={index}
            >
              <div className="row2">
                <div className="container text-center content">
                  <h2>{data2.title} </h2>

                  <p>{data2.mainDescription}</p>
                </div>
              </div>
            </div>

            <div class="container pb-5">
              <div
                id="demo"
                class="carousel slide"
                data-ride="carousel"
                key={index}
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    {value3 &&
                      value3.slice(0, 1).map((data3, index) => (
                        <div class="carousel-caption">
                          <p>{data3.body}</p>
                          <img src={data3.image} class="img-fluid" />
                          <div id="image-caption">
                            {data3.name}
                            <br />
                            {data3.designation}
                          </div>
                        </div>
                      ))}
                  </div>
                  {value3 &&
                    value3.slice(1, 2).map((data4, index) => (
                      <div class="carousel-item">
                        <div class="carousel-caption">
                          <p>{data4.body}</p>
                          <img src={data4.image} class="img-fluid" />
                          <div id="image-caption">
                            {data4.name}
                            <br />
                            {data4.designation}
                          </div>
                        </div>
                      </div>
                    ))}
                  {value3 &&
                    value3.slice(2, 3).map((data5, index) => (
                      <div class="carousel-item">
                        <div class="carousel-caption">
                          <p>{data5.body}</p>
                          <img src={data5.image} class="img-fluid" />
                          <div id="image-caption">
                            {data5.name}
                            <br />
                            {data5.designation}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
                <a class="carousel-control-prev" href="#demo" data-slide="prev">
                  {" "}
                  <i class="fas fa-arrow-left"></i>{" "}
                </a>{" "}
                <a class="carousel-control-next" href="#demo" data-slide="next">
                  {" "}
                  <i class="fas fa-arrow-right"></i>
                  {""}
                </a>
              </div>
            </div>
          </section>
        ))}
      {/* /* end testimonial */}
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
export default Team_child;
