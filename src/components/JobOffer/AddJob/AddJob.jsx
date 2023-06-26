import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "../../../supabase/client";
import BottomBar from "../../BottomBar";
import { SideBar } from "../../SideBar";
import "./AddJob.css";

const AddJob = () => {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [contract, setContract] = useState("");
  const [produce, setProduce] = useState("");
  const [description, setDescription] = useState("");
  const [summary, setSummary] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [requirements, setRequirements] = useState("");
  const [conditions, setConditions] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [salary, setSalary] = useState(0); // Default value is set to 0
  const [img, setImg] = useState("");
  const [isError, setIsError] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const validateForm = () => {
    if (
      title === "" ||
      company === "" ||
      location === "" ||
      contract === "" ||
      start === "" ||
      end === ""
    ) {
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    validateForm();

    if (!isFormValid) {
      return;
    }

    if (
      !title ||
      !company ||
      !location ||
      !contract ||
      !start ||
      !end ||
      !img
    ) {
      setIsError(true);
      return;
    }

    const { data, error } = await supabase.from("jobOffer").insert([
      {
        title,
        company,
        location,
        contract,
        produce,
        description,
        summary,
        responsibilities,
        requirements,
        conditions,
        start,
        end,
        salary,
        img,
      },
    ]);

    if (error) {
      console.error("Error adding job offer:", error.message);
    } else {
      console.log("Job offer added successfully:", data);
      // Reset form fields
      setTitle("");
      setCompany("");
      setLocation("");
      setContract("");
      setProduce("");
      setDescription("");
      setSummary("");
      setResponsibilities("");
      setRequirements("");
      setConditions("");
      setStart("");
      setEnd("");
      setSalary(0);
      setImg("");
      setShowModal(true);
    }
  };

  return (
    <>
      <div className="AddJob">
        <div className="layout">
          <div id="sidebar">
            <SideBar />
          </div>

          <form className="form-add-job" onSubmit={handleSubmit}>
            <div className="add-job-title">
            <h1>Add Job Offer</h1>
            <Link to="/job-offer" className=" btn-back" ><button className="btn-apply">Back</button> </Link>
            </div>
            
            <div className="add-main-info">
              <div className="add-title">
                <label>Title*</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div className="add-company">
                <label>Company*</label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  required
                />
              </div>

              <div className="add-salary">
                <label>Salary*</label>
                <input
                  type="number"
                  value={isNaN(salary) ? "" : salary}
                  onChange={(e) => setSalary(parseFloat(e.target.value))}
                />
              </div>

              <div className="add-contractrequired">
                <label>Contract*</label>
                <input
                  type="text"
                  value={contract}
                  onChange={(e) => setContract(e.target.value)}
                  required
                />
              </div>

              <div className="add-start">
                <label>Start*</label>
                <input
                  type="date"
                  value={start}
                  onChange={(e) => setStart(e.target.value)}
                  required
                />
              </div>

              <div className="add-end">
                <label>End*</label>
                <input
                  type="date"
                  value={end}
                  onChange={(e) => setEnd(e.target.value)}
                  required
                />
              </div>

              <div className="add-items">
                <label>Items to Produce:</label>
                <input
                  type="text"
                  value={produce}
                  onChange={(e) => setProduce(e.target.value)}
                />
              </div>

              <div className="add-location">
                {" "}
                <label>Location*</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-job-info">
              <div className="add-image-url">
                <label>Image URL*</label>
                <input
                  type="text"
                  value={img}
                  onChange={(e) => setImg(e.target.value)}
                  required
                />
              </div>

              <div className="add-summary">
                <label>Summary:</label>
                <textarea
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                />
              </div>

              <div className="add-description">
                <label> Job Description:</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="add-responsibilities">
                <label>Key Responsibilities:</label>
                <textarea
                  value={responsibilities}
                  onChange={(e) => setResponsibilities(e.target.value)}
                />
              </div>

              <div className="add-requirements">
                <label>Requirements:</label>
                <textarea
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                />
              </div>

              <div className="add-conditions">
                <label>Conditions:</label>
                <textarea
                  value={conditions}
                  onChange={(e) => setConditions(e.target.value)}
                />
              </div>
            </div>

            <div className="flex-right">
              {isError && (
                <p className="error-message">
                  Please fill in all the required fields.
                </p>
              )}
              <button
  className="btn-add-job btn-apply"
  type="submit"
  onClick={() => {
    if (isFormValid) {
      window.my_modal_2.showModal();
    }
  }}
>
                Add
              </button>
            </div>
          </form>

          <dialog id="my_modal_2" className="modal">
            <form method="dialog" className="modal-box">
              <h3>Success!</h3>
              <p>Job successfully added</p>
              <div className="modal-action">
              <button className="btn-close" onClick={closeModal}>
                Close
              </button>
</div>
            </form>
          </dialog>
        </div>
      </div>
      <div className="bottom-bar">
        <BottomBar />
      </div>
    </>
  );
};

export default AddJob;
