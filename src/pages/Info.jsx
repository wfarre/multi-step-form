import React from "react";
import Header from "../components/Header/Header";

const Info = () => {
  return (
    <div>
      <section className="section section--info">
        <Header
          title="Personal info"
          description="Please provide your name, email address, and phone number."
        />
        <form className="form">
          <div className="form__element">
            <label className="form__element__label" htmlFor="fname">
              Name
            </label>
            <input
              className="form__element__input"
              type={"text"}
              id="fname"
              name="fname"
              placeholder="e.g. Stephen King"
            />
          </div>
          <div className="form__element">
            <label className="form__element__label" htmlFor="email">
              Email address
            </label>
            <input
              className="form__element__input"
              type={"text"}
              id="email"
              name="email"
              placeholder="e.g. stephenking@lorem.com"
            />
          </div>
          <div className="form__element">
            <label className="form__element__label" htmlFor="phone">
              Phone number
            </label>
            <input
              className="form__element__input"
              type={"text"}
              id="phone"
              name="phone"
              placeholder="e.g. +1 234 567 890"
            />
          </div>
        </form>
      </section>
    </div>
  );
};

export default Info;
