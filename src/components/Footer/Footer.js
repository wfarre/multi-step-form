"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Footer = function (_a) {
    var path = _a.path, handleClick = _a.handleClick, prevStep = _a.prevStep, handleSubmit = _a.handleSubmit;
    var _b = (0, react_1.useState)(""), link = _b[0], setLink = _b[1];
    var _c = (0, react_1.useState)(""), backLink = _c[0], setBackLink = _c[1];
    console.log(path);
    return (<footer className="footer">
      <div className="container">
        {/* <Link to={backLink}> */}

        <button type="button" 
    // className={path === "/form/info" ? "hidden" : "btn btn--back"}
    className={path === 1 ? "transparent" : "btn btn--back"} onClick={function () { return prevStep; }}>
          Go back
        </button>
        {path === 4 ? (<button type="submit" className="btn btn--confirm" onClick={function () { return handleSubmit; }}>
            Confirm
          </button>) : (<button type="button" className="btn" onClick={function () { return handleClick; }}>
            Next step
          </button>)}
      </div>
    </footer>);
};
exports["default"] = Footer;
