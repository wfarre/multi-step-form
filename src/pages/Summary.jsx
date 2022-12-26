import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Summary = ({ prevStep, userInfo }) => {
  const params = useParams();
  console.log(params);

  const planPrice = userInfo.plan.price;
  // const [addonPrice, setAddonPrice] = useState([]);
  const getAddonPrice = () => {
    const addonPrice = [];

    userInfo.addons.map((addon) => {
      if (addon.checked) {
        addonPrice.push(addon.price);
      }
    });
    return addonPrice;
    // setAddonPrice(addonPrice);
  };
  const addonPrice = getAddonPrice();

  const getTotal = () => {
    let total = planPrice;
    const coef = userInfo.plan.yearly ? 10 : 1;

    addonPrice.map((price) => {
      return (total = parseInt(total) + parseInt(price) * coef);
    });

    return total;
  };

  return (
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
              <a href="" className="plan__info__change">
                Change
              </a>
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
                        {userInfo.plan.yearly ? addon.price * 10 : addon.price}/
                        {userInfo.plan.yearly ? "year" : "mo"}
                      </span>
                    </li>
                  );
                }
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

      <Footer path={"/form/summary"} prevStep={prevStep} />
    </section>
  );
};

export default Summary;
