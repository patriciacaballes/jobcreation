import React from "react";
import "./DashProject.css";
// import { useAuth } from "../../../context/AuthProvider";
import { FaArchive, FaFile, FaCheckCircle } from "react-icons/fa";

export default function DashProject() {
  return (
    <>
      <div className="dashProject" id="dashProject">
        {/* project 1 */}
        <div className="project-card">
          <div className="flex-col">
            <div className="flex-row">
              <div>
                <FaArchive />
              </div>
              <div>10</div>
            </div>
            <div className="project-title">project application</div>
          </div>
        </div>
        {/* End Project 1 */}
        {/* project 2 */}
        <div className="project-card">
          <div className="flex-col">
            <div className="flex-row">
              <div>
                <FaFile />
              </div>
              <div>5</div>
            </div>
            <div className="project-title">work In Progress</div>
          </div>
        </div>
        {/* End Project 2 */}
        {/* project 3 */}
        <div className="project-card">
          <div className="flex-col">
            <div className="flex-row">
              <div>
                <FaCheckCircle />
              </div>
              <div>5</div>
            </div>
            <div className="project-title">Submitted Project</div>
          </div>
        </div>
        {/* End Project 3 */}
      </div>
    </>
  );
}
