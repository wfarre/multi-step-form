import React from "react";
import { ReactComponent as CheckIcon } from "../assets/images/icon-checkmark.svg";
import Header from "../components/Header/Header";

const Addon = () => {
  return (
    <section className="section section--addon">
      <Header
        title="Pick add-ons"
        description="Add-ons help enhance your gaming experience."
      />
      <div className="container container--vertical">
        <label className="card-wrapper card-wrapper--addon" htmlFor="check-1">
          <input type={"checkbox"} className="check" id="check-1" />
          <div className="card card--addon">
            {/* <div className="checkbox-wrapper"> */}
            <div className="checkbox">
              <CheckIcon />
            </div>
            {/* </div> */}
            <div className="card__type">
              <h2 className="card__type__title">Online service</h2>
              <p className="card__type__text">Access to multiplayer games</p>
            </div>
            <div className="card__price">
              <span className="card__price__content">+$10/year</span>
            </div>
          </div>
        </label>

        <label className="card-wrapper card-wrapper--addon" htmlFor="check-2">
          <input type={"checkbox"} className="check" id="check-2" />
          <div className="card card--addon">
            <div className="checkbox-wrapper">
              <div className="checkbox">
                <CheckIcon />
              </div>
            </div>
            <div className="card__type">
              <h2 className="card__type__title">Online service</h2>
              <p className="card__type__text">Access to multiplayer games</p>
            </div>
            <div className="card__price">
              <span className="card__price__content">+$10/year</span>
            </div>
          </div>
        </label>

        <label className="card-wrapper card-wrapper--addon" htmlFor="check-3">
          <input type={"checkbox"} className="check" id="check-3" />
          <div className="card card--addon">
            <div className="checkbox-wrapper">
              <div className="checkbox">
                <CheckIcon />
              </div>
            </div>
            <div className="card__type">
              <h2 className="card__type__title">Online service</h2>
              <p className="card__type__text">Access to multiplayer games</p>
            </div>
            <div className="card__price">
              <span className="card__price__content">+$10/year</span>
            </div>
          </div>
        </label>
      </div>
    </section>
  );
};

export default Addon;
