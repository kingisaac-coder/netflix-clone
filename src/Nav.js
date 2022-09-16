import React, { useEffect, useState } from "react";
import "./Nav.css";
import netflix from "./image/netflix.png";
import nn from "./image/nn.png";

const Nav = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
    return () => {
      //   window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src={netflix} alt="Netflix Logo" />

      <img className="nav__avatar" src={nn} alt="avatar logo" />
    </div>
  );
};

export default Nav;
