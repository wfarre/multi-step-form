import React, { useEffect, useState } from "react";
import AddonCard from "../components/AddonCard/AddonCard";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Addon = ({ prevStep, addons, handleAddons, yearlyChecked, step }) => {
  const [addonsArray, setAddonsArray] = useState([...addons]);

  useEffect(() => {
    console.log(addonsArray);
  }, [addonsArray]);

  const handleCheck = (isChecked, id) => {
    console.log("hello");
    const newState = addonsArray.map((addon) => {
      if (addon.id === id) {
        console.log(addon);
        return { ...addon, checked: isChecked };
      }
      return addon;
    });

    setAddonsArray(newState);
  };

  const handleClick = () => {
    console.log(addonsArray);
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
