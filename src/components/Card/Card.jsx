import React from "react";

const Card = ({ icon, title, price, yearlyChecked }) => {
  return (
    <label className="card-wrapper" htmlFor={"radio-card-" + title}>
      <input
        type={"radio"}
        name="radio-card"
        id={"radio-card-" + title}
        className="radio-input"
      />
      <div className="card">
        <div className="logo-wrapper">{icon}</div>
        <div className="card__type">
          <h2 className="card__type__title">{title}</h2>
          <p className="card__type__price">${price}/month</p>
        </div>
        <span className={yearlyChecked ? "card__promo " : "card__promo hidden"}>
          2 month free
        </span>
      </div>
    </label>
  );
};

export default Card;
