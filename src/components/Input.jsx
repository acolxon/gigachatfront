import { useState } from "react";

export default function Input({ setInputText, onSend }) {
    const [text, setText] = useState("");

    function handleClick() {
        if (text.trim() === "") return;
        setInputText(text);
        onSend(text); // вызываем функцию отправки в ChatWindow
        setText(""); // очищаем поле
    }

    return (
        <div className="p-4 flex bg-gray-50 rounded-b-2xl">
            <input
                type="text"
                placeholder="Введите сообщение..."
                className="flex-1 rounded-xl px-4 py-2 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                className="ml-3 bg-blue-500 text-white px-5 py-2 rounded-xl shadow hover:bg-blue-600 transition"
                onClick={handleClick}
            >
                ➤
            </button>
        </div>
    );
}
