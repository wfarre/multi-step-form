import React from "react";

const Card = ({
  icon,
  title,
  price,
  yearlyChecked,
  selected,
  handleChoosenPlan,
  choosenPlan,
}) => {
  const handleChange = (e) => {
    const cardWrapper = e.target.closest(".card-wrapper");
    console.log(e.target.closest(".card-wrapper"));
    const cardTitle = cardWrapper.querySelector(".card__type__title");
    const cardPrice = cardWrapper.querySelector(".card__type__price");

    console.log(cardPrice.innerHTML.split("$")[1].split("/")[0]);
    const price = parseInt(cardPrice.innerHTML.split("$")[1].split("/")[0]);

    handleChoosenPlan(cardTitle.innerHTML, price);
  };
  return (
    <label className="card-wrapper" htmlFor={"radio-card-" + title}>
      <input
        type={"radio"}
        name="radio-card"
        id={"radio-card-" + title}
        className="radio-input"
        checked={
          choosenPlan.name.toLowerCase() === title.toLowerCase() ? true : false
        }
        // checked={selected}
        onChange={handleChange}
      />
      <div className="card">
        <div className="logo-wrapper">{icon}</div>
        <div className="card__info">
          <div className="card__type">
            <h2 className="card__type__title">{title}</h2>
            <p className="card__type__price">
              ${yearlyChecked ? price * 10 : price}/
              {yearlyChecked ? "year" : "month"}
            </p>
          </div>
          <span
            className={yearlyChecked ? "card__promo " : "card__promo hidden"}
          >
            2 month free
          </span>
        </div>
      </div>
    </label>
  );
};

export default Card;
