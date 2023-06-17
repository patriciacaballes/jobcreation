import React from "react";
import { useAuth } from "../../context/AuthProvider";
import { SideBar } from "../SideBar";
import BottomBar from "../BottomBar";
import DashProject from "./DashProject/DashProject";
import "./Dashboard.css";
import DashGallery from "./DashGallery/DashGallery";
import DashAppStat from "./DashAppStat/DashAppStat";
import DashOngoing from "./DashOngoing/DashOngoing";

const Dashboard = () => {
  const { user } = useAuth();
  return (
    <>
      <div className="layout">
        <div id="sidebar">
          <SideBar />
        </div>
        {/* Dashboard */}
        <div className="dash-main-container" id="dashboard">
          <div className="dash-container1">
            <div className="">
              <DashProject />
            </div>
            <div className="">
              <DashGallery />
            </div>
            <div className="">
              <DashAppStat />
            </div>

            {/* <Gallery /> */}
            {/* <AppStat/> */}
          </div>
          <div className="dash-container2">
            <div className="dash-ongoing-project">
              <DashOngoing
                title="Sewing face mask"
                pcs="200pcs"
                month="1 month"
                start="08/03/23"
                end="08/03/23"
                price="€300"
              />
            </div>
            <div className="dash-ongoing-project">
            <DashOngoing
                title="Paper flower backdrop"
                pcs="200pcs"
                month="1 month"
                start="08/03/23"
                end="08/05/23"
                price="€350"
              />
            </div>
            <div className="dash-ongoing-project">
            <DashOngoing
                title="Custom t-shirt Printing "
                pcs="200pcs"
                month="2 months "
                start="08/03/23"
                end="08/05/23"
                price="€500"
              />
            </div>
            <div className="dash-ongoing-project">
            <DashOngoing
                title="Necklace"
                pcs="200pcs"
                month="1 month "
                start="08/04/23"
                end="08/05/23"
                price="€200"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-bar">
        <BottomBar />
      </div>
    </>
  );
};

export default Dashboard;
