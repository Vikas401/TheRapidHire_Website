import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Technology.css";

const Technology = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    axios.get("https://therapidhiredev.herokuapp.com/overview").then((res) => {
      setData(res.data);
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="technology">
      {data &&
        data.slice(0, 1).map((data1, index) => (
          <div className="cotainer-fluid content">
            <h2>{data1.title}</h2>
            <p>{data1.description}</p>
            <div class="slider">
              <div class="slide-track">
                {data &&
                  data.slice(0, 24).map((value, index) => (
                    <div class="slide">
                      <img src={value.image} height="100" width="150" alt="" />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
export default Technology;
