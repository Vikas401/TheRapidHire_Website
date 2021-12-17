import React,{useState, useEffect} from "react";
import "./Sales.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const { location } = window;

const SalesDashboard = () => {
  let history = useHistory();
  const handleMenuClose = () => {
    localStorage.clear('myData');
    history.push("/login");
    location.reload();
  };
  const [data, setData] = useState("");
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("myData");
    if(isAuthenticated != "sales"){
      history.push('/login');
    }else{
      history.push('/sales');
    }
    axios.get("https://therapidhiredev.herokuapp.com/contactus").then((res) => {
      setData(res.data);
    });
    window.scrollTo(0, 0);
  }, []);
  console.log("data", data);
  return (
    <div id="sales">
      <div class="dashboard-header">
        <nav class="navbar navbar-expand-lg bg-white fixed-top">
          <a class="navbar-brand" href="#">
            Welcome to Sales Dashboard
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
                <div class="dropdown-menu dropdown-menu-right nav-user-dropdown">
                  <Link class="dropdown-item" onClick={handleMenuClose}>
                    <i class="fas fa-power-off"></i>Logout
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="container table-section">
        <div class="table-responsive">
          <table class="table table-hover">
            <thead>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
            { (data.length > 0) ? data.map( (data, index) => {
           return (
            <tr key={ index }>
              <td>{ index + 1 }</td>
              <td>{ data.email }</td>
              <td>{ data.message}</td>
              <td>{ data.name }</td>
              
            </tr>
          )
         }) : <tr><td colSpan="5">Loading...</td></tr> }
            </tbody>
          </table>
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-end">
              <li class="page-item disabled">
                <a
                  class="page-link"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Previous
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  1
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  2
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  3
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SalesDashboard;
