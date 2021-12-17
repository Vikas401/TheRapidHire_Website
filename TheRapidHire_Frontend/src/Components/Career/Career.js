import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import "./Career.css";

import Arrow from "../../assets/images/right-arrow.png";
import Location from "../../assets/images/placeholder.png";

const Career = () => {
  const [data, setData] = useState("");
  const [value, setValue] = useState([]);
  const [value1, setValue1] = useState([]);
  const [value2, setValue2] = useState([]);
  const apiUrl = "https://therapidhiredev.herokuapp.com";

  const [isJava, setIsJava] = useState("block");
  const [isMern, setIsMern] = useState("none");
  const [isMean, setIsMean] = useState("none");

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
      .get("https://therapidhiredev.herokuapp.com/CareerOurValue")
      .then((res) => {
        setData(res.data);
      });
    window.scrollTo(0, 0);
  }, []);
  console.log("second", data);
  useEffect(() => {
    axios
      .get("https://therapidhiredev.herokuapp.com/excitedWorkUs")
      .then((resp) => {
        setValue1(resp.data);
      });
    window.scrollTo(0, 0);
  }, []);
  console.log("show data===>>>>", value1);
  useEffect(() => {
    axios
      .get("https://therapidhiredev.herokuapp.com/companyPerk")
      .then((res) => {
        setValue2(res.data);
      });
    window.scrollTo(0, 0);
  }, []);
  console.log("show the companyparks==>>>", value2);

  useEffect(() => {
    if (value1?.profileName == "Java Developer") {
      setIsJava("block");
      setIsMern("none");
      setIsMean("none");
    }
    if (value1?.profileName == "MEAN Stack Developer") {
      setIsJava("none");
      setIsMern("block");
      setIsMean("none");
    }
    if (value1?.profileName == "MERN Stack Developer") {
      setIsJava("none");
      setIsMern("none");
      setIsMean("block");
    }
  }, []);

  const lang = (evt) => {
    // evt.target.id
    if (evt.target.id == "Java Developer") {
      setIsJava("block");
      setIsMern("none");
      setIsMean("none");
    }
    if (evt.target.id == "MEAN Stack Developer") {
      setIsJava("none");
      setIsMern("block");
      setIsMean("none");
    }
    if (evt.target.id == "MERN Stack Developer") {
      setIsJava("none");
      setIsMern("none");
      setIsMean("block");
    }
  };

  useEffect(() => {}, [isJava, isMean, isMern]);

  return (
    <div id='career'>
      <Header />
      {value &&
        value.slice(5, 6).map((data1, index) => (
          <div className='service-bg cover-background'>
            <div className='container h-100'>
              <div className='row h-100 align-items-center' key={index}>
                <div className='col-12 text-center' data-aos='zoom-in'>
                  <h1 className='fw-light'> {data1.title}</h1>
                  <p className='lead'>{data1.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      {data &&
        data.slice(0, 1).map((value, index) => (
          <section className='sec-career'>
            <div className='container' key={index == 2}>
              <div className='career-head'>
                <h1>{value.mainTitle}</h1>
                <p>{value.description}</p>
              </div>

              <div class='row'>
                {data &&
                  data.slice(0, 3).map((data3, index) => (
                    <div
                      class='col-md-4 text-center aos-init aos-animate'
                      data-aos='fade-right'
                      data-aos-delay='100'>
                      <div class='row'>
                        <div class='col-md-12'>
                          <img
                            class='img-fluid'
                            src={data3.image}
                            alt='Career'
                          />
                        </div>
                      </div>
                      <div class='row'>
                        <div class='col-md-12 careerPage'>
                          <h2>{data3.title}</h2>
                          <p>{data3.body}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        ))}
      <section class='mt-4 bg-light py-5'>
        <div class='container'>
          {value2 &&
            value2
              .slice(0, 1)
              .map((value, index) => (
                <h2 class='pt-lg-5 pb-3 text-center sectin-sub-title mb-4'>
                  {value.mainTitle}
                </h2>
              ))}
          <div class='row'>
            {value2 &&
              value2.slice(0, 2).map((value, index) => (
                <div class='col-lg-6 col-6 '>
                  <div
                    class='CompanyPerks-box text-center wow  fadeInLeft  animated'
                    data-wow-delay='.2s'>
                    <p>
                      <i class={value.className}></i>
                    </p>
                    <h3 class='w-100'>{value.title}</h3>
                  </div>
                </div>
              ))}

            {value2 &&
              value2.slice(2, 4).map((value, index) => (
                <div class='col-lg-6 col-6 py-lg-5'>
                  <div
                    class='CompanyPerks-box text-center wow  fadeInLeft  animated'
                    data-wow-delay='.2s'>
                    <p>
                      <i class={value.className}></i>
                    </p>
                    <h3 class='w-100'>{value.title}</h3>
                  </div>
                </div>
              ))}

            {value2 &&
              value2.slice(4, 6).map((value, index) => (
                <div class='col-lg-6 col-6 '>
                  <div
                    class='CompanyPerks-box text-center wow  fadeInLeft  animated'
                    data-wow-delay='.2s'>
                    <p>
                      <i class={value.className}></i>
                    </p>
                    <h3 class='w-100'>{value.title}</h3>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      <section className='sec-career'>
        {value1 &&
          value1.slice(0, 1).map((value, index) => (
            <div className='container'>
              <div className='career-head'>
                <h1>{value.title}</h1>
                <p>{value.description}</p>
                <div className='row pt-4'>
                  <div className='col-md-4'>
                    <Link
                      to={{
                        pathname: "/apply",
                        state: {
                          profileType: 1,
                        },
                      }}>
                      {" "}
                      <div className='hire'>
                        <div class='vacancy-box'>
                          <h4>{value.profileName}</h4>

                          <p>{value.experience}</p>
                          <p class='location'>
                            <img
                              class='location-img'
                              src={Location}
                              alt='location'
                            />
                            <img
                              class='location-hover'
                              src={Location}
                              alt='location'
                            />
                            {value.location}
                          </p>
                          <img
                            class='forward-arrow'
                            src={Arrow}
                            alt=''
                            data-backdrop='false'
                          />
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className='col-md-4' data-bs-toggle='modal'>
                    {value1 &&
                      value1.slice(1, 2).map((value, index) => (
                        <Link
                          to={{
                            pathname: "/apply",
                            state: {
                              profileType: 2,
                            },
                          }}>
                          <div className='hire'>
                            <div class='vacancy-box'>
                              <h4>{value.profileName}</h4>
                             
                              <p>{value.experience}</p>
                              <p class='location'>
                                <img
                                  class='location-img'
                                  src={Location}
                                  alt='location'
                                />
                                <img
                                  class='location-hover'
                                  src={Location}
                                  alt='location'
                                />
                                {value.location}
                              </p>
                              <img
                                class='forward-arrow'
                                src={Arrow}
                                alt=''
                                data-backdrop='false'
                              />
                            </div>
                          </div>
                        </Link>
                      ))}
                  </div>
                  <div className='col-md-4' data-bs-toggle='modal'>
                    {value1 &&
                      value1.slice(2, 3).map((value, index) => (
                        <Link
                          to={{
                            pathname: "/apply",
                            state: {
                              profileType: 3,
                            },
                          }}
                          id={value.id}>
                          <div className='hire'>
                            <div class='vacancy-box'>
                              <h4>{value.profileName}</h4>

                              <p>{value.experience}</p>
                              <p class='location'>
                                <img
                                  class='location-img'
                                  src={Location}
                                  alt='location'
                                />
                                <img
                                  class='location-hover'
                                  src={Location}
                                  alt='location'
                                />
                                {value.location}
                              </p>
                              <img
                                class='forward-arrow'
                                src={Arrow}
                                alt=''
                                data-backdrop='false'
                              />
                            </div>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </section>

      <Footer />
    </div>
  );
};
export default Career;
