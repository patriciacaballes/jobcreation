import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthProvider";
import { SideBar } from "../SideBar";
import BottomBar from "../BottomBar";
import "./Project.css";
import { supabase } from "../../supabase/client";
import JobCard from "../JobOffer/JobCard/JobCard";

// Dashboard

const Project = () => {
  const { user } = useAuth();
  const [fetchError, setFetchError] = useState(null);
  const [applications, setApplications] = useState([]);

  const profileId = user?.id; //per ottenere id autenticato
  useEffect(() => {
    const fetchProjects = async () => {
      if (user) {
        let { data, error } = await supabase.from("applications").select("job_id(*) , id").eq("user_id",user?.id);
        if (error) {
          setFetchError("Could not fetch the jobs");
          setApplications(null);
        } else if (data) {
          setApplications(data);
          setFetchError(null);
          console.log(data)
        }
      }
    };
    fetchProjects();
  }, [user]);
  return (
    <>
      <div className="layout">
        <div id="sidebar">
          <SideBar />
        </div>
        <div id="project">
               
        {applications && applications.map((application) => (

  <JobCard job={application.job_id} key={application.job_id.id}
  />

  
))}
</div>
      </div>
      <div className="bottom-bar">
        <BottomBar />
      </div>
    </>
  );
};

export default Project;


  // <div key={application.id}>

  //  <p> {application.job_id.title}
  //   id
  //   {application.id}
  //   </p>
  // </div>
  // fine ciclo