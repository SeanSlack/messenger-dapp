import React from "react";
import "./Groups.css";

export function GroupBox({children}) {
    return (
      <div className="box">
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