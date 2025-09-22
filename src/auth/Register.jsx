import React, { useState } from "react";

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");

        if (username.length < 3) {
            return setMessage("Имя пользователя должно быть минимум 3 символа.");
        }
        if (password.length < 6) {
            return setMessage("Пароль должен быть минимум 6 символов.");
        }
        if (password !== password2) {
            return setMessage("Пароли не совпадают.");
        }

        try {
            const res = await fetch("https://gigachat-ydne.onrender.com/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            const data = await res.json();
            if (res.ok) {
                setMessage("✅ Регистрация успешна! Теперь можете войти.");
                setUsername("");
                setPassword("");
                setPassword2("");
            } else {
                setMessage("❌ Ошибка: " + (data.error || "Что-то пошло не так"));
            }
        } catch (err) {
            setMessage("❌ Ошибка подключения к серверу");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-6">Регистрация</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
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
                    <input
                        type="password"
                        placeholder="Повторите пароль"
                        value={password2}
                        onChange={(e) => setPassword2(e.target.value)}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-400 outline-none"
                    />
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                        Зарегистрироваться
                    </button>
                </form>
                {message && (
                    <p className="mt-4 text-center text-sm text-gray-700">{message}</p>
                )}
            </div>
        </div>
    );
}

export default Register;
