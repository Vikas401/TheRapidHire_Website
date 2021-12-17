import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Sliders.css";
import slider1 from "../../assets/images/sli3.jpg";
import slider2 from "../../assets/images/sli7.jpg";
import mobileappdevelopment from "../../assets/images/sli6.jpg";

const Sliders = () => {
  const [value, setValue] = useState([]);
  const apiUrl = "https://therapidhiredev.herokuapp.com";
  console.log("Show the api url here===>>", apiUrl);

  useEffect(() => {
    axios.get(`${apiUrl}/banner/`).then((resp) => {
      setValue(resp.data);
    });
    window.scrollTo(0, 0);
  }, []);
  console.log("Show the data here===>>>>>>>>>>>>", value);

  return (
    <div id="slide-main">
      {value &&
        value.slice(8, 9).map((data1, index) => (
          <div className="sliders">
            <div
              id="carouselExampleCaptions"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={data1.image}
                    className="d-block w-100 sliderImg"
                    alt="slider1"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h2>{data1.title}</h2>
                    <p>{data1.description}</p>
                  </div>
                </div>
                {value &&
                  value.slice(9, 10).map((data1, index) => (
                    <div className="carousel-item">
                      <img
                        src={data1.image}
                        className="d-block w-100 sliderImg"
                        alt="slider2"
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <h1>{data1.title}</h1>
                        <p>{data1.description}</p>
                      </div>
                    </div>
                  ))}
                {value &&
                  value.slice(10, 11).map((data1, index) => (
                    <div className="carousel-item">
                      <img
                        src={data1.image}
                        className="d-block w-100 sliderImg"
                        alt="slider3"
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <h1>{data1.title}</h1>
                        <p>{data1.description}</p>
                      </div>
                    </div>
                  ))}
              </div>

              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};
export default Sliders;
