import { useState } from "react";
import Sidebar from "./components/Sidebar";
import MessageWrapper from "./components/MessageWrapper";

export default function App() {
    const [chats] = useState([
        { name: "Братан", lastMessage: "Здарова 👊" },
        { name: "OpenAI", lastMessage: "Нейросети рулят 🚀" },
        { name: "Друг", lastMessage: "Погнали в доту?" },
    ]);

    const [activeChat, setActiveChat] = useState(null);

    return (
        <div className="flex h-screen">
            {/* Левая панель */}
            <Sidebar chats={chats} onSelectChat={setActiveChat} />

            {/* Правая часть (чат) */}
            <div className="flex-1">
                {activeChat ? (
                    <MessageWrapper />
                ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">
                        Выберите чат слева
                    </div>
                )}
            </div>
        </div>
    );
}
