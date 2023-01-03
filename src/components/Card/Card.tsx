import React from "react";
import { PlanObject } from "../../pages/Plan";

interface CardProps {
  // icon?: iconElement;
  alt: string;
  src: string;
  title: string;
  price: number;
  yearlyChecked: boolean;
  handleChoosenPlan: Function;
  choosenPlan: PlanObject;
}

const Card: React.FC<CardProps> = ({
  // icon,
  alt,
  src,
  title,
  price,
  yearlyChecked,
  handleChoosenPlan,
  choosenPlan,
}) => {
  const handleChange = (e: any) => {
    const cardWrapper = (e.target as Element)?.closest(".card-wrapper");
    const cardTitle = cardWrapper?.querySelector(".card__type__title");
    const cardPrice = cardWrapper?.querySelector(".card__type__price");

    const price: number =
      cardPrice?.innerHTML !== undefined
        ? parseInt(cardPrice?.innerHTML.split("$")[1].split("/")[0])
        : 0;

    handleChoosenPlan(cardTitle?.innerHTML, price);
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
        onChange={(e) => handleChange(e)}
      />
      <div className="card">
        <div className="logo-wrapper">
          {/* {icon} */}
          <img src={src} alt={alt} className="logo" />
        </div>
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
