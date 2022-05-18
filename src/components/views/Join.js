import "./Join.css";
import React, {useState } from 'react';

export function JoinWindow({children}) {
    return (
        <div className="join-window">
            {children}
        </div>
    );
}

export function InputGroupID({onClick}) {
    const [value, setValue] = useState({
        groupID: "",
        username: ""
    });

    const handleChange = e => {
        e.preventDefault();
        setValue(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };
    
    return (
        <div className="id-wrapper">
            <form>
                <label>
                <input
                placeholder="Group ID"
                className="id"
                type="text"
                name="groupID"
                value={value.groupID || ""}
                onChange={handleChange}
                />
                </label>
                <label>
                <input
                placeholder="Username"
                className="id"
                type="text"
                name="username"
                value={value.username || ""}
                onChange={handleChange}
                />
                </label>
                <button 
                className="join"
                type="submit"
                value={JSON.stringify(value)}
                onClick={onClick} >
                Join
                </button>
            </form>
        </div>
    );
};