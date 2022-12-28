import React, { useEffect, useState } from "react";
import { Link, redirect } from "react-router-dom";

const Footer = ({ path, handleClick, prevStep, handleSubmit }) => {
  const [link, setLink] = useState("");
  const [backLink, setBackLink] = useState("");
  console.log(path);

  return (
    <footer className="footer">
      <div className="container">
        {/* <Link to={backLink}> */}

        <button
          type="button"
          // className={path === "/form/info" ? "hidden" : "btn btn--back"}
          className={path === 1 ? "transparent" : "btn btn--back"}
          onClick={prevStep}
        >
          Go back
        </button>
        {path === 4 ? (
          <button
            type="submit"
            className="btn btn--confirm"
            onClick={handleSubmit}
          >
            Confirm
          </button>
        ) : (
          <button type="button" className="btn" onClick={handleClick}>
            Next step
          </button>
        )}
      </div>
    </footer>
  );
};

export default Footer;
