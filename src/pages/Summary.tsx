import React, { useState } from "react";
import { User } from "../App.js";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

interface SummaryProps {
  prevStep: Function;
  userInfo: User;
  handleSubmit: Function;
  step: number;
  handleChangePlan: Function;
}

const Summary: React.FC<SummaryProps> = ({
  prevStep,
  userInfo,
  handleSubmit,
  step,
  handleChangePlan,
}) => {
  const planPrice: number = userInfo.plan.price;

  const getAddonPrice = (): number[] => {
    const priceOfAddons: number[] = userInfo.addons.map((addon) => {
      if (addon.checked) {
        return addon.price;
      } else {
        return 0;
      }
    });

    return priceOfAddons;
  };

  const addonPrice: number[] = getAddonPrice();

  const getTotal = (): number => {
    let total: number = planPrice;
    const coef: number = userInfo.plan.yearly ? 10 : 1;

    addonPrice.map((price) => {
      return (total = total + price * coef);
    });

    return total;
  };

  return (
    <div>
      <section className="section section--summary">
        <Header
          title="Finishing up"
          description="Double-check everything is OK before confirming."
        />
        <div className="summary-main">
          <div className="container container--vertical">
            <div className="plan">
              <div className="plan__info">
                <h2 className="plan__info__title">
                  {userInfo.plan.name} (
                  {userInfo.plan.yearly ? "Yearly" : "Monthly"})
                </h2>
                <button
                  className="plan__info__change btn--change"
                  onClick={() => handleChangePlan()}
                >
                  Change
                </button>
              </div>
              <span className="plan__price">
                ${userInfo.plan.price}/{userInfo.plan.yearly ? "year" : "mo"}
              </span>
            </div>

            <div className="addons">
              <ul className="addon-list">
                {userInfo.addons.map((addon) => {
                  if (addon.checked) {
                    return (
                      <li className="addon" key={addon.id}>
                        <p className="addon__name">{addon.name}</p>
                        <span className="addon__price">
                          +$
                          {userInfo.plan.yearly
                            ? addon.price * 10
                            : addon.price}
                          /{userInfo.plan.yearly ? "year" : "mo"}
                        </span>
                      </li>
                    );
                  }
                  return false;
                })}
              </ul>
            </div>
          </div>
        </div>

        <footer className="section__footer">
          <p className="total-title">Total(per month)</p>
          <span className="total-price">
            ${getTotal()}/{userInfo.plan.yearly ? "year" : "mo"}
          </span>
        </footer>
      </section>
      <Footer
        path={userInfo.step}
        prevStep={prevStep}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Summary;
