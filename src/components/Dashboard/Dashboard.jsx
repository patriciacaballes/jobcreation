import React from "react";
import { useAuth } from "../../context/AuthProvider";
import { SideBar } from "../SideBar";
import BottomBar from "../BottomBar";
// Dashboard

const Dashboard = () => {
  const { user } = useAuth();
  return (
    <>
      <div className="layout">
        <div id="sidebar">
          <SideBar />
        </div>
        <div  id="dashboard">dashboard</div>
      </div>
      <div className="bottom-bar">
        <BottomBar />
      </div>
    </>
  );
};

export default Dashboard;
