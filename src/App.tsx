// @ts-ignore
import "./styles/App.css";

import React, { useState } from "react";
import Info from "./pages/Info";
// const Info: Element = require("./pages/Info").default;

import Addon from "./pages/Addon";
import Plan from "./pages/Plan";
import Summary from "./pages/Summary";
import Thankyou from "./pages/Thankyou";

import Sidebar from "./components/Sidebar/Sidebar";

import { PlanObject } from "./pages/Plan";
import { AddonObject } from "./pages/Addon";
import { UserInfo } from "./pages/Info";

export interface User {
  step: number;
  name: string;
  email: string;
  phone: string;
  plan: PlanObject;
  addons: AddonObject[];
}

const App: React.FC = () => {
  const [userInfo, setUserInfo] = useState({
    step: 1,
    name: "",
    email: "",
    phone: "",
    plan: {
      name: "arcade",
      yearly: false,
      price: 9,
    },
    addons: [
      {
        id: "addon01",
        name: "Online Service",
        description: "Access to multiplayer games",
        price: 1,
        checked: false,
      },
      {
        id: "addon02",
        name: "Larger storage",
        description: "Extra 1TB of cloud save",
        price: 2,
        checked: false,
      },
      {
        id: "addon03",
        name: "Customizable profile",
        description: "Custom theme on your profile",
        price: 2,
        checked: false,
      },
    ],
  });

  const handleChoosePlan = (userPlan: PlanObject) => {
    setUserInfo({
      ...userInfo,
      plan: {
        name: userPlan.name,
        yearly: userPlan.yearly,
        price: userPlan.price,
      },
      step: userInfo.step + 1,
    });
  };

  const handleInfo = (info: UserInfo) => {
    setUserInfo({
      ...userInfo,
      name: info.name,
      email: info.email,
      phone: info.phone,
      step: userInfo.step + 1,
    });
  };

  const prevStep = () => {
    if (userInfo.step === 1) {
      return;
    }
    setUserInfo({ ...userInfo, step: userInfo.step - 1 });
  };

  const handleAddons = (addons: AddonObject[]) => {
    setUserInfo({ ...userInfo, addons: addons, step: userInfo.step + 1 });
  };

  const handleSubmit = () => {
    console.log(userInfo);
    setUserInfo({ ...userInfo, step: userInfo.step + 1 });
  };

  return (
    <div className="App">
      <Sidebar path={userInfo.step} />

      <main>
        {/* <Info
          // id="1"
          // nextPage={nextStep}
          name={userInfo.name}
          email={userInfo.email}
          phone={userInfo.phone}
          handleInfo={handleInfo}
          step={userInfo.step}
        /> */}
        {/* <Outlet /> */}
        {userInfo.step === 1 ? (
          <Info
            // id="1"
            // nextPage={nextStep}
            name={userInfo.name}
            email={userInfo.email}
            phone={userInfo.phone}
            handleInfo={handleInfo}
            step={userInfo.step}
          />
        ) : userInfo.step === 2 ? (
          <Plan
            // id="3"
            prevStep={prevStep}
            plan={userInfo.plan}
            handleChoosePlan={handleChoosePlan}
            step={userInfo.step}
          />
        ) : userInfo.step === 3 ? (
          <Addon
            // id="2"
            prevStep={prevStep}
            addons={userInfo.addons}
            handleAddons={handleAddons}
            yearlyChecked={userInfo.plan.yearly}
            step={userInfo.step}
          />
        ) : userInfo.step === 4 ? (
          <Summary
            // id="4"
            prevStep={prevStep}
            userInfo={userInfo}
            handleSubmit={handleSubmit}
            step={userInfo.step}
          />
        ) : (
          <Thankyou />
        )}
      </main>
    </div>
  );
};

export default App;
