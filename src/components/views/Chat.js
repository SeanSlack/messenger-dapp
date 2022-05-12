import "./Chat.css";
import React, { useState } from 'react';

export function ChatWindow({children}) {
    return (
        <div className="chat">
            {children}
        </div>
    );
}

export function MessageList() {
    return (
        <div className="message-list">
            Message 1
            <br/>
            Message 2
            <br/>
        </div>
    );
}

export function MessageInput() {
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
                onClick={handleSubmit} 
                type="submit">
                Send
                </button>
            </form>
        </div>
    );
};