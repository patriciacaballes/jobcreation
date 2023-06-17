import React from "react";
import { useAuth } from "../../context/AuthProvider";
import { SideBar } from "../SideBar";
import BottomBar from "../BottomBar";
import "./JobOffer.css"
import JobCard from "./JobCard/JobCard";
// Dashboard

const JobOffer = () => {
  const { user } = useAuth();
  return (
    <>
      <div className="layout">
        <div id="sidebar">
          <SideBar />
        </div>
        {/* JobOffer */}
        <div id="jobOffer">
        <div className="jobCard"><JobCard /></div>
        <div className="filter">filter</div>
        </div>
      </div >
      <div className="bottom-bar">
        <BottomBar />
      </div>
    </>
  );
};

export default JobOffer;
