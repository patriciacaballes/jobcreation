import React from "react";
import "./DashAppStat.css";

export default function DashAppStat() {
  return (
    <>
      <div className="statContainer">
        <div className="title-project">Invitation Card</div>
        <div className="stat">
          <div className="div">50%</div>
          <div className="stat-progress">
            <progress
              className="custom-progress bg-primary"
              value="50"
              max="100"
              style={{ borderRadius: "10px", backgroundColor: "#e5e5e5" }}
            ></progress>
          </div>
          <div className="statName">
            <p className="justify-start">Applied</p>
            <p>View by employer</p>
            <p className="justify-end">Shortlisted</p>
          </div>
        </div>
      </div>
    </>
  );
}
