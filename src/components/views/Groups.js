import React from "react";
import "./Groups.css";

export function GroupBox({children}) {
    return (
      <div className="group-box">
          {children}
      </div>
    );
};

export function ConnectWallet({onClick}) {
    return (
        <button className="button"
          onClick={onClick}
        >Connect</button>
    );
};

export function CreateGroup({onClick}) {
    return (
      <button className="button"
        onClick={onClick}
      >Create</button>
  );
};

export function JoinGroup({onClick}) {
    return (
        <button className="button"
          onClick={onClick}
        >Join</button>
    );
};

export function ReloadMessages({onClick}) {
  return (
      <button className="button"
        onClick={onClick}
      >Reload</button>
  );
};

export function GroupButton({onClick,value}) {
  return (
    <div><button 
    className="group"
    onClick={onClick}
    >{value}</button></div>
  );
}