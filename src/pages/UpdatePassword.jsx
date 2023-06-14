import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const UpdatePassword = () => {
  const { updatePassword } = useAuth();
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!passwordRef.current?.value || !confirmPasswordRef.current?.value) {
      setErrorMsg("Please fill all the fields");
      return;
    }
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      setErrorMsg("Passwords doesn't match. Try again");
      return;
    }
    try {
      setErrorMsg("");
      setLoading(true);
      const { data, error } = await updatePassword(passwordRef.current.value);
      if (!error) {
        navigate("/");
      }
    } catch (error) {
      setErrorMsg("Error in Updating Password. Please try again");
    }
    setLoading(false);
  };

  return (
    <>
      <div>
        <div.Body>
          <h2>Update Password</h2>
          <form onSubmit={handleSubmit}>
            <div id="password">
              <label>Password</label>
              <input type="password" ref={passwordRef} required />
            </div>
            <div id="confirm-password">
              <label>Confirm Password</label>
              <input type="password" ref={confirmPasswordRef} required />
            </div>
            {errorMsg && (
              <div
                variant="danger"
                onClose={() => setErrorMsg("")}
                dismissible>
                {errorMsg}
              </div>
            )}
            <div>
              <button disabled={loading} type="submit">
                Update
              </button>
            </div>
          </form>
        </div.Body>
      </div>
    </>
  );
};

export default UpdatePassword;
