import React from "react";
import { useAuth } from "../../context/AuthProvider"
import { SideBar } from "../SideBar";
import BottomBar from "../BottomBar";
import "./Settings.css"
// Dashboard

const Settings = () => {
  const { user } = useAuth();
  return (
    <>
      <div className="layout" >
        <div id="sidebar">
          <SideBar />
        </div>
        <div id="settings">Settings</div>
      </div>
      <div className="bottom-bar">
        <BottomBar />
      </div>
    </>
  );
};

export default Settings;
