import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = ({ path }) => {
  const [link, setLink] = useState("");
  const [backLink, setBackLink] = useState("");

  useEffect(() => {
    switch (path) {
      case "/form/info":
        setLink("/form/plan");
        break;
      case "/form/plan":
        setLink("/form/addon");
        setBackLink("/form/info");
        break;
      case "/form/addon":
        setLink("/form/summary");
        setBackLink("/form/plan");

        break;
      case "/form/summary":
        setLink("/form/thankyou");
        setBackLink("/form/addon");

        break;

      default:
        break;
    }
  }, [path]);

  return (
    <footer className="footer">
      <div className="container">
        <Link to={backLink}>
          <button type="button" className="btn btn--back">
            Go back
          </button>
        </Link>
        <Link to={link}>
          <button type="button" className="btn">
            Next step
          </button>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
