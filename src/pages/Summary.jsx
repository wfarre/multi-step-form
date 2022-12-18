import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";

const Summary = () => {
  const params = useParams();
  console.log(params);

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
              <h2 className="plan__info__title">Arcade (Monthly)</h2>
              <a href="" className="plan__info__change">
                Change
              </a>
            </div>
            <span className="plan__price">$9/mo</span>
          </div>

          <div className="addons">
            <ul className="addon-list">
              <li className="addon">
                <p className="addon__name">Online storage service</p>
                <span className="addon__price">+$1/mo</span>
              </li>
              <li className="addon">
                <p className="addon__name">Online storage service</p>
                <span className="addon__price">+$1/mo</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <footer className="section__footer">
        <p className="total-title">Total(per month)</p>
        <span className="total-price">$12/mo</span>
      </footer>
    </section>
  );
};

export default Summary;
