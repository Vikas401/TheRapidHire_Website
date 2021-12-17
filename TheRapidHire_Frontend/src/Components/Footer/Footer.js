import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  const [data, setData] = useState("");
  const [value, setValue] = useState("");
  useEffect(() => {
    axios.get("https://therapidhiredev.herokuapp.com/footer").then((res) => {
      setData(res.data);
    });
    window.scrollTo(0, 0);
  }, []);
  console.log("second===>>>>>>", data);
  useEffect(() => {
    axios.get("https://therapidhiredev.herokuapp.com/copyRight").then((res) => {
      setValue(res.data);
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="footer_content">
              {data &&
                data.slice(0, 1).map((data1, index) => (
                  <ul>
                    <li>
                      <h3>{data1.title}</h3>
                    </li>
                    {data1.links.map((data2, index) => {
                      let valueArray = data1.valueArray;
                      return (
                        <li>
                          <Link to={valueArray[index]}>
                            <i className="fas fa-angle-right"></i>
                            {data2}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                ))}
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="footer_content">
              {data &&
                data.slice(1, 2).map((data1, index) => (
                  <ul>
                    <li>
                      <h3>{data1.title}</h3>
                    </li>
                    {data1.links.map((data2, index) => (
                      <li>
                        <Link to="/services">
                          <i className="fas fa-angle-right"></i>
                          {data2}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ))}
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="footer_content">
              {data &&
                data.slice(2, 3).map((data1, index) => (
                  <div>
                    <ul>
                      <li>
                        <h3>{data1.title}</h3>
                      </li>
                      {data1.links.map((data2, index) => {
                        let valueArray = data1.valueArray;

                        return (
                          <li>
                            <Link to={valueArray[index]}>
                              <i className="fas fa-angle-right"></i>
                              {data2}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="footer_content">
              {data &&
                data.slice(3, 4).map((data1, index) => (
                  <ul>
                    <li>
                      <h3>{data1.title}</h3>
                    </li>
                    {data1.links.map((data2, index) => {
                      let valueArray = data1.valueArray;
                      let icon = data1.icon;
                      let links = data1.links;
                      return (
                        <li>
                          <div className="icon">
                            <i className={icon[index]}></i>
                          </div>
                          <div className="info">
                            <h5>{links[index]}</h5>
                            {index == 1 ? (
                              <a
                                href={`mailto: ${valueArray[index]}`}
                                target="_blank"
                              >
                                {valueArray[index]}
                              </a>
                            ) : index == 0 ? (
                              <a href={`${valueArray[index]}`} target="_blank">
                                {valueArray[index]}
                              </a>
                            ) : (
                              <a
                                href={`tel:${valueArray[index]}`}
                                target="_blank"
                              >
                                {valueArray[index]}
                              </a>
                            )}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-footer">
        <div class="container">
          <div class="copyright">
            {value &&
              value.map((data1, index) => (
                <div class="container">
                  <div class="row">
                    <div class="col-xs-12 text-center">
                      <p>{data1.title}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
