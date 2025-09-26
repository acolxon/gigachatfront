import { Link } from "react-router-dom";
import SideBarItem from "./SideBarItem";
import ModalButton from "./ModalButton";

export default function SideBar({ chats, user, onCreateChat, onSelectChat }) {
    return (
        <aside className="w-72 bg-white shadow-lg rounded-r-2xl flex flex-col my-2">
            <div className="p-5 text-lg font-semibold flex items-center justify-between text-gray-800 bg-gray-50 rounded-tl-md rounded-tr-md">
                Чаты
                <ModalButton onCreate={onCreateChat} />
            </div>

            {/* Список чатов */}
            <div className="flex-1 overflow-y-auto space-y-2 p-4">
                {chats.map((chat, index) => (
                    <SideBarItem
                        data={chat}
                        key={index}
                        onClick={() => {
                            onSelectChat(chat);
                        }}
                    />
                ))}
            </div>

            {/* Футер */}
            <Link
                to="/profile"
                className="flex items-center p-4 text-sm text-gray-700 bg-gray-50 rounded-br-2xl hover:bg-gray-100 transition"
            >
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                    {(user?.username?.[0] || "").toUpperCase()}
                </div>
                <span className="ml-2 font-medium text-gray-800 text-base">
                    {user?.username || ""}
                </span>
            </Link>
        </aside>
    );
}
