import React from "react";
import "./JobCard.css";
import { Link } from "react-router-dom";
import JobInformation from "../JobInformation/JobInformation";

export default function JobCard({ job,btn }) {
  return (
    <>
      <div className="card-container">
        <div className="company-image">
          <img src={job.img} alt="company-img" />
        </div>
        <div className="job-info">
          <h2 className="job-title">{job.title}</h2>
          <h3 className="job-company">{job.company}</h3>
          <p className="job-description">{job.summary}</p>
        </div>

        <Link to={"/" + job.id}>
          <button className="btn-apply">
            {btn}
          </button>
        </Link>
      </div>
    </>
  );
}

// import React, { useState, useEffect } from "react";
// import { useAuth } from "../../../context/AuthProvider";
// import { supabase } from "../../../supabase/client";
// import "./JobCard.css";

// export default function JobCard() {
//   const { user } = useAuth();
//   const [jobTitle, setJobTitle] = useState("");
//   const [company, setCompany] = useState("");
//   const [jobSummary, setJobSummary] = useState("");

//   useEffect(() => {
//     const fetchJob = async () => {
//       if (user) {
//         try {
//           let { data, error } = await supabase
//           .from('jobOffer')
//         .select('*')

//           if (error) {
//             console.error("Error while retrieving job details:", error);
//           } else if (data) {
//             setJobSummary(data.jobSummary);
//             setJobTitle(data.jobTitle);
//             setCompany(data.company);
//           }
//         } catch (error) {
//           console.error("Error while retrieving job details:", error);
//         }
//       }
//     };
//     console.log(data)

//     fetchJob();
//   }, [user]);

//   return (
//     <>
//       <div className="job-card">
//         <h3>{jobTitle}</h3>
//         <p>{company}</p>
//         <p>{jobSummary}</p>
//       </div>
//     </>
//   );
// }
