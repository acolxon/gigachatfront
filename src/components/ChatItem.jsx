export default function ChatItem({ chat, onClick }) {
    return (
        <div
            onClick={onClick}
            className="flex items-center gap-3 p-3 hover:bg-gray-200 cursor-pointer"
        >
            <div className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center text-white font-bold">
                {chat.name[0]}
            </div>
            <div className="flex flex-col">
                <span className="font-medium">{chat.name}</span>
                <span className="text-sm text-gray-500 truncate w-40">
                    {chat.lastMessage || "Нет сообщений"}
                </span>
            </div>
        </div>
    );
}
