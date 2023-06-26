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
        <div id="settings">
        <h1 className="title-settings">Settings</h1>
        <h1>
          Work in progress
          we apologise for any inconvenience caused
          </h1>
        </div>
      </div>
      <div className="bottom-bar">
        <BottomBar />
      </div>
    </>
  );
};

export default Settings;
