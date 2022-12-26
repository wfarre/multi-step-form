import React, { useEffect } from "react";
import Card from "../components/Card/Card";
import { ReactComponent as IconArcade } from "../assets/images/icon-arcade.svg";
import { ReactComponent as IconAdvanced } from "../assets/images/icon-advanced.svg";
import { ReactComponent as IconPro } from "../assets/images/icon-pro.svg";
import { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Plan = ({ prevStep, plan, handleChoosePlan }) => {
  const [yearlyChecked, setYearlyChecked] = useState(plan.yearly);
  const [choosenPlan, setChoosenPlan] = useState({
    name: plan.name,
    yearly: plan.yearly,
    price: plan.price,
  });

  const handleCheck = () => {
    setYearlyChecked(!yearlyChecked);

    console.log(yearlyChecked);
  };

  useEffect(() => {
    const cards = document.querySelectorAll(".radio-input");

    const getPrice = () => {
      let rightPrice;
      cards.forEach((card) => {
        if (card.checked) {
          const price = parseInt(
            card
              .closest(".card-wrapper")
              .querySelector(".card__type__price")
              .innerHTML.split("$")[1]
              .split("/")[0]
          );
          rightPrice = price;
        }
      });
      return rightPrice;
    };
    // const selectedCardPrice = getPrice();

    const newPrice = getPrice();
    setChoosenPlan({ ...choosenPlan, price: newPrice, yearly: yearlyChecked });
  }, [yearlyChecked]);

  const handleClick = () => {
    handleChoosePlan(choosenPlan);
  };

  const handleCardClick = (title, price) => {
    console.log(price);
    setChoosenPlan({ ...choosenPlan, price: price, name: title });
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
          // selected={true}
          handleChoosenPlan={(title, price) => handleCardClick(title, price)}
          choosenPlan={choosenPlan}
        />
        <Card
          title="Advanced"
          price="12"
          icon=<IconAdvanced className="logo" />
          yearlyChecked={yearlyChecked}
          handleChoosenPlan={(title, price) => handleCardClick(title, price)}
          choosenPlan={choosenPlan}
        />
        <Card
          title="Pro"
          price="15"
          icon=<IconPro className="logo" />
          yearlyChecked={yearlyChecked}
          handleChoosenPlan={(title, price) => handleCardClick(title, price)}
          choosenPlan={choosenPlan}
        />
      </div>

      <div className="toggle-wrapper">
        <h3 className="toggle-title">Monthly</h3>
        <label className="switch">
          <input
            type="checkbox"
            className="switch__checkbox"
            onChange={() => handleCheck()}
            checked={yearlyChecked}
          ></input>
          <span className="slider"></span>
        </label>
        <h3 className="toggle-title">Yearly</h3>
      </div>
      <Footer
        path={"/form/plan"}
        prevStep={prevStep}
        handleClick={handleClick}
      />
    </section>
  );
};

export default Plan;
