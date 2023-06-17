import React from 'react'
import { supabase } from '../../../supabase/client'
import { useAuth } from '../../../context/AuthProvider'
import { useState,useEffect } from 'react'



  // console.log(supabase)

  export default function JobCard() {
    const { user } = useAuth();
    console.log(user)
    const [fetchError, setFetchError] = useState(null)
    const [job, setjob] = useState(null)
  
    useEffect(() => {
      const fetchjob = async () => {
        if (user) {
        const { data, error } = await supabase
          .from('jobOffer')
          .select()
        
        
        if (error) {
          setFetchError('Could not fetch the job')
          setjob(null)
        }else if (data) {
          setjob(data)
          setFetchError(null)
        }
        }
      }
  
      fetchjob()
  
    }, [user])
    console.log(job)
  
  return (
    <div>
      {fetchError && (<p>{fetchError}</p>)}
      {job && (
        <div className="job">
          {/* order-by buttons */}
          <p>Ciao{job[0].company}</p>
        </div>
      )}
    </div>
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
