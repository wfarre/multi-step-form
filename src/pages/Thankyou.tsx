import React from "react";
// import { ReactComponent as Checkmark } from "../assets/images/icon-thank-you.svg";
const Checkmark: string =
  require("../assets/images/icon-thank-you.svg").default;

const Thankyou: React.FC = () => {
  return (
    <section className="section section--thankyou">
      <header>
        <div className="logo-wrapper">
          {/* <Checkmark className="logo" /> */}
          <img src={Checkmark} alt="" className="logo"></img>
        </div>
        <h1 className="section__header__title">Thank you</h1>
      </header>
      <div className="section__main">
        <p className="section__main__content">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </section>
  );
};

export default Thankyou;
