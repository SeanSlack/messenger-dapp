import React from "react";
import "./Users.css";

export function UserBox({children}) {
    return (
      <div className="user-box">
          {children}
      </div>
    );
};

export function UserLabel({usrList}) {
  const listData = usrList.map((item, i) => ( <li className="user-label" key={i} > {item.username} <br className="br"/></li>));
  return (
      <ul className="user-button">{listData}</ul>
  );
};