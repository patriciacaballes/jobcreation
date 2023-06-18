import React from 'react'
import "./JobCard.css"
import { Link } from 'react-router-dom'
import JobInformation from '../JobInformation/JobInformation'

  export default function JobCard({job}) {

  
  return (
    <>
    <div className="card-container">
      <div className="company-image">
        <img src={job.img} alt="company-img" />
      </div>
      <div className="job-info">
      <h2 className="job-title">{job.title}</h2>
      <h3 className="job-company">{job.company}</h3>
      <p className="job-description">{job.summery}</p>
      </div>
      
      <button className="btn-apply"><Link to={"/"+job.id}> Apply now </Link></button>
   
    </div>
    
    
    
    </>
  )
}






















// import React, { useState, useEffect } from "react";
// import { useAuth } from "../../../context/AuthProvider";
// import { supabase } from "../../../supabase/client";
// import "./JobCard.css";

// export default function JobCard() {
//   const { user } = useAuth();
//   const [jobTitle, setJobTitle] = useState("");
//   const [company, setCompany] = useState("");
//   const [jobSummery, setJobSummery] = useState("");

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
//             setJobSummery(data.jobSummery);
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
//         <p>{jobSummery}</p>
//       </div>
//     </>
//   );
// }
