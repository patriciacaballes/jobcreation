import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthProvider";
import { SideBar } from "../SideBar";
import BottomBar from "../BottomBar";
import "./JobOffer.css";
import JobCard from "./JobCard/JobCard";
import { supabase } from "../../supabase/client";
import { FaSearch } from "react-icons/fa";

const JobOffer = () => {
  const { user } = useAuth();
  console.log(user);
  const [fetchError, setFetchError] = useState(null);
  const [jobs, setJobs] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(1); //Cambiare questo se vuoi visualizzare n numeri per pagina

  useEffect(() => {
    const fetchJobs = async () => {
      if (user) {
        const { data, error } = await supabase.from("jobOffer").select();
        if (error) {
          setFetchError("Could not fetch the jobs");
          setJobs(null);
        } else if (data) {
          setJobs(data);
          setFetchError(null);
        }
      }
    };

    fetchJobs();
  }, [user]);

  // Filter jobs based on search term
  const filteredJobs = jobs
    ? jobs.filter((job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  // Pagination
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="layout">
      <div id="sidebar">
        <SideBar />
      </div>

      {/* JobsOffer */}
      <div id="jobOffer">
        <div className="jobCard">
          {/* Search Bar */}
          <div className="search-bar">
            <FaSearch />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Find your dream Job..."
            />
          </div>
          {/* Fetch Error */}
          {fetchError && <p>{fetchError}</p>}
          {/* Display Jobs */}
          <div className="jobs">
            {currentJobs.map((job) => (
              <JobCard job={job} key={job.id} />
            ))}
          </div>
          {/* Pagination */}
          {filteredJobs.length > jobsPerPage && (
            <div className="pagination">
              <ul className="pagination-list">
                {Array.from(
                  { length: Math.ceil(filteredJobs.length / jobsPerPage) },
                  (_, index) => (
                    <li
                      key={index + 1}
                      className={`pagination-item ${
                        currentPage === index + 1 ? "active" : ""
                      }`}
                    >
                      <button
                        onClick={() => paginate(index + 1)}
                        className="pagination-link"
                      >
                        {index + 1}
                      </button>
                    </li>
                  )
                )}
              </ul>
            </div>
          )}
        </div>
        {/* Filter */}
        <div className="filter">filter</div>
      </div>

      <div className="bottom-bar">
        <BottomBar />
      </div>
    </div>
  );
};

export default JobOffer;
