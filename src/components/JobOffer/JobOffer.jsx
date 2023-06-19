import React from "react";
import { useAuth } from "../../context/AuthProvider";
import { SideBar } from "../SideBar";
import BottomBar from "../BottomBar";
import "./JobOffer.css";
import JobCard from "./JobCard/JobCard";
import { supabase } from "../../supabase/client";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
// Dashboard

const JobOffer = () => {
  const { user } = useAuth();
  console.log(user);
  const [fetchError, setFetchError] = useState(null);
  const [jobs, setjobs] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    const fetchjobs = async () => {
      if (user) {
        const { data, error } = await supabase.from("jobOffer").select();
        if (error) {
          setFetchError("Could not fetch the jobs");
          setjobs(null);
        } else if (data) {
          setjobs(data);
          setFetchError(null);
        }
      }
    };

    fetchjobs();
  }, [user]);
  console.log(jobs);
  // Search Bar
  const filteredJobs = jobs
    ? jobs.filter((job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <>
      <div className="layout">
        <div id="sidebar">
          <SideBar />
        </div>

        {/* JobsOffer */}
        <div id="jobOffer">
       
          <div className="jobCard">
          <div className="search-bar">
            <FaSearch />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Find your dream Job..."
            />
          </div>
            {fetchError && <p>{fetchError}</p>}
            {filteredJobs.map((job) => (
              <JobCard job={job} key={job.id} />
            ))}
          </div>
          {/* filter start */}
          <div className="filter">filter</div>
        </div>
      </div>

      <div className="bottom-bar">
        <BottomBar />
      </div>
    </>
  );
};

export default JobOffer;


