import React, { useState } from "react";
import AddonCard from "../components/AddonCard/AddonCard";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export interface AddonObject {
  id: string;
  name: string;
  description: string;
  price: number;
  checked: boolean;
}

interface AddonProps {
  prevStep: Function;
  addons: AddonObject[];
  handleAddons: Function;
  yearlyChecked: boolean;
  step: number;
}

const Addon: React.FC<AddonProps> = ({
  prevStep,
  addons,
  handleAddons,
  yearlyChecked,
  step,
}) => {
  const [addonsArray, setAddonsArray] = useState([...addons]);

  const handleCheck = (isChecked: boolean, id: string): void => {
    const newState = addonsArray.map((addon) => {
      if (addon.id === id) {
        console.log(addon);
        return { ...addon, checked: isChecked };
      }
      return addon;
    });

    setAddonsArray(newState);
  };

  const handleClick = (): void => {
    handleAddons(addonsArray);
  };

  return (
    <div>
      <section className="section section--addon">
        <Header
          title="Pick add-ons"
          description="Add-ons help enhance your gaming experience."
        />
        <div className="container container--vertical">
          {addonsArray.map((addon) => {
            return (
              <AddonCard
                key={addon.id}
                id={addon.id}
                title={addon.name}
                price={yearlyChecked ? addon.price * 10 : addon.price}
                description={addon.description}
                checked={addon.checked}
                handleCheck={handleCheck}
                yearlyChecked={yearlyChecked}
              />
            );
          })}
        </div>
      </section>
      <Footer path={step} prevStep={prevStep} handleClick={handleClick} />
    </div>
  );
};

export default Addon;
