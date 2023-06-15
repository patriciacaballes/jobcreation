import React from "react";
import { useAuth } from "../context/AuthProvider";
import { SideBar } from "../components/SideBar";
import BottomBar from "../components/BottomBar";
// Dashboard

const Home = () => {
  const { user } = useAuth();
  return (
    <>
      <div className="layout" id="home">
        <div id="sidebar">
          <SideBar />
        </div>
        <div>Home</div>
      </div>
      <div className="bottom-bar">
        <BottomBar />
      </div>
    </>
  );
};

export default Home;
