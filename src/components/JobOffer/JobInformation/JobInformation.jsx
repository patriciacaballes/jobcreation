import React, { useState, useEffect } from "react";
import "./JobInformation.css";
import { useParams, useNavigate, Link } from "react-router-dom";
import { SideBar } from "../../SideBar";
import BottomBar from "../../BottomBar";
import { useAuth } from "../../../context/AuthProvider";
import { supabase } from "../../../supabase/client";

export default function JobInformation() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [contract, setContract] = useState("");
  const [produce, setProduce] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [conditions, setConditions] = useState("");
  const [requirements, setRequirements] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");
  const { user } = useAuth();

  const handleApplyNow = async () => {
    // Aggiungo in Application i progetti || lavori una volta premuto apply
    const jobID = id;
    const { data, error } = await supabase
      .from("applications")
      .insert([{ user_id: user.id, job_id: jobID }]);

    // Visualizzare il messaggio di successo o eseguire altre azioni desiderate
    window.my_modal_1.showModal();
  };

  useEffect(() => {
    const fetchJobs = async () => {
      const { data, error } = await supabase
        .from("jobOffer")
        .select()
        .eq("id", id)
        .single();

      if (error) {
        navigate("/", { replace: true });
      }

      if (data) {
        setTitle(data.title);
        setCompany(data.company);
        setLocation(data.location);
        setSalary(data.salary);
        setContract(data.contract);
        setProduce(data.produce);
        setResponsibilities(data.responsibilities);
        setConditions(data.conditions);
        setRequirements(data.requirements);
        setStart(data.start);
        setEnd(data.end);
        setImg(data.img);
        setDescription(data.description);
      }
    };

    fetchJobs();
  }, [id, navigate]);

  return (
    <>
      <div className="layout">
        <div id="sidebar">
          <SideBar />
        </div>

        <div className="info-container">
          <div className="main-info">
            <img src={img} alt="company img" />
            <div className="job-info">
              {title && (
                <h1>
                  Job Title: <span>{title}</span>
                </h1>
              )}
              {company && (
                <h1>
                  Company: <span>{company}</span>
                </h1>
              )}
              {location && (
                <h1>
                  Location: <span>{location}</span>
                </h1>
              )}
              {salary && (
                <h1>
                  Salary: <span>{salary}</span>
                </h1>
              )}
              {contract && (
                <h1>
                  Contract: <span>{contract}</span>
                </h1>
              )}
              {produce && (
                <h1>
                  produce to be produced: <span>{produce}</span>
                </h1>
              )}
              {start && (
                <h1>
                  Start: <span>{start}</span>
                </h1>
              )}
              {end && (
                <h1>
                  End: <span>{end}</span>
                </h1>
              )}
            </div>
            <button className="btn-apply" onClick={handleApplyNow}>
              apply now
            </button>
            <dialog id="my_modal_1" className="modal">
              <form method="dialog" className="modal-box">
                <h3>Success!</h3>
                <p>Your application has been successfully submitted</p>
                <div className="modal-action">
                  <Link to="/job-offer">
                    <button className="btn-close">Close</button>
                  </Link>
                </div>
              </form>
            </dialog>
          </div>
          {description && (
            <div className="description">
              <h1>Job Description</h1>
              <p>{description}</p>
            </div>
          )}
          {responsibilities && (
            <div className="responsibilities">
              <h1>Key Responsibilities</h1>
              <p>{responsibilities}</p>
            </div>
          )}
          {requirements && (
            <div className="requirements">
              <h1>Requirements</h1>
              <p>{requirements}</p>
            </div>
          )}
          {conditions && (
            <div className="working-conditions">
              <h1>Working Conditions</h1>
              <p>{conditions}</p>
              <p></p>
            </div>
          )}
        </div>
      </div>
      <div className="bottom-bar">
        <BottomBar />
      </div>
    </>
  );
}
