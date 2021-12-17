import React,{useEffect, useState} from "react";
import axios from "axios";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Terms.css";

const Terms = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    axios.get("https://therapidhiredev.herokuapp.com/termsAndCondition").then((res) => {
      setData(res.data);
    });
    window.scrollTo(0, 0);
  }, []);
  console.log("second", data);
  return (
    <div id="terms">
      <Header />
      {data &&
        data.map((data1, index) => (
      <div class="container">
        <div class="conditions3">
        <div class="col-xs-12">
          <h4>{data1.title}</h4>
          <p>
          {data1.description}
          </p>
        </div>
      </div>
      </div>
        ))}
      <Footer />
    </div>
  );
};
export default Terms;
