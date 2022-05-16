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

    // const handleSubmit = e => {
    //     e.preventDefault();
        
    //     console.log(value);
    // }
    
    return (
        <div className="id-wrapper">
            <form>
                <label>
                Group ID
                <input
                className="id"
                type="text"
                name="groupID"
                value={value.groupID || ""}
                onChange={handleChange}
                />
                </label>
                <label>
                Username
                <input
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