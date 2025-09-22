import ChatItem from "./ChatItem";

export default function ChatList({ chats, onSelectChat }) {
    if (chats.length === 0) {
        return <p className="text-gray-500 p-4">Нет чатов</p>;
    }

    return (
        <div className="flex-1 overflow-y-auto">
            {chats.map((chat, i) => (
                <ChatItem
                    key={i}
                    chat={chat}
                    onClick={() => onSelectChat(chat)}
                />
            ))}
        </div>
    );
}
