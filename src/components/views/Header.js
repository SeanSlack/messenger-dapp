import React from "react";
import "./Header.css";

export function Header({welcome}) {

        return (
          <div className="header-box">
            <img src={require('./logo.png')}></img>
          </div>
        );
};