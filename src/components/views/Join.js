import "./Join.css";
import React, {useState } from 'react';

export function JoinWindow({children}) {
    return (
        <div className="join-window">
            Enter GroupID
            {children}
        </div>
    );
}

export function InputGroupID({onClick}) {
    const [value, setValue] = useState("");

    const handleChange = e => {
        setValue(e.target.value);
      };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     {onClick};
    // }
    
    return (
        <div className="id-wrapper">
            <form>
                <input
                className="id"
                type="text"
                value={value}
                onChange={handleChange}
                />
                <button 
                className="join"
                onClick={onClick}
                value={value}
                type="submit">
                Join
                </button>
            </form>
        </div>
    );
};