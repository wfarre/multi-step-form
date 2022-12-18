import logo from "./logo.svg";
import "./styles/App.css";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";

import { useEffect, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";

function App() {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState();
  const [pagename, setPagename] = useState([]);

  useEffect(() => {
    console.log(location.pathname);
    setCurrentPage(location.pathname);
    setPagename(location.pathname.split("/"));
  }, [location]);

  return (
    <div className="App">
      <Sidebar path={currentPage} pagename={pagename} />

      <main>
        <Outlet />

        <Footer path={currentPage} />
      </main>
    </div>
  );
}

export default App;
