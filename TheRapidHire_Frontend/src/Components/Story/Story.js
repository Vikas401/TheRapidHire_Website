import React, { useState, useEffect } from "react";
import ReactReadMoreReadLess from "react-read-more-read-less";
import axios from "axios";
import "./Story.css";

const Story = () => {
  const [data, setData] = useState("");
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  useEffect(() => {
    axios.get("https://therapidhiredev.herokuapp.com/Home").then((res) => {
      setData(res.data);
    });
    window.scrollTo(0, 0);
  }, []);
  console.log("first show the data=======>>>>>", data);
  useEffect(() => {
    axios
      .get("https://therapidhiredev.herokuapp.com/serviceChild")
      .then((res) => {
        setValue(res.data);
      });
    window.scrollTo(0, 0);
  }, []);
  console.log("second show the data==========>>>>>>>", value);

  useEffect(() => {
    axios
      .get("https://therapidhiredev.herokuapp.com/technologyChild")
      .then((res) => {
        setValue2(res.data);
      });
    window.scrollTo(0, 0);
  }, []);
  console.log("second show the data==========>>>>>>>", value2);

  // our service//

  //end service//
  //start technoloy//

  //end technology//
  return (
    <div className="story">
      <div className="container-fluid">
        {data &&
          data.slice(0, 1).map((value, index) => (
            <div className="content">
              <h2>{value.title}</h2>

              <p className="content_title">{value.description}</p>
            </div>
          ))}
        {value &&
          value.slice(0, 1).map((data, index) => (
            <div className="tabular">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="profile-tab"
                    data-toggle="tab"
                    href="#profile"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Technology
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="container">
                    <div className="row">
                      {value &&
                        value.slice(0, 8).map((value, index) => (
                          <div
                            className="col-lg-3 col-md-6 col-sm-6"
                            style={{ marginTop: "1rem" }}
                            style={{ marginTop: "1rem" }}
                          >
                            <div className="serviceBox">
                              <div className="service-icon">
                                <img src={value.image} />
                              </div>
                              <div className="service-content">
                                <h3 className="title">{value.title}</h3>
                                <div className="dummy">
                                  <p className="description">
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
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="container">
                    <div className="row">
                      {value2 &&
                        value2.slice(0, 11).map((value, index) => (
                          <div
                            className="col-lg-3 col-md-6 col-sm-6"
                            style={{ marginTop: "1rem" }}
                          >
                            <div className="serviceBox">
                              <div className="service-icon">
                                <img src={value.image} />
                              </div>
                              <div className="service-content">
                                <h3 className="title">{value.title}</h3>
                                <p className="description">
                                  <ReactReadMoreReadLess
                                    charLimit={50}
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
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Story;
