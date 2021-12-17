import React,{useEffect, useState} from "react";
import axios from "axios";
import "./Features.css";


const Features = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    axios.get("https://therapidhiredev.herokuapp.com/featuresChild").then((res) => {
      setData(res.data);
    });
    window.scrollTo(0, 0);
  }, []);
  console.log("second", data);
  return (
    <div id="features">
       {data &&
        data.slice(0, 1).map((data1, index) => (
      <div className="cotainer-fluid content">
        <h2>{data1.mainTitle}</h2>
        <p>
         {data1.description}
        </p>
        <div className="cards">
          <div className="row">
          {data &&
                  data.slice(0, 4).map((value, index) => (
            <div className="col-md-3 col-sm-6">
              <div className="card card-flip">
                <div className="card-front" style={{ backgroundColor: "#9D9D9E" }}>
                  <div className="card-body">
                    {/* <i className="fa fa-search fa-5x float-right"></i> */}
                    <img className="card-title" src={value.image} />
                    <h2 className="card-text" style={{ color: "white" }}>
                     {value.title}
                    </h2>
                  </div>
                </div>
                <div className="card-back bg-black">
                  <div className="card-body">
                    <p className="card-text" style={{ color: "wheat" }}>
                     {value.body}
                    </p>
                  </div>
                </div>
              </div>
                
            </div>
                  ))}
 
            
          </div>
        </div>
      </div>
          ))}
    </div>
  );
};
export default Features;
