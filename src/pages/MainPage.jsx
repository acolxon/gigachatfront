import { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import ChatWindow from "../components/ChatWindow";
import Loader from "../components/Loader";

export default function MainPage() {
    const [chats, setChats] = useState([]);
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);
    const [selectedChat, setSelectChat] = useState();
    useEffect(() => {
        fetchUser();
        fetchChats();
    }, []);

    const fetchUser = async () => {
        const token = localStorage.getItem("token");
        setLoading(true);
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
            if (res.ok) setUser(data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const fetchChats = async () => {
        const token = localStorage.getItem("token");
        setLoading(true);
        try {
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
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const createChat = async ({ name, participants }) => {
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
            setChats((prev) => [...prev, newChat]);
        } catch (err) {
            console.error(err);
        }
    };

    if (loading) return <Loader />;

    return (
        <div className="flex h-screen bg-gradient-to-br from-blue-50 to-white">
            <SideBar
                chats={chats}
                user={user}
                onCreateChat={createChat}
                onSelectChat={setSelectChat}
            />
            <ChatWindow chat={selectedChat} user={user} />
        </div>
    );
}
