import React from "react";
import "./Header.css";

export function Header({welcome}) {

        return (
          <div className="header-box">
            <h> {welcome}</h>
          </div>
        );
};