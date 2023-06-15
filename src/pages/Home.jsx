import React from "react";
import { useAuth } from "../context/AuthProvider";
import { SideBar } from "../components/SideBAr";
// Dashboard

const Home = () => {
  const { user } = useAuth();
  
  return (
  <div className="home layout">
    <div id="sidebar">
      <SideBar />
    </div>
    <div>
      Ciao
    </div>

    
  </div>)
};

export default Home;
