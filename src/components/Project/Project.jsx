import React from "react";
import { useAuth } from "../../context/AuthProvider"
import { SideBar } from "../SideBar";
import BottomBar from "../BottomBar";
import "./Project.css"

// Dashboard

const Project = () => {
  const { user } = useAuth();
  return (
    <>
      <div className="layout" >
        <div id="sidebar">
          <SideBar />
        </div>
        <div id="project">Project</div>
      </div>
      <div className="bottom-bar">
        <BottomBar />
      </div>
    </>
  );
};

export default Project;
