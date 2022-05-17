import React from "react";
import "./Users.css";

export function GroupBox({children}) {
    return (
      <div className="box">
          {children}
      </div>
    );
};