import React, { useEffect, useState } from "react";
import "./Hr.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const { location } = window;

const HR_Dashboard = () => {
  let history = useHistory();
  const handleMenuClose = () => {
    localStorage.clear('myData');
    history.push("/login");
    location.reload();
  };
  const [data, setData] = useState("");
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("myData");
      if(isAuthenticated != "hr"){
        history.push('/login');
      }else{
        history.push('/hr');
      }
    axios.get("https://therapidhiredev.herokuapp.com/applyNow").then((res) => {
      setData(res.data);
    });
    window.scrollTo(0, 0);
  }, []);
  console.log("data", data);

  return (
    <div id="hr">
      <div class="dashboard-header">
        <nav class="navbar navbar-expand-lg bg-white fixed-top">
          <a class="navbar-brand" href="#">
            Welcome to Hr Dashboard
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto navbar-right-top">
              <li class="nav-item dropdown nav-user">
                <a
                  class="nav-link nav-user-img"
                  href="#"
                  id="navbarDropdownMenuLink2"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    src="https://img.icons8.com/dusk/100/000000/user-female-circle.png"
                    alt=""
                    class="user-avatar-md rounded-circle"
                  />
                </a>
                <div  class="dropdown-menu dropdown-menu-right nav-user-dropdown">
                  <Link class="dropdown-item" onClick={handleMenuClose}>
                    <i class="fas fa-power-off"></i>Logout
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="container table-contain">
        <div class="table-responsive">
          <table class="table table-hover">
            <thead>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile Number</th>
                <th>Technology</th>
                <th>Description</th>
                <th>Upload</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((data, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{data.name}</td>
                      <td>{data.email}</td>
                      <td>{data.phone_number}</td>
                      <td>{data.technology}</td>
                      <td>{data.description}</td>
                      <td> <a href={data.upload} target="_blank">
                          View Resume
                        </a></td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="5">Loading...</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HR_Dashboard;
