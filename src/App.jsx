import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/UI/navbar/Navbar";
import Game21Page from "./pages/game21Page/Game21Page";
import Game21InfoPage from "./pages/game21InfoPage/Game21InfoPage";
import { ToastContainer } from "react-toastify";
import "./index.scss";
import "react-toastify/dist/ReactToastify.css";
import { ModalAndName } from "./context";

function App() {
  const [userName, setUserName] = useState("Unknown");
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("userName")) {
      setUserName(localStorage.getItem("userName"));
    } else setActive(true);
  }, [userName]);

  return (
    <ModalAndName.Provider value={{ active, setActive, userName, setUserName }}>
      <div className="app">
        <Navbar/>
        <Routes className="routes">
          <Route path="/" element={<Game21InfoPage />} />
          <Route path="/game21" element={<Game21Page />} />
        </Routes>
        <ToastContainer position="bottom-right" autoClose={3000} theme="dark" />
      </div>
    </ModalAndName.Provider>
  );
}

export default App;
