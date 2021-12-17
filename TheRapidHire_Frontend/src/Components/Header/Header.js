import React, { useEffect, useState } from "react";
import "./Header.css";
import axios from "axios";
import logo from "../../assets/images/LOGO new.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    axios.get("https://therapidhiredev.herokuapp.com/navbar").then((res) => {
      setData(res.data);
    });
    window.scrollTo(0, 0);
  }, []);
  console.log("second", data);
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      {data &&
        data.slice(0, 1).map((data1, index) => (
          <div class="container-fluid">
            <Link class="navbar-brand" to="/">
              <img src={data1.logo} className="logo" />
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto flex-nowrap " id="navList">
                <li class="nav-item">
                  
                     {data &&
                    data.slice(0, 1).map((data1, index) => (
                      <NavLink exact activeClassName="active" to="about">
                        {data1.title}
                      </NavLink>
                    ))}
                </li>

                <li class="nav-item">
                {data &&
                    data.slice(1, 2).map((data1, index) => (
                      <NavLink exact activeClassName="active" to="services">
                        {data1.title}
                      </NavLink>
                    ))}
                </li>
                <li class="nav-item">
                  {data &&
                    data.slice(2, 3).map((data1, index) => (
                      <NavLink exact activeClassName="active" to="features">
                        {data1.title}
                      </NavLink>
                    ))}
                </li>
                <li class="nav-item">
                  {data &&
                    data.slice(3, 4).map((data1, index) => (
                      <NavLink exact activeClassName="active" to="technology">
                        {data1.title}
                      </NavLink>
                    ))}
                </li>
                <li class="nav-item">
                  {data &&
                    data.slice(4, 5).map((data1, index) => (
                      <NavLink exact activeClassName="active" to="team">
                        {data1.title}
                      </NavLink>
                    ))}
                </li>
                <li class="nav-item">
                  {data &&
                    data.slice(5, 6).map((data1, index) => (
                      <NavLink exact activeClassName="active" to="career">
                        {data1.title}
                      </NavLink>
                    ))}
                </li>
                <li class="nav-item">
                  {data &&
                    data.slice(6, 7).map((data1, index) => (
                      <NavLink
                        exact
                        activeClassName="active"
                        to="contact_child"
                      >
                        {data1.title}
                      </NavLink>
                    ))}
                </li>
              </ul>
            </div>
          </div>
        ))}
    </nav>
  );
};
export default Header;
