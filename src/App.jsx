import { useState } from "react";
import Sidebar from "./components/Sidebar";
import MessageWrapper from "./components/MessageWrapper";
import Register from "./auth/Register.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./auth/Login.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
export default function App() {
    const [chats] = useState([
        { name: "Братан", lastMessage: "Здарова 👊" },
        { name: "OpenAI", lastMessage: "Нейросети рулят 🚀" },
        { name: "Друг", lastMessage: "Погнали в доту?" },
    ]);

    const [activeChat, setActiveChat] = useState(null);

    return (
<<<<<<< HEAD
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
=======
        <>
            <Router>
                <Routes>
                    {/* Публичные маршруты */}
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />

                    {/* Приватные маршруты */}
                    <Route
                        path="/"
                        element={
                            <PrivateRoute>
                                <MessageWrapper />
                            </PrivateRoute>
                        }
                    />
                </Routes>
            </Router>
        </>
>>>>>>> 0ad074ceb2d1ff4e187611f58ed95e6a84a94c4b
    );
}
