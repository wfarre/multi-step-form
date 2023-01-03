import React, { useEffect } from "react";
import Card from "../components/Card/Card";
import { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const IconArcade: string = require("../assets/images/icon-arcade.svg").default;
const IconPro: string = require("../assets/images/icon-pro.svg").default;
const IconAdvanced: string =
  require("../assets/images/icon-advanced.svg").default;

export interface PlanObject {
  name: string;
  yearly: boolean;
  price: number;
}

interface PlanProps {
  prevStep: Function;
  plan: PlanObject;
  handleChoosePlan: Function;
  step: number;
}

const Plan: React.FC<PlanProps> = ({
  prevStep,
  plan,
  handleChoosePlan,
  step,
}) => {
  const [yearlyChecked, setYearlyChecked] = useState(plan.yearly);
  const [choosenPlan, setChoosenPlan] = useState({
    name: plan.name,
    yearly: plan.yearly,
    price: plan.price,
  });

  const handleCheck = (): void => {
    setYearlyChecked(!yearlyChecked);
  };

  useEffect(() => {
    const cards: any = document.querySelectorAll(".radio-input");

    const getPrice = (): number => {
      let rightPrice: number = 0;
      cards?.forEach((card: any) => {
        if (card?.checked) {
          const price: number = parseInt(
            card
              ?.closest(".card-wrapper")
              .querySelector(".card__type__price")
              .innerHTML.split("$")[1]
              .split("/")[0]
          );
          rightPrice = price;
        }
      });
      return rightPrice;
    };

    const newPrice = getPrice();
    setChoosenPlan({ ...choosenPlan, price: newPrice, yearly: yearlyChecked });
  }, [yearlyChecked]);

  const handleClick = () => {
    handleChoosePlan(choosenPlan);
  };

  const handleCardClick = (title: string, price: number) => {
    console.log(price);
    setChoosenPlan({ ...choosenPlan, price: price, name: title });
  };

  return (
    <div>
      <section className="section section--plan">
        <Header
          title="Select your plan"
          description="You have the options of yearly or monthly billing."
        />
        <div className="container container--plan">
          <Card
            title="Arcade"
            price={9}
            // icon=<IconArcade className="logo" />
            // icon={<img src={IconArcade} className="logo" alt=""></img>}
            src={IconArcade}
            alt=""
            yearlyChecked={yearlyChecked}
            // selected={true}
            handleChoosenPlan={(title: string, price: number) =>
              handleCardClick(title, price)
            }
            choosenPlan={choosenPlan}
          />
          <Card
            title="Advanced"
            price={12}
            // icon={<img src={IconAdvanced} className="logo" alt=""></img>}
            src={IconAdvanced}
            alt=""
            // icon=<IconAdvanced className="logo" />
            yearlyChecked={yearlyChecked}
            handleChoosenPlan={(title: string, price: number) =>
              handleCardClick(title, price)
            }
            choosenPlan={choosenPlan}
          />
          <Card
            title="Pro"
            price={15}
            // icon={<img src={IconPro} className="logo" alt=""></img>}
            src={IconPro}
            alt=""
            // icon=<IconPro className="logo" />
            yearlyChecked={yearlyChecked}
            handleChoosenPlan={(title: string, price: number) =>
              handleCardClick(title, price)
            }
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
          <h3 className="toggle-title toggle-title--yearly">Yearly</h3>
        </div>
      </section>
      <Footer path={step} prevStep={prevStep} handleClick={handleClick} />
    </div>
  );
};

export default Plan;
