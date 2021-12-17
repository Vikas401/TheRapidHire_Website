import React, { useState } from "react";
import "./AdminMain.css";
import $ from "jquery";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";

const AdminMain = ({
  navBar,
  heroBox,
  story,
  service,
  technologys,
  software,
  overview,
  feature,
  trusted,
  team,
  about,
  services,
  features,
  technology,
  teams,
  career,
  footercontact,
  ourtechnology,
  experience,
  companyperks,
  excited,
  setselectedMenuItemName,
}) => {
  $(document).ready(function () {
    $("#sidebarCollapse").on("click", function () {
      $("#sidebar").toggleClass("active");
    });
  });
  $(".list-unstyle a").on("click", function (e) {
    e.preventDefault();
    $(".list-unstyle a").removeClass("active");
    $(this).addClass("active");
  });
  const [open, setOpen] = React.useState(false);
  const [adminShowDataProps, setAdminShowDataProps] = React.useState([]);
  const [homeSubMenu, setHomeSubMenu] = useState(null);
  const [newDeleteId, setNewDeleteId] = useState("");
  const [tab, setTab] = useState("");
  const [validationError, setValidationError] = useState({
    title: false,
    body: false,
    description: false,
  });

  const onSubmit = (event) => {
    event.preventDefault(event);
    const form = event.target;
    let formObj = {
      title: form.title.value,
      body: form.body.value,
      description: form.description.value,
    };
    axios({
      method: "POST",
      url: `https://therapidhiredev.herokuapp.com/${homeSubMenu}`,
      header: "",
      data: formObj,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [cols, setCols] = useState({
    ID: true,
    Title: true,
    Body: false,
    imageURL: false,
    name: false,
    designation: false,
    AltTag: false,
    Action: true,
    Description: false,
    MainTitle: false,
    Image: false,
    Name: false,
    ProFileName: false,
    Location: false,
    Experience: false,
    Content: false,
    ClassName: false,
    Maindescription: false,
  });
  const [nav_bar, setNav_bar] = useState(false);
  const [hero_box, setHero_box] = useState(false);
  const [soft_ware, setSoft_ware] = useState(false);
  const [maintitle, setMaintitle] = useState(false);
  const [Heads, setHeads] = React.useState(["ID", "Title", "Action"]);
  const heroBoxHeads = [
    "id",
    "Title",
    "Description",
    "imageURL",
    "Alt Tag",
    "Action",
  ];
  const storyHeads = ["id", "Title", "Description", "Action"];
  const serviceHeads = [
    "id",
    "Title",
    "Description",
    "imageURL",
    "Alt Tag",
    "Action",
  ];
  const technologysHeads = [
    "id",
    "Title",
    "Description",
    "imageURL",
    "Alt Tag",
    "Action",
  ];
  const softwareHeads = [
    "id",
    "Title",
    "body",
    "description",
    "mainTitle",
    "imageURL",
    "Action",
  ];
  const overviewHeads = ["id", "Title", "description", "imageURL", "Action"];
  const featureHeads = [
    "id",
    "Title",
    "Body",
    "description",
    "mainTitle",
    "imageURL",

    "Action",
  ];
  const trustedHeads = ["id", "Title", "description", "imageURL", "Action"];
  const teamHeads = [
    "id",
    "Title",
    "description",
    "imageURL",
    "name",
    "designation",
    "Alt Tag",
    "Action",
  ];
  const footerHeads = ["id", "Title", "imageURL", "Action"];
  const aboutHeads = [
    "id",
    "Title",
    "description",

    "imageURL",
    "Alt Tag",
    "Action",
  ];
  const servicesHeads = [
    "id",
    "Title",
    "description",
    "imageURL",
    "Alt Tag",
    "Action",
  ];
  const featuresHeads = [
    "id",
    "Title",
    "description",
    "imageURL",
    "Alt Tag",
    "Action",
  ];
  const technologyHeads = [
    "id",
    "Title",
    "Body",
    "imageURL",
    "Alt Tag",
    "Action",
  ];
  const teamsHeads = [
    "id",
    "Title",
    "body",
    "imageURL",

    "name",
    "designation",
    "mainDescription",
    "Alt Tag",
    "Action",
  ];
  const careerHeads = [
    "id",
    "Title",
    "body",
    "Description",

    "imageURL",
    "Alt Tag",
    "Action",
  ];
  const companyperksHeads = ["id", "Title", "maintitle", "className", "Action"];
  const excitedHeads = [
    "id",
    "Title",
    "profileName",
    "location",
    "experience",
    "description",
    "content",
    "Action",
  ];
  const ourtechnologyHeads = [
    "id",
    "Title",
    "Body",
    "imageURL",
    "Alt Tag",
    "Action",
  ];

  const experienceHeads = [
    "id",
    "Title",
    "description",
    "imageURL",
    "Alt Tag",
    "Action",
  ];
  const { location } = window;
  let history = useHistory();
  const handleMenuClose = () => {
    localStorage.clear('myData');
    history.push("/login");
    location.reload();
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const showItemsIntable = (name) => {
    setHomeSubMenu(name);
    setselectedMenuItemName(name);
    if (name === "navBar") {
      setHeads(["ID", "Title", "Action"]);
      setAdminShowDataProps(navBar);
      console.log("navBar Heads: ", Heads);
      setCols({
        ID: true,
        Title: true,
        Body: false,
        imageURL: false,
        name: false,
        designation: false,
        ProFileName: false,
        Location: false,
        Experience: false,
        Content: false,
        ClassName: false,
        Maindescription: false,
        AltTag: false,
        Action: true,
      });
    } else if (name === "heroBox") {
      setHeads(heroBoxHeads);
      setAdminShowDataProps(heroBox);
      console.log("heroBox Heads: ", Heads);
      setCols({
        ID: true,
        Title: true,
        Body: false,
        imageURL: true,
        name: false,
        designation: false,
        AltTag: true,
        // Action: true,
        Description: true,
        MainTitle: false,
        Image: true,
        Name: false,
        ProFileName: false,
        Location: false,
        Experience: false,
        Content: false,
        ClassName: false,
        Maindescription: false,
      });
    } else if (name === "story") {
      setHeads(storyHeads);
      setAdminShowDataProps(story);
      console.log("story Heads: ", Heads);
      setCols({
        ID: true,
        Title: true,
        Body: false,
        // imageURL: true,
        name: false,
        designation: false,
        AltTag: false,
        // Action: true,
        Description: true,
        MainTitle: false,
        Image: false,
        Name: false,
        ProFileName: false,
        Location: false,
        Experience: false,
        Content: false,
        ClassName: false,
        Maindescription: false,
      });
    } else if (name === "service") {
      console.log(name);
      setHeads(serviceHeads);
      setAdminShowDataProps(service);
      console.log("serviceHeads: ", Heads);
      setCols({
        ID: true,
        Title: true,
        Body: false,

        name: false,
        designation: false,
        AltTag: true,

        Description: true,
        MainTitle: false,
        Image: true,
        Name: false,
        ProFileName: false,
        Location: false,
        Experience: false,
        Content: false,
        ClassName: false,
        Maindescription: false,
      });
    } else if (name === "technologys") {
      setHeads(technologysHeads);
      setAdminShowDataProps(technologys);
      console.log("technologysHeads: ", Heads);
      setCols({
        ID: true,
        Title: true,
        Body: false,

        designation: false,
        AltTag: true,

        Description: true,
        MainTitle: false,
        Image: true,
        Name: false,
        ProFileName: false,
        Location: false,
        Experience: false,
        Content: false,
        ClassName: false,
        Maindescription: false,
      });
    } else if (name === "software") {
      setHeads(softwareHeads);
      setAdminShowDataProps(software);
      console.log("softwareHeads: ", Heads);
      setCols({
        ID: true,
        Title: true,
        Body: true,

        Description: true,
        MainTitle: true,

        designation: false,
        Image: true,
        AltTag: false,

        Name: false,
        ProFileName: false,
        Location: false,
        Experience: false,
        Content: false,
        ClassName: false,
        Maindescription: false,
      });
    } else if (name === "overview") {
      setHeads(overviewHeads);
      setAdminShowDataProps(overview);
      console.log("overviewHeads: ", Heads);
      setCols({
        ID: true,
        Title: true,
        Body: false,

        Description: true,
        MainTitle: false,

        designation: false,
        Image: true,
        AltTag: false,

        Name: false,
        ProFileName: false,
        Location: false,
        Experience: false,
        Content: false,
        ClassName: false,
        Maindescription: false,
      });
    } else if (name === "feature") {
      setHeads(featureHeads);
      setAdminShowDataProps(feature);
      console.log("featureHeads: ", Heads);
      setCols({
        ID: true,
        Title: true,
        Body: true,

        Description: true,
        MainTitle: true,
        name: false,
        designation: false,
        Image: true,
        AltTag: false,

        Name: false,
        ProFileName: false,
        Location: false,
        Experience: false,
        Content: false,
        ClassName: false,
        Maindescription: false,
      });
    } else if (name === "trusted") {
      setHeads(trustedHeads);
      setAdminShowDataProps(trusted);
      console.log("trustedHeads: ", Heads);
      setCols({
        ID: true,
        Title: true,
        Body: false,

        Description: true,
        MainTitle: false,
        name: false,
        designation: false,
        Image: true,
        AltTag: false,

        Name: false,
        ProFileName: false,
        Location: false,
        Experience: false,
        Content: false,
        ClassName: false,
        Maindescription: false,
      });
    } else if (name === "team") {
      setHeads(teamHeads);
      setAdminShowDataProps(team);
      console.log("teamHeads: ", Heads);
      setCols({
        ID: true,
        Title: true,
        Body: false,

        Description: true,
        MainTitle: false,

        designation: true,
        Image: true,
        AltTag: true,

        Name: true,
        ProFileName: false,
        Location: false,
        Experience: false,
        Content: false,
        ClassName: false,
        Maindescription: false,
      });
    } else if (name === "footercontact") {
      setHeads(footerHeads);
      setAdminShowDataProps(footercontact);
      console.log("footerHeads: ", Heads);
      setCols({
        ID: true,
        Title: true,
        Body: false,

        Description: false,
        MainTitle: false,
        name: false,
        designation: false,
        Image: true,
        AltTag: false,

        Name: false,
        ProFileName: false,
        Location: false,
        Experience: false,
        Content: false,
        ClassName: false,
        Maindescription: false,
      });
    } else if (name === "about") {
      setHeads(aboutHeads);
      setAdminShowDataProps(about);
      console.log("aboutHeads: ", Heads);
      setCols({
        ID: true,
        Title: true,
        Body: false,

        Description: true,
        MainTitle: false,

        designation: false,
        Image: true,
        AltTag: true,

        Name: false,
        ProFileName: false,
        Location: false,
        Experience: false,
        Content: false,
        ClassName: false,
        Maindescription: false,
      });
    } else if (name === "services") {
      setHeads(servicesHeads);
      setAdminShowDataProps(services);
      console.log("servcesHeads: ", Heads);
      setCols({
        ID: true,
        Title: true,
        Body: false,

        Description: true,
        MainTitle: false,

        designation: false,
        Image: true,
        AltTag: true,

        Name: false,
        ProFileName: false,
        Location: false,
        Experience: false,
        Content: false,
        ClassName: false,
        Maindescription: false,
      });
    } else if (name === "features") {
      setHeads(featuresHeads);
      setAdminShowDataProps(features);
      console.log("featuresHeads: ", Heads);
      setCols({
        ID: true,
        Title: true,
        Body: false,

        Description: true,
        MainTitle: false,

        designation: false,
        Image: true,
        AltTag: true,

        Name: false,
        ProFileName: false,
        Location: false,
        Experience: false,
        Content: false,
        ClassName: false,
        Maindescription: false,
      });
    } else if (name === "technology") {
      setHeads(technologyHeads);
      setAdminShowDataProps(technology);
      console.log("technologyHeads: ", Heads);
      setCols({
        ID: true,
        Title: true,
        Body: true,

        Description: false,
        MainTitle: false,

        designation: false,
        Image: true,
        AltTag: true,

        Name: false,
        ProFileName: false,
        Location: false,
        Experience: false,
        Content: false,
        ClassName: false,
        Maindescription: false,
      });
    } else if (name === "ourtechnology") {
      setHeads(ourtechnologyHeads);
      setAdminShowDataProps(ourtechnology);
      console.log("ourtechnologyHeads: ", Heads);
      setCols({
        ID: true,
        Title: true,
        Body: true,

        Description: false,
        MainTitle: false,

        designation: false,
        Image: true,
        AltTag: true,

        Name: false,
        ProFileName: false,
        Location: false,
        Experience: false,
        Content: false,
        ClassName: false,
        Maindescription: false,
      });
      // setNav_bar(true);
      // setHero_box(false);
      // setSoft_ware(false)
    } else if (name === "teams") {
      setHeads(teamsHeads);
      setAdminShowDataProps(teams);
      console.log("teamsHeads: ", Heads);
      setCols({
        ID: true,
        Title: true,
        Body: true,
        Maindescription: true,
        Description: false,
        Image: true,
        MainTitle: false,
        AltTag: true,
        Name: true,
        designation: true,
        ProFileName: false,
        Location: false,
        Experience: false,
        Content: false,
        ClassName: false,
      });
      // setNav_bar(true);
      // setHero_box(true);
      // setSoft_ware(true)
    } else if (name === "career") {
      setHeads(careerHeads);
      setAdminShowDataProps(career);
      console.log("careerHeads: ", Heads);
      setCols({
        ID: true,
        Title: true,
        Body: true,

        Description: true,
        MainTitle: false,

        designation: false,
        Image: true,
        AltTag: true,

        Name: false,
        ProFileName: false,
        Location: false,
        Experience: false,
        Content: false,
        ClassName: false,
        Maindescription: false,
      });
      // setNav_bar(true);
      // setHero_box(true);
      // setSoft_ware(false)
    } else if (name === "companyperks") {
      setHeads(companyperksHeads);
      setAdminShowDataProps(companyperks);
      console.log("companyperksHeads: ", Heads);
      setCols({
        ID: true,
        Title: true,
        Body: false,

        Description: false,
        MainTitle: true,

        designation: false,
        Image: false,
        AltTag: false,

        Name: false,
        ProFileName: false,
        Location: false,
        Experience: false,
        Content: false,
        ClassName: true,
        Maindescription: false,
      });
      // setNav_bar(false);
    } else if (name === "excited") {
      setHeads(excitedHeads);
      setAdminShowDataProps(excited);
      console.log("excitedrHeads: ", Heads);
      setCols({
        ID: true,
        Title: true,
        Body: false,

        Description: true,
        MainTitle: false,

        designation: false,
        Image: false,
        AltTag: false,

        Name: false,
        ProFileName: true,
        Location: true,
        Experience: true,
        Content: true,
        ClassName: false,
        Maindescription: false,
      });
      // setNav_bar(false);
    } else if (name === "experience") {
      setHeads(experienceHeads);
      setAdminShowDataProps(experience);
      console.log("experienceHeads: ", Heads);
      setCols({
        ID: true,
        Title: true,
        Body: false,

        Description: true,
        MainTitle: false,

        designation: false,
        Image: true,
        AltTag: true,

        Name: false,
        ProFileName: false,
        Location: false,
        Experience: false,
        Content: false,
        ClassName: false,
        Maindescription: false,
      });
      // setNav_bar(false);
      // setHero_box(true);
      // setSoft_ware(false)
    }

    console.log("adminShowDataProps: ", adminShowDataProps);
  };
  const deleteFunction = (id) => {
    setNewDeleteId(id);
    alert(id);
  };
  const deleteRow = () => {
    axios({
      method: "delete",
      url: `https://therapidhiredev.herokuapp.com/${homeSubMenu}/${newDeleteId}`,
      header: "",
      data: "",
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div id="admin">
      <div class="wrapper">
        <nav id="sidebar">
          <div class="sidebar-header">
            <h3>The Rapid Hire</h3>
            <strong>TRH</strong>
          </div>

          <ul class="list-unstyled components">
            <li>
              <a
                href="#pageSubmenu"
                data-toggle="collapse"
                aria-expanded="true"
                class="dropdown-toggle"
              >
                <i class="fas fa-copy"></i>
                Home
              </a>
              <ul class="collapse list-unstyled flex-column" id="pageSubmenu">
                <li
                  class="nav-item"
                  onClick={() => showItemsIntable("navBar")}
                  name={"navBar"}
                  key={"0"}
                >
                  <a href="#tab_a" data-toggle="pill">
                    Navbar
                  </a>
                </li>
                <li
                  onClick={() => showItemsIntable("heroBox")}
                  name={"heroBox"}
                  key={"1"}
                >
                  <a href="#tab_b" data-toggle="pill">
                    HeroBox
                  </a>
                </li>
                <li
                  onClick={() => showItemsIntable("story")}
                  name={"story"}
                  key={"2"}
                >
                  <a>Story</a>
                </li>
                <li
                  onClick={() => showItemsIntable("service")}
                  name={"service"}
                  key={"9"}
                >
                  <a>Service</a>
                </li>
                <li
                  onClick={() => showItemsIntable("technologys")}
                  name={"technologys"}
                  key={"10"}
                >
                  <a>Technology</a>
                </li>

                <li
                  onClick={() => showItemsIntable("software")}
                  name={"software"}
                  key={"3"}
                >
                  <a href="#tab_d" data-toggle="pill">
                    Software
                  </a>
                </li>
                <li
                  onClick={() => showItemsIntable("overview")}
                  name={"overview"}
                  key={"4"}
                >
                  <a href="#tab_e" data-toggle="pill">
                    Overview
                  </a>
                </li>
                <li
                  onClick={() => showItemsIntable("feature")}
                  name={"feature"}
                  key={"5"}
                >
                  <a href="#tab_f" data-toggle="pill">
                    Features
                  </a>
                </li>
                <li
                  onClick={() => showItemsIntable("trusted")}
                  name={"trusted"}
                  key={"6"}
                >
                  <a href="#tab_g" data-toggle="pill">
                    Trusted
                  </a>
                </li>
                <li
                  onClick={() => showItemsIntable("team")}
                  name={"team"}
                  key={"7"}
                >
                  <a href="#tab_h" data-toggle="pill">
                    Team
                  </a>
                </li>
                <li
                  onClick={() => showItemsIntable("footercontact")}
                  name={"footercontact"}
                  key={"8"}
                >
                  <a href="#tab_i" data-toggle="pill">
                    Contact
                  </a>
                </li>
              </ul>
            </li>
            <li
              onClick={() => showItemsIntable("about")}
              name={"about"}
              key={"9"}
            >
              <a href="#">
                <i class="fas fa-paper-plane"></i>
                About Us
              </a>
            </li>
            <li
              onClick={() => showItemsIntable("services")}
              name={"services"}
              key={"10"}
            >
              <a href="#services">
                <i class="fas fa-question"></i>
                Service
              </a>
            </li>
            <li
              onClick={() => showItemsIntable("features")}
              name={"features"}
              key={"11"}
            >
              <a href="#features">
                <i class="fas fa-paper-plane"></i>
                Features
              </a>
            </li>
            <li
              onClick={() => showItemsIntable("technology")}
              name={"technology"}
              key={"12"}
            >
              <a
                href="#pageSubmenu2"
                data-toggle="collapse"
                aria-expanded="false"
                class="dropdown-toggle"
              >
                <i class="fas fa-copy"></i>
                Technology
              </a>
            </li>

            <ul class="collapse list-unstyled  flex-column" id="pageSubmenu2">
              <li
                onClick={() => showItemsIntable("ourtechnology")}
                name={"ourtechnology"}
                key={"13"}
              >
                <a href="#ourtechnology">Our Technology</a>
              </li>
            </ul>
            <li
              onClick={() => showItemsIntable("teams")}
              name={"teams"}
              key={"14"}
            >
              <a
                href="#pageSubmenu3"
                data-toggle="collapse"
                aria-expanded="false"
                class="dropdown-toggle"
              >
                <i class="fas fa-copy"></i>
                Team
              </a>
            </li>
            <ul class="collapse list-unstyled  flex-column" id="pageSubmenu3">
              <li
                onClick={() => showItemsIntable("experience")}
                name={"experience"}
                key={"15"}
              >
                <a href="#experience">Experience Team </a>
              </li>
            </ul>

            <li
              onClick={() => showItemsIntable("career")}
              name={"career"}
              key={"16"}
            >
              <a
                href="#pageSubmenu4"
                data-toggle="collapse"
                aria-expanded="false"
                class="dropdown-toggle"
              >
                <i class="fas fa-question"></i>
                Career
              </a>
            </li>
            <ul class="collapse list-unstyled  flex-column" id="pageSubmenu4">
              <li
                onClick={() => showItemsIntable("companyperks")}
                name={"companyperks"}
                key={"17"}
              >
                <a href="#companyperks">Company Perks</a>
              </li>
              <li
                onClick={() => showItemsIntable("excited")}
                name={"excited"}
                key={"18"}
              >
                <a href="#excited">Excited To Work</a>
              </li>
            </ul>
          </ul>
        </nav>

        <div id="content">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
              <button type="button" id="sidebarCollapse" class="btn btn-info">
                <i class="fas fa-align-left"></i>
              </button>
              <div
                class="collapse navbar-collapse "
                id="navbarSupportedContent"
              >
                <ul class="navbar-nav ms-auto navbar-right-top">
                  <li class="nav-item dropdown nav-user">
                    <Link
                      class="nav-link nav-user-img"
                      to="#"
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
                    </Link>
                    <div class="dropdown-menu dropdown-menu-right nav-user-dropdown mt-2">
                      <Link class="dropdown-item" onClick={handleMenuClose}>
                        <i class="fas fa-power-off"></i>Logout
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div class="container-fluid">
            <button
              class="btn btn-primary rounded-0"
              data-bs-toggle="modal"
              data-bs-target="#myModal2"
            >
              Add New
            </button>
          </div>

          <div class="container-fluid text-white">
            <div class="tab-content">
              <div class=" border-0 shadow active">
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table m-0">
                      <thead>
                        <tr>
                          {Heads.map((head, i) => (
                            <th scope="col">{head}</th>
                          ))}
                        </tr>
                      </thead>

                      <tbody>
                        {adminShowDataProps &&
                          adminShowDataProps.map((object, i) => (
                            <tr>
                              {cols.ID == true && (
                                <td>{object._id.slice(0, 4) + "..."}</td>
                              )}

                              {cols.Title == true && (
                                <td>
                                  {object.title &&
                                    object.title.slice(0, 4) + "..."}
                                </td>
                              )}

                              {cols.Body == true && (
                                <td>
                                  {object.body &&
                                    object.body.slice(0, 4) + "..."}
                                </td>
                              )}

                              {cols.Description == true && (
                                <td>
                                  {" "}
                                  {object.description &&
                                    object.description.slice(0, 4) + "..."}
                                </td>
                              )}

                              {cols.MainTitle == true && (
                                <td>
                                  {" "}
                                  {object.mainTitle &&
                                    object.mainTitle.slice(0, 4) + "..."}
                                </td>
                              )}

                              {cols.Image == true && (
                                <td>
                                  <img
                                    src={object.image}
                                    height="50px"
                                    width="50px"
                                    alt=""
                                  />
                                </td>
                              )}

                              {cols.Name == true && (
                                <td>
                                  {object.name &&
                                    object.name.slice(0, 4) + "..."}
                                </td>
                              )}

                              {cols.designation == true && (
                                <td>
                                  {object.designation &&
                                    object.designation.slice(0, 4) + "..."}
                                </td>
                              )}
                              {cols.ProFileName == true && (
                                <td>
                                  {object.profileName &&
                                    object.profileName.slice(0, 4) + "..."}
                                </td>
                              )}
                              {cols.Location == true && (
                                <td>
                                  {object.location &&
                                    object.location.slice(0, 4) + "..."}
                                </td>
                              )}
                              {cols.Experience == true && (
                                <td>
                                  {object.experience &&
                                    object.experience.slice(0, 4) + "..."}
                                </td>
                              )}
                              {cols.Content == true && (
                                <td>
                                  {object.content &&
                                    object.content.slice(0, 4) + "..."}
                                </td>
                              )}
                              {cols.ClassName == true && (
                                <td>
                                  {object.className &&
                                    object.className.slice(0, 4) + "..."}
                                </td>
                              )}
                              {cols.Maindescription == true && (
                                <td>
                                  {object.mainDescription &&
                                    object.mainDescription.slice(0, 4) + "..."}
                                </td>
                              )}

                              {cols.AltTag == true && (
                                <td>
                                  {" "}
                                  {object.alt && object.alt.slice(0, 4) + "..."}
                                </td>
                              )}

                              <td>
                                <ul class="list-inline m-0">
                                  <li class="list-inline-item">
                                    <button
                                      class="btn btn-primary btn-sm rounded-0"
                                      type="button"
                                      data-bs-toggle="modal"
                                      data-bs-target="#myModal"
                                    >
                                      <i class="fa fa-edit"></i>
                                    </button>
                                  </li>

                                  <li class="list-inline-item">
                                    <button
                                      class="btn btn-danger btn-sm rounded-0"
                                      type="button"
                                      data-bs-toggle="modal"
                                      data-bs-target="#myModal1"
                                      onClick={() => deleteFunction(object._id)}
                                    >
                                      <i class="fa fa-trash"></i>
                                    </button>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* edit modal */}
      <div class="modal" id="myModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Content</h4>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div class="modal-body">You can Edit content here</div>
            <div class="ms-3">
              <label for="fname">First Name:</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter name"
              />

              <label for="fname">First Name:</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter name"
              />

              <label for="fname">First Name:</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter name"
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-success"
                data-bs-dismiss="modal"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* delete modal */}
      <div class="modal" id="myModal1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Are you sure do you want delete?</h4>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-light"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => deleteRow()}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* add modal */}
      <div class="modal" id="myModal2">
        <div class="modal-dialog">
          <div class="modal-content">
            <form onSubmit={onSubmit}>
              <div class="modal-header">
                <h4 class="modal-title">Create New Content</h4>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>

              <div class="modal-body">You can Create content here</div>

              <div class="ms-3">
                <label for="fname">First Title</label>
                <input
                  class="form-control"
                  type="text"
                  name="title"
                  placeholder="Enter name"
                  id=""
                />

                <label for="fbody">First Body:</label>
                <input
                  class="form-control"
                  type="text"
                  name="body"
                  placeholder="Enter body text"
                  id=""
                />

                <label for="fdesc">First Description:</label>
                <input
                  class="form-control"
                  type="text"
                  name="description"
                  placeholder="Enter description"
                  id=""
                />
              </div>

              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  class="btn btn-success"
                  // data-bs-dismiss="modal"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminMain;
