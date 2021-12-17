import React, { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./Components/Homepage/Homepage";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Services from "./Components/Service/Services";
import Contact_child from "./Components/Contact/Contact_child";
import About from "./Components/About/About";
import Features_Child from "./Components/Features_Child/Features_Child";
import Team_child from "./Components/Teams/Team_child";
import Technology_child from "./Components/Technologys/Technology_child";
import Career from "./Components/Career/Career";
import Apply from "./Components/Apply/Apply";
import Terms from "./Components/Terms/Terms";
import Policy from "./Components/Policy/Policy";
// import AdminMain from "./Admin/AdminMain";
import Login from "./Admin/Login";
import axios from "axios";
import Reset from "./Admin/Reset";
import Forgot from "./Admin/Forgot";
import Otp from "./Admin/Otp";
import Dashboard from "./Admin/dashboard";
import HR_Dashboard from "./Admin/hr/HR_Dashboard";
import SalesDashboard from "./Admin/sales/SalesDashboard";



function App() {
  const [navBar, setNavBar] = useState(null);
  let [loaded, setLoaded] = useState(true);
  const userRole = localStorage.getItem('myData')
  setTimeout(() => {
    setLoaded(false);
  }, 2000);
  const API = "https://therapidhiredev.herokuapp.com";
  useEffect(() => {
    async function getDataFromServer() {
      const { data: navBar } = await axios.get(`${API}/navbar/`);
      setNavBar(navBar);
    }
    getDataFromServer();
  
  }, []);
  return (
    <div>
     
      {loaded ? (
        <div className="loader">
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <div className="App">
          <Router>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/services" component={Services}></Route>
            <Route exact path="/contact_child" component={Contact_child}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route path="/features" component={Features_Child}></Route>
            <Route exact path="/Team" component={Team_child}></Route>
            <Route exact path="/career" component={Career}></Route>
            <Route exact path="/apply" component={Apply}></Route>
            <Route exact path="/terms" component={Terms}></Route>
            <Route exact path="/policy" component={Policy}></Route>
            <Route exact path="/technology"component={Technology_child}></Route>
            <Route exact path="/login"component={Login}></Route>
            <Route exact path="/reset"component={Reset}></Route>
            <Route exact path="/forgot"component={Forgot}></Route>
            <Route exact path="/otp"component={Otp}></Route>
            <Route exact path="/admin/dashboard" component={Dashboard}></Route>
            <Route exact path="/hr" component={HR_Dashboard}></Route>
            <Route exact path="/sales" component={SalesDashboard}></Route>
          </Router>    
        </div>      
   )}
    </div>
  );
}

export default App;
