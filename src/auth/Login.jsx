import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        setMessage("");

        try {
            const res = await fetch("https://gigachat-ydne.onrender.com/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            const data = await res.json();
            if (res.ok) {
                localStorage.setItem("token", data.token); // сохраняем JWT
                setMessage("✅ Успешный вход!");
                window.location.href = "/"; // редирект на главную
            } else {
                setMessage("❌ " + (data.error || "Неверные данные"));
            }
        } catch (err) {
            setMessage("⚠️ Ошибка подключения к серверу");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-6">Вход</h2>
                <form onSubmit={handleLogin} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Имя пользователя"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-400 outline-none"
                    />
                    <input
                        type="password"
                        placeholder="Пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-400 outline-none"
                    />
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                        Войти
                    </button>
                </form>
                <button
                    className="w-full py-2 mt-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
                    onClick={() => navigate("/register")}
                >
                    Нет аккаунта?
                </button>

                {message && (
                    <p className="mt-4 text-center text-sm text-gray-700">{message}</p>
                )}
            </div>
        </div>
    );
}

export default Login;
