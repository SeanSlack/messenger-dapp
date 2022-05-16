import "./Create.css";
import React, {useState } from 'react';

export function CreateWindow({children}) {
    return (
        <div className="join-window">
            Enter group name
            {children}
        </div>
    );
}

export function InputGroupName({onClick}) {
    const [groupName, setValue] = useState("");

    const handleChange = e => {
        e.preventDefault();
        setValue(e.target.value);
    };

    // const handleSubmit = e => {
    //     e.preventDefault();
        
    //     console.log(value);
    // }
    
    return (
        <div className="group-name-wrapper">
            <form>
                <label>
                Group Name
                <input
                className="group-name"
                type="text"
                value={groupName || ""}
                onChange={handleChange}
                />
                </label>
                <button 
                className="create"
                type="submit"
                value={groupName}
                onClick={onClick} >
                Join
                </button>
            </form>
        </div>
    );
};