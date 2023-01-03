import React, { useState } from "react";
// import { ReactComponent as CheckIcon } from "../../assets/images/icon-checkmark.svg";
const CheckIcon: string =
  require("../../assets/images/icon-checkmark.svg").default;

interface AddonCardProps {
  handleCheck: Function;
  title: string;
  description: string;
  price: number;
  id: string;
  checked: boolean;
  yearlyChecked: boolean;
}

const AddonCard: React.FC<AddonCardProps> = ({
  handleCheck,
  title,
  description,
  price,
  id,
  checked,
  yearlyChecked,
}) => {
  const [inputChecked, setInputChecked] = useState(checked);

  const handleChange = () => {
    console.log("chekeyeyeye");
    setInputChecked(!inputChecked);
    handleCheck(!inputChecked, id);
  };

  return (
    <div>
      <label className="card-wrapper card-wrapper--addon" htmlFor={id}>
        <input
          type={"checkbox"}
          className="check"
          id={id}
          onChange={handleChange}
          checked={inputChecked}
        />
        <div className="card card--addon">
          {/* <div className="checkbox-wrapper"> */}
          <div className="checkbox">
            {/* <CheckIcon /> */}
            <img src={CheckIcon} alt="" />
          </div>
          {/* </div> */}
          <div className="card__type">
            <h2 className="card__type__title">{title}</h2>
            <p className="card__type__text">{description}</p>
          </div>
          <div className="card__price">
            <span className="card__price__content">
              +${price}/{yearlyChecked ? "year" : "mo"}
            </span>
          </div>
        </div>
      </label>
    </div>
  );
};

export default AddonCard;
