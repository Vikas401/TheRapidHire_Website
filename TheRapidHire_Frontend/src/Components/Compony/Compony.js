import React, { useEffect, useState } from "react";
import "./Compony.css";
import axios from "axios";

const Compony = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    axios.get("https://therapidhiredev.herokuapp.com/review/").then((res) => {
      setData(res.data);
    });
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div id="compony">
      {data &&
        data.slice(0, 1).map((data1, index) => (
          <div className="container-fluid content">
            <h2>{data1.title}</h2>
            <p>{data1.description}</p>
            <div className="row compony_row">
              {data &&
                data.slice(0, 4).map((value, index) => (
                  <div className="col-lg-3 col-sm-6">
                    <div className="company-bg">
                      <img src={value.image} className="img-fluid" />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Compony;
