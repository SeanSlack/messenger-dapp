import "./Chat.css";
import React, { useState } from 'react';

export function ChatWindow({children}) {
    return (
        <div className="chat">
            {children}
        </div>
    );
};

export function MessageWrapper({children}) {
    return (
        <div className="message-list">
            {children}
        </div>
    );
};

export function MessageWindow({children}) {
    return (
        <div className="message-window">
        {children}
        </div>
    );
}

export function MessageList({msgList}) {
    const listData = msgList.map((item, i) => ( <li className="message" key={i} ><strong>{item.username}</strong> <br className="br"/> {item.message} <br className="br"/> </li>));
    return (
        <ul className="message-list">{listData}</ul>
    );
};

export function MessageInput({onClick}) {
    const [value, setValue] = useState("");
    
    const handleChange = e => {
        setValue(e.target.value);
      };

    const handleSubmit = e => {
        e.preventDefault();
        // or you can send to backend
    };

    return (
        <div className="input-wrapper">
            <form>
                <input
                className="message-text"
                type="text"
                value={value}
                onChange={handleChange}
                />
                <button 
                className="send"
                value={value}
                onClick={onClick} 
                type="submit">
                Send
                </button>
            </form>
        </div>
    );
};