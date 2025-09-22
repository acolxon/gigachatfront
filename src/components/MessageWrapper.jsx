import Message from "./Message";
import ChatInput from "./ChatInput";
import "../assets/style/MessageWrapper.css";
import { useState } from "react";

export default function MessageWrapper() {
    const [messages, setMessages] = useState([
        { text: "Привет!", time: "12:30", isMe: true },
        { text: "Здарова", time: "12:31", isMe: false },
    ]);

    const handleSend = (text) => {
        const newMessage = {
            text,
            time: new Date().toLocaleTimeString().slice(0, 5),
            isMe: true,
        };
        setMessages([...messages, newMessage]);
    };

    return (
        <div className="message-wrapper flex flex-col h-screen">
            <div className="container flex-1 overflow-y-auto p-4">
                {messages.map((m, i) => (
                    <Message
                        key={i}
                        text={m.text}
                        time={m.time}
                        isMe={m.isMe}
                    />
                ))}
            </div>
            <ChatInput onSend={handleSend} />
        </div>
    );
}
