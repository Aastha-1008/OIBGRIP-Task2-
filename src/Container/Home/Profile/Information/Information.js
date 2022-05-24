import React from "react";
import Typical from "react-typical";
import "./Information.css";

export default function Information() {
  return (
    <div className = "con">
      <div className="profile-parent">
        <div className="profile-details">
          {/* <div className="colz">
            <div className="colz-icon">
              <a href="/">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="/">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="/">
                <i class="bi bi-linkedin"></i>
              </a>
              <a href="/">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div> */}

          <div className="profile-details-name">
            <span className="primary-text">
              {""}
              Hello, I'm{" "}
              <span className="highlighted-text">Aastha Chaudhary</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Ethusiastic Dev 🟠 ",
                    1000,
                    "Full Stack Developer 💻",
                    2000,
                    "React Dev 📱",
                    2000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire Me{""}
            </button>
            <a
              href="https://drive.google.com/file/d/1JSz_4x5XulyU4WThHE5z9wlY7RGKMZvs/view?usp=sharing"
              download="Aastha Resume.pdf"
            >
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          {/* <div className="profile-picture-background"></div> */}
        </div>
      </div>
    </div>
  );
}
