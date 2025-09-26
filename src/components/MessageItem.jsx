export default function MessageItem({ text, isMe }) {
    return (
        <div className={`flex ${isMe ? "justify-end" : ""}`}>
            <div
                className={`px-4 py-2 rounded-xl max-w-xs shadow-sm ${
                    isMe
                        ? "bg-blue-500 text-white"
                        : "bg-gray-100 text-gray-800 "
                }`}
            >
                {text}
            </div>
        </div>
    );
}
