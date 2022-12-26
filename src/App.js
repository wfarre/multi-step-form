import "./styles/App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";

import { useEffect, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import Info from "./pages/Info";
import Addon from "./pages/Addon";
import Plan from "./pages/Plan";
import Summary from "./pages/Summary";

function App() {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState();
  const [pagename, setPagename] = useState([]);
  const [error, setError] = useState(false);

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

  useEffect(() => {
    setCurrentPage(location.pathname);
    setPagename(location.pathname.split("/"));
  }, [location]);

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);

  const nextStep = () => {
    setUserInfo({ ...userInfo, step: userInfo.step + 1 });
  };

  const handleChoosePlan = (userPlan) => {
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

  const handleInfo = (info) => {
    setUserInfo({
      ...userInfo,
      name: info.name,
      email: info.email,
      phone: info.phone,
      step: userInfo.step + 1,
    });
  };

  useEffect(() => {
    console.log(userInfo.step);
  }, [userInfo]);

  const prevStep = () => {
    if (userInfo.step === 1) {
      return;
    }
    setUserInfo({ ...userInfo, step: userInfo.step - 1 });
  };

  const handleAddons = (addons) => {
    setUserInfo({ ...userInfo, addons: addons, step: userInfo.step + 1 });
  };

  return (
    <div className="App">
      <Sidebar path={currentPage} pagename={pagename} />

      <main>
        {/* <Outlet /> */}
        {userInfo.step === 1 ? (
          <Info
            id="1"
            // nextPage={nextStep}
            name={userInfo.name}
            email={userInfo.email}
            phone={userInfo.phone}
            handleInfo={handleInfo}
          />
        ) : userInfo.step === 2 ? (
          <Plan
            id="3"
            prevStep={prevStep}
            plan={userInfo.plan}
            handleChoosePlan={handleChoosePlan}
          />
        ) : userInfo.step === 3 ? (
          <Addon
            id="2"
            prevStep={prevStep}
            addons={userInfo.addons}
            handleAddons={handleAddons}
            yearlyChecked={userInfo.plan.yearly}
          />
        ) : (
          <Summary id="4" prevStep={prevStep} userInfo={userInfo} />
        )}

        {/* <Footer path={currentPage} /> */}
      </main>
    </div>
  );
}

export default App;
