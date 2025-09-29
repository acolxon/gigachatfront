import { useEffect, useState } from "react";
import MessageItem from "./MessageItem";
import Loader from "./Loader";
import EmptyChat from "./EmptyChat";
import Input from "./Input";

export default function ChatWindow({ chat, user }) {
    const [messages, setMessages] = useState([]);
    const [loader, setLoader] = useState(false);
    const [inputText, setInputText] = useState("");

    // const socket = io("https://gigachat-ydne.onrender.com");

    useEffect(() => {
        if (!chat?._id) {
            return;
        }
        const handleChatMessage = async () => {
            setLoader(true);
            try {
                const token = localStorage.getItem("token");
                if (token) {
                    const res = await fetch(
                        `https://gigachat-ydne.onrender.com/api/chats/${chat._id}/messages`,
                        {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${token}`,
                            },
                        }
                    );
                    const data = await res.json();
                    setMessages(data);
                    setLoader(false);
                }
            } catch (error) {
                console.error("Ошибка при запросе:", error);
            }
        };

        handleChatMessage();
    }, [chat]);

    // useEffect(() => {
    //     socket.on("message", (msg) => setMessages((prev) => [...prev, msg]));
    // }, []);

    if (loader) {
        return (
            <div className="flex-1 flex flex-col bg-white shadow-lg rounded-l-2xl mx-4 my-2">
                <Loader />
            </div>
        );
    }
    if (!chat) {
        return <EmptyChat />;
    }

    return (
        <div className="flex-1 flex flex-col bg-white shadow-lg rounded-l-2xl mx-4 my-2">
            {/* Заголовок чата */}
            <div className="p-5 text-lg font-semibold text-gray-800 bg-gray-50 rounded-tl-md rounded-tr-md">
                {chat.name}
            </div>

            {/* Сообщения */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((msg, index) => (
                    <MessageItem
                        text={msg.text}
                        isMe={msg.senderId._id === user._id}
                        key={index}
                    />
                ))}
            </div>

            {/* Поле ввода */}
            <Input
                setInputText={setInputText}
                onSend={async (text) => {
                    try {
                        const token = localStorage.getItem("token");
                        await fetch(
                            `https://gigachat-ydne.onrender.com/api/chats/${chat._id}/messages`,
                            {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                    Authorization: `Bearer ${token}`,
                                },
                                body: JSON.stringify({
                                    chatId: chat._id,
                                    senderId: user._id,
                                    text,
                                }),
                            }
                        );
                        // После отправки обновляем сообщения
                        setMessages((prev) => [
                            ...prev,
                            { text, senderId: user },
                        ]);
                    } catch (error) {
                        console.error(error);
                    }
                }}
            />
        </div>
    );
}
