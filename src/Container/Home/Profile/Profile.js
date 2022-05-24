import React from "react";
import "./Profile.css";
import Navbar from "./Navbar/Navbar";
import Information from "./Information/Information";

export default function profile() {
  return (
    <div className="profile-container ">
      <Navbar/>
      <Information/>
    </div>
  );
}
