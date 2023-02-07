import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import UserNameForm from "../../UserNameForm";
import { ModalAndName } from "../../../context";
import "./Navbar.scss";

export default function Navbar() {
  const { userName, active, setActive } = useContext(ModalAndName);

  let { pathname } = useLocation();

  return (
    <nav>
      <div className="navbar">
        {pathname === "/" ? (
          <Link to="/game21">Game21</Link>
        ) : (
          <Link to="/">Game21 Info</Link>
        )}
      </div>
      <h2 onClick={() => setActive(true)}>{userName}</h2>
      {active && <UserNameForm />}
    </nav>
  );
}
