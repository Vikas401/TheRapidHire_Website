import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./Apply.css";

const Apply = (props) => {
  const [value, setValue] = useState([]);
  const [value1, setValue1] = useState([]);
  const apiUrl = "https://therapidhiredev.herokuapp.com";
  console.log("Show the api url here===>>", apiUrl);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setMobile] = useState("");
  const [technology, setTechnology] = useState("");
  const [description, setDescription] = useState("");
  const [upload, setFile] = useState("");
  const history = useHistory();

  const [isJava, setIsJava] = useState("block");
  const [isMern, setIsMern] = useState("none");
  const [isMean, setIsMean] = useState("none");

  const [Java, javaDevloper] = useState([]);
  const [Mern, mernDevloper] = useState([]);
  const [Mean, meanDevloper] = useState([]);
  const [profileType, profileTypeVal] = useState([]);

  async function applynow() {
    console.warn(name, email, phone_number, technology, description, upload);
    const formData = {
      name,
      email,
      phone_number,
      technology,
      description,
      upload,
    };
    let result = await fetch("https://therapidhiredev.herokuapp.com/applyNow", {
      method: "POST",
      body: formData,
    });
    alert("data has been saved");
  }
  useEffect(() => {
    profileTypeVal(props.history.location.state.profileType);

    axios.get(`${apiUrl}/banner/`).then((resp) => {
      setValue(resp.data);
    });

    axios
      .get("https://therapidhiredev.herokuapp.com/excitedWorkUs")
      .then((resp) => {
        if (props.history.location.state.profileType == 1) {
          setValue1(resp.data[0]);
        } else if (props.history.location.state.profileType == 2) {
          setValue1(resp.data[1]);
        } else {
          setValue1(resp.data[2]);
        }
      });

    window.scrollTo(0, 0);

    if (value1?.profileName == "Java Developer") {
      setIsJava("block");
      setIsMern("none");
      setIsMean("none");
    }
  }, []);

  const lang = (evt) => {
    // evt.target.id
    if (evt.target.id === "Java Developer") {
      setIsJava("block");
      setIsMern("none");
      setIsMean("none");
    }
  };

  return (
    <div id='apply'>
      <Header />
      {value &&
        value.slice(7, 8).map((data1, index) => (
          <div
            className='service-bg cover-background'
            style={{
              backgroundImage:
                'url("https://therapidhiredev.herokuapp.com/banner//2021-10-27T07-23-37.523Ztechnology.jpg")',
            }}>
            <div className='container h-100'>
              <div className='row h-100 align-items-center' key={index}>
                <div
                  className='col-12 text-center'
                  data-aos='zoom-in'
                  onKeyPress={lang}>
                  <h1 className='fw-light'>{data1.title}</h1>
                  <p className='lead'>{data1.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      <section class='apply-sec text-center login-block'>
        <div class='container d-flex justify-content-center'>
          <div class='form'>
            <div class='contact-info'>
              {value1 && (
                <div>
                  <h3 id='summernote' class='listHeading'>
                    {value1.profileName}
                  </h3>
                  <ul class='listForJob'>
                    <ul>
                      <li>{value1.content}</li>
                    </ul>
                  </ul>
                </div>
              )}
            </div>

            <div class='contact-info-form'>
              {" "}
              <span class='circle one'></span> <span class='circle two'></span>
              <form class='sign-up'>
                <h2 class='heading mb-4'>Apply Now</h2>
                <div class='form-group fone mt-2'>
                  <input
                    type='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    class='form-control'
                    placeholder='Name'
                  />{" "}
                </div>
                <div class='form-group fone mt-2'>
                  <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    class='form-control'
                    placeholder='Email Id'
                  />{" "}
                </div>
                <div class='form-group fone mt-2'>
                  <input
                    type='mobile_no'
                    value={phone_number}
                    onChange={(e) => setMobile(e.target.value)}
                    class='form-control'
                    placeholder='Mobile Number'
                  />
                </div>
                <div class='form-group fone mt-2'>
                  <input
                    type='text'
                    value={technology}
                    onChange={(e) => setTechnology(e.target.value)}
                    class='form-control'
                    placeholder='Technology'
                  />
                </div>
                <div class='form-group fone mt-2'>
                  <textarea
                    name='message'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    class='form-control'
                    placeholder=' Description'
                  />
                </div>
                <div class='form-group fone mt-2'>
                  <input
                    type='file'
                    onChange={(e) => setFile(e.target.files[0])}
                    class='form-control'
                    placeholder='upload file'
                  />
                </div>
                <input
                  type='checkbox'
                  class='form-check-input ml-0'
                  id='exampleCheck1'
                />{" "}
                <label class='form-check-label ml-3' for='exampleCheck1'>
                  I agree to Stoke <u>Terms</u> and <u>Privacy Policy</u>
                </label>
              </form>{" "}
              <button
                type='button'
                onClick={applynow}
                class='btn btn-success mb-5'>
                Apply now
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Apply;
