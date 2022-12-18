import React from "react";
import Card from "../components/Card/Card";
import { ReactComponent as IconArcade } from "../assets/images/icon-arcade.svg";
import { ReactComponent as IconAdvanced } from "../assets/images/icon-advanced.svg";
import { ReactComponent as IconPro } from "../assets/images/icon-pro.svg";
import { useState } from "react";
import Header from "../components/Header/Header";

const Plan = () => {
  const [yearlyChecked, setYearlyChecked] = useState(false);

  const handleCheck = () => {
    setYearlyChecked(!yearlyChecked);
    console.log(yearlyChecked);
  };
  return (
    <section className="section section--plan">
      <Header
        title="Select your plan"
        description="You have the options of yearly or monthly billing."
      />
      <div className="container container--plan">
        <Card
          title="Arcade"
          price="9"
          icon=<IconArcade className="logo" />
          yearlyChecked={yearlyChecked}
        />
        <Card
          title="Advanced"
          price="12"
          icon=<IconAdvanced className="logo" />
          yearlyChecked={yearlyChecked}
        />
        <Card
          title="Pro"
          price="15"
          icon=<IconPro className="logo" />
          yearlyChecked={yearlyChecked}
        />
      </div>

      <div className="toggle-wrapper">
        <h3 className="toggle-title">Monthly</h3>
        <label className="switch">
          <input
            type="checkbox"
            className="switch__checkbox"
            onChange={() => handleCheck()}
          ></input>
          <span className="slider"></span>
        </label>
        <h3 className="toggle-title">Yearly</h3>
      </div>
    </section>
  );
};

export default Plan;
