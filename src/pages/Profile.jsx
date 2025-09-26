// src/components/Profile.jsx
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Loader from "../components/Loader";

export default function Profile() {
    const navigate = useNavigate();

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        handleUsersData();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    const handleUsersData = async () => {
        const token = localStorage.getItem("token");
        try {
            const res = await fetch(
                "https://gigachat-ydne.onrender.com/api/users/me",
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await res.json();
            console.log(data);
            if (res.ok) {
                setUser(data);
                setLoading(false);
            } else {
            }
        } catch (err) {}
    };
    if (loading) return <Loader />;
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 p-6">
            <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md text-center relative">
                {/* Аватар */}
                <div className="w-24 h-24 mx-auto rounded-full bg-blue-500 flex items-center justify-center text-white text-3xl font-bold shadow-md">
                    {user.username[0].toUpperCase()}
                </div>

                {/* Имя */}
                <h2 className="mt-4 text-2xl font-bold text-gray-800">
                    {user.username}
                </h2>

                {/* Email */}
                {/* <p className="text-gray-500">{user.email}</p> */}

                {/* Статус */}
                <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium">
                    {user._id}
                </span>

                {/* Статистика */}
                <div className="grid grid-cols-3 gap-4 mt-6">
                    <div>
                        <p className="text-lg font-bold text-gray-800">152</p>
                        <p className="text-sm text-gray-500">Сообщений</p>
                    </div>
                    <div>
                        <p className="text-lg font-bold text-gray-800">8</p>
                        <p className="text-sm text-gray-500">Чатов</p>
                    </div>
                    <div>
                        <p className="text-lg font-bold text-gray-800">1</p>
                        <p className="text-sm text-gray-500">Аккаунт</p>
                    </div>
                </div>

                {/* Кнопки */}
                <div className="mt-8 space-y-3">
                    <button
                        className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
                        onClick={handleLogout}
                    >
                        Выйти
                    </button>
                    <Link
                        to="/"
                        className="block w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg transition duration-200"
                    >
                        ← Назад в чаты
                    </Link>
                </div>
            </div>
        </div>
    );
}
