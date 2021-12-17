import React, { useEffect, useState } from "react";
import "./LifeCycle.css";
import axios from "axios";
import planning from "../../assets/images/planning.svg";
import development_lifecycle from "../../assets/images/sdlc_image.gif";
const LifeCycle = () => {
  const [data, setData] = useState("");
  const [value, setValue] = useState([]);

  useEffect(() => {
    axios.get("https://therapidhiredev.herokuapp.com/lifeCycle").then((res) => {
      setData(res.data);
    });
    window.scrollTo(0, 0);
  }, []);
  console.log("first", data);
  return (
    <div id="lifecycle">
      {data &&
        data.slice(0, 1).map((data1, index) => (
          <div className="container-fluid main_contain">
            <h2>{data1.mainTitle}</h2>
            <p>{data1.description}</p>
            <div className="toggeler">
              <div className="row">
                <div className="col-lg-6 col-sm-12 acc_col">
                  
                  <div
                    className="panel-group"
                    id="accordion"
                    role="tablist"
                    aria-multiselectable="true"
                  >
                    {data &&
                      data.slice(0, 1).map((data2, index) => (
                        <div className="panel panel-default">
                          <div
                            className="panel-heading"
                            role="tab"
                            id="headingOne"
                          >
                            <h4 className="panel-title">
                              <a
                                role="button"
                                data-toggle="collapse"
                                data-parent="#accordion"
                                href="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                              >
                                {data2.title}
                              </a>
                            </h4>
                          </div>

                          <div
                            id="collapseOne"
                            className="panel-collapse collapse in"
                            role="tabpanel"
                            aria-labelledby="headingOne"
                          >
                            <div className="panel-body">
                              <p>{data2.body}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    {data &&
                      data.slice(1, 2).map((data2, index) => (
                        <div className="panel panel-default">
                          <div
                            className="panel-heading"
                            role="tab"
                            id="headingTwo"
                          >
                            <h4 className="panel-title">
                              <a
                                className="collapsed"
                                role="button"
                                data-toggle="collapse"
                                data-parent="#accordion"
                                href="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                              >
                                {data2.title}
                              </a>
                            </h4>
                          </div>
                          <div
                            id="collapseTwo"
                            className="panel-collapse collapse"
                            role="tabpanel"
                            aria-labelledby="headingTwo"
                          >
                            <div className="panel-body">
                              <p>{data2.body}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    {data &&
                      data.slice(2, 3).map((data2, index) => (
                        <div className="panel panel-default">
                          <div
                            className="panel-heading"
                            role="tab"
                            id="headingThree"
                          >
                            <h4 className="panel-title">
                              <a
                                className="collapsed"
                                role="button"
                                data-toggle="collapse"
                                data-parent="#accordion"
                                href="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                              >
                                {data2.title}
                              </a>
                            </h4>
                          </div>
                          <div
                            id="collapseThree"
                            className="panel-collapse collapse"
                            role="tabpanel"
                            aria-labelledby="headingThree"
                          >
                            <div className="panel-body">
                              <p>{data2.body}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    {data &&
                      data.slice(3, 4).map((data2, index) => (
                        <div className="panel panel-default">
                          <div
                            className="panel-heading"
                            role="tab"
                            id="headingFour"
                          >
                            <h4 className="panel-title">
                              <a
                                className="collapsed"
                                role="button"
                                data-toggle="collapse"
                                data-parent="#accordion"
                                href="#collapseFour"
                                aria-expanded="false"
                                aria-controls="collapseFour"
                              >
                                {data2.title}
                              </a>
                            </h4>
                          </div>
                          <div
                            id="collapseFour"
                            className="panel-collapse collapse"
                            role="tabpanel"
                            aria-labelledby="headingFour"
                          >
                            <div className="panel-body">
                              <p>{data2.body}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    {data &&
                      data.slice(4, 5).map((data2, index) => (
                        <div className="panel panel-default">
                          <div
                            className="panel-heading"
                            role="tab"
                            id="headingFive"
                          >
                            <h4 className="panel-title">
                              <a
                                className="collapsed"
                                role="button"
                                data-toggle="collapse"
                                data-parent="#accordion"
                                href="#collapseFive"
                                aria-expanded="false"
                                aria-controls="collapseFive"
                              >
                                {data2.title}
                              </a>
                            </h4>
                          </div>
                          <div
                            id="collapseFive"
                            className="panel-collapse collapse"
                            role="tabpanel"
                            aria-labelledby="headingFive"
                          >
                            <div className="panel-body">
                              <p>{data2.body}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    {data &&
                      data.slice(5, 6).map((data2, index) => (
                        <div className="panel panel-default">
                          <div
                            className="panel-heading"
                            role="tab"
                            id="headingSix"
                          >
                            <h4 className="panel-title">
                              <a
                                className="collapsed"
                                role="button"
                                data-toggle="collapse"
                                data-parent="#accordion"
                                href="#collapseSix"
                                aria-expanded="false"
                                aria-controls="collapseSix"
                              >
                                {data2.title}
                              </a>
                            </h4>
                          </div>
                          <div
                            id="collapseSix"
                            className="panel-collapse collapse"
                            role="tabpanel"
                            aria-labelledby="headingSix"
                          >
                            <div className="panel-body">
                              <p>{data2.body}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    {data &&
                      data.slice(6, 7).map((data2, index) => (
                        <div className="panel panel-default">
                          <div
                            className="panel-heading"
                            role="tab"
                            id="headingSeven"
                          >
                            <h4 className="panel-title">
                              <a
                                className="collapsed"
                                role="button"
                                data-toggle="collapse"
                                data-parent="#accordion"
                                href="#collapseSeven"
                                aria-expanded="false"
                                aria-controls="collapseSeven"
                              >
                                {data2.title}
                              </a>
                            </h4>
                          </div>
                          <div
                            id="collapseSeven"
                            className="panel-collapse collapse"
                            role="tabpanel"
                            aria-labelledby="headingSeven"
                          >
                            <div className="panel-body">
                              <p>{data2.body}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12 development">
                  <img src={data1.image} />
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
export default LifeCycle;
