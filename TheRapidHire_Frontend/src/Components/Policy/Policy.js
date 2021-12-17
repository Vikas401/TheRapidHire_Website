import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Policy.css";

const Policy = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get("https://therapidhiredev.herokuapp.com/privacyAndPolicy")
      .then((res) => {
        setData(res.data);
      });
    window.scrollTo(0, 0);
  }, []);
  console.log("second", data);
  return (
    <div id="policy">
      <Header />
      <div class="container">
            <div class="terms3">
              <div class="col-xs-12">
        {data &&
          data.slice(0, 1).map((data1, index) => (
                <h2>{data1.title}</h2>
              ))}
                <br />
              {data &&
          data.slice(0, 3).map((data1, index) => (
                <p>{data1.description}</p>
          ))}
              </div>
            </div>
      </div>
      <Footer />
    </div>
  );
};
export default Policy;
