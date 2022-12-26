import React, { useEffect, useState } from "react";
import { Link, redirect } from "react-router-dom";

const Footer = ({ path, handleClick, prevStep }) => {
  const [link, setLink] = useState("");
  const [backLink, setBackLink] = useState("");

  // console.log(error);

  // useEffect(
  //   ({ prevStep }) => {
  //     switch (path) {
  //       case "/form/info":
  //         setLink("/form/plan");
  //         break;
  //       case "/form/plan":
  //         setLink("/form/addon");
  //         setBackLink("/form/info");
  //         break;
  //       case "/form/addon":
  //         setLink("/form/summary");
  //         setBackLink("/form/plan");

  //         break;
  //       case "/form/summary":
  //         setLink("/form/thankyou");
  //         setBackLink("/form/addon");

  //         break;

  //       default:
  //         break;
  //     }
  //   },
  //   [path]
  // );

  // function handleSubmit(e) {
  //   e.preventDefaul();
  //   // checkForm();
  //   console.log(e);
  // }

  return (
    <footer className="footer">
      <div className="container">
        {/* <Link to={backLink}> */}
        <button
          type="button"
          // className={path === "/form/info" ? "hidden" : "btn btn--back"}
          className="btn btn--back"
          onClick={prevStep}
        >
          Go back
        </button>
        {/* </Link> */}
        {/* <Link to={error ? path : link}> */}
        <button type="button" className="btn" onClick={handleClick}>
          {path === "/form/summary" ? "Comfirm" : "Next step"}
        </button>
        {/* </Link> */}
      </div>
    </footer>
  );
};

export default Footer;
