import React from "react";

interface FooterProps {
  path: number;
  handleClick?: Function;
  prevStep?: Function;
  handleSubmit?: Function;
}

const Footer: React.FC<FooterProps> = ({
  path,
  handleClick,
  prevStep,
  handleSubmit,
}) => {
  return (
    <footer className="footer">
      <div className="container">
        {/* <Link to={backLink}> */}

        <button
          type="button"
          // className={path === "/form/info" ? "hidden" : "btn btn--back"}
          className={path === 1 ? "transparent" : "btn btn--back"}
          onClick={() => prevStep !== undefined && prevStep()}
        >
          Go back
        </button>
        {path === 4 ? (
          <button
            type="submit"
            className="btn btn--confirm"
            onClick={() => handleSubmit !== undefined && handleSubmit()}
          >
            Confirm
          </button>
        ) : (
          <button
            type="button"
            className="btn"
            onClick={(e) => handleClick !== undefined && handleClick(e)}
          >
            Next step
          </button>
        )}
      </div>
    </footer>
  );
};

export default Footer;
