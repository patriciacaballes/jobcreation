import React from "react";
import "./DashOngoing.css";

export default function DashOngoing(props) {
  const { title, pcs, month, start, end, price } = props;

  return (
    <>
      <div className="project-container">
        <div className="project-title">
          <h1>{title}</h1>
        </div>
        <div className="project-info">
          <div className="project-pcs">
            <p>{pcs}</p>
          </div>
          <div className="project-date">
            <div className="month">
              <p>{month}</p>
              <p>deadline</p>
            </div>
            <div className="project-start-end dark">
              <p className="light">{start} START</p>
              <p>{end} END</p>
            </div>
          </div>
          <div className="project-price">
            <p>{price}</p>
          </div>
        </div>
      </div>
    </>
  );
}
