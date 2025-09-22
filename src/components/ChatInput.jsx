export default function ChatInput({ onSend }) {
    const handleKeyDown = (e) => {
        if (e.key === "Enter" && e.target.value.trim() !== "") {
            onSend(e.target.value);
            e.target.value = "";
        }
    };

    return (
        <div className="flex items-center gap-2 p-3 border-t bg-white w-full">
            <input
                type="text"
                placeholder="Напишите сообщение..."
                className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onKeyDown={handleKeyDown}
            />
            <button
                onClick={() => {
                    const input = document.querySelector("#chatInput");
                    if (input.value.trim() !== "") {
                        onSend(input.value);
                        input.value = "";
                    }
                }}
                className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
            >
                Отправить
            </button>
        </div>
    );
}
