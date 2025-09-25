import { Link } from "react-router-dom";
import SideBarItem from "./SideBarItem";
import ModalButton from "./ModalButton";
import { useEffect, useState } from "react";
import Loader from "./Loader";

export default function SideBar() {
    const [chats, setChats] = useState([]);
    const [loading, setLoading] = useState(false);
    const [participants, setParticipants] = useState("");
    const [name, setName] = useState("");

    useEffect(() => {
        handleAllChats();
    }, []);
    // const data = [
    //     { name: "Friend", message: "How are you?" },
    //     { name: "Mom", message: "ur was bot a milk?" },
    //     { name: "Sweetie", message: "meet?" },
    // ];

    const handleAllChats = async () => {
        try {
            const token = localStorage.getItem("token");
            setLoading(true);
            if (token) {
                const res = await fetch(
                    "https://gigachat-ydne.onrender.com/api/chats/",
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                const data = await res.json();

                setChats(data);
                setLoading(false);
                console.log(chats);
            }
        } catch (error) {
            console.log(error);
        }
    };
    const createChat = async () => {
        const token = localStorage.getItem("token");
        try {
            const res = await fetch(
                "https://gigachat-ydne.onrender.com/api/chats",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        name,
                        participants: participants
                            .split(",")
                            .map((p) => p.trim()),
                    }),
                }
            );
            const newChat = await res.json();
            setName("");
            setParticipants("");
        } catch (error) {
            console.log(error);
        }
    };
    const dataMe = { username: "Asylkhan" };
    if (loading) return <Loader />;
    return (
        <aside className="w-72 bg-white shadow-lg rounded-r-2xl flex flex-col my-2">
            <div className="p-5 text-lg font-semibold flex align-center justify-between text-gray-800 bg-gray-50 rounded-tl-md rounded-tr-md">
                Чаты
                <ModalButton
                    setName={setName}
                    setParticipants={setParticipants}
                    handleCreateChat={createChat}
                    name={name}
                    participants={participants}
                />
            </div>

            {/* Список чатов */}
            <div className="flex-1 overflow-y-auto space-y-2 p-4">
                {chats.map((e, index) => (
                    <SideBarItem data={e} key={index} />
                ))}
            </div>

            {/* Футер */}
            <Link
                to="/profile"
                className="flex items-center p-4 text-sm text-gray-700 bg-gray-50 rounded-br-2xl hover:bg-gray-100 transition"
            >
                {/* Аватар */}
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                    {dataMe.username[0]}
                </div>
                {/* Имя */}
                <span className="ml-2">{dataMe.username}</span>
            </Link>
        </aside>
    );
}
