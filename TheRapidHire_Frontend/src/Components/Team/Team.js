import React, { useState, useEffect } from "react";
import "./Team.css";
import axios from "axios";
import Carousel from "react-elastic-carousel";

const Team = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get("https://therapidhiredev.herokuapp.com/innovativeTeam")
      .then((res) => {
        setData(res.data);
      });
    window.scrollTo(0, 0);
  }, []);
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <div id="team">
      {data &&
        data.slice(0, 1).map((data1, index) => (
          <div className="container text-center content">
            <h2>{data1.title}</h2>
            <p>{data1.description}</p>
            <Carousel breakPoints={breakPoints}>
              {data &&
                data.slice(0, 7).map((value, index) => (
                  <div className="card-wrapper">
                    <div className="card">
                      <div className="card-image">
                        <img src={value.image} alt="" />
                      </div>
                      <div className="details">
                        <h2>
                          {value.name}
                          <span className="job-title">{value.designation}</span>
                        </h2>
                      </div>
                    </div>
                  </div>
                ))}
            </Carousel>
          </div>
        ))}
    </div>
  );
};

export default Team;
