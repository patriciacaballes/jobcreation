import React from "react";
import { useAuth } from "../../context/AuthProvider";
import { SideBar } from "../SideBar";
import BottomBar from "../BottomBar";
import "./JobOffer.css"
// Dashboard

const JobOffer = () => {
  const { user } = useAuth();
  return (
    <>
      <div className="layout">
        <div id="sidebar">
          <SideBar />
        </div>
        <div id="jobOffer">jobOffer</div>
      </div >
      <div className="bottom-bar">
        <BottomBar />
      </div>
    </>
  );
};

export default JobOffer;
