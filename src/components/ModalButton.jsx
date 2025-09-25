import { useState } from "react";

export default function ModalButton({
    handleCreateChat,
    setName,
    setParticipants,
    name,
    participants,
}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            {/* Кнопка */}
            <button
                onClick={() => setIsOpen(true)}
                className="px-4 py-2 bg-blue-500 text-xs text-white rounded-lg hover:bg-blue-600 transition"
            >
                Добавить чат +
            </button>

            {/* Модальное окно */}
            {isOpen && (
                <form onSubmit={handleCreateChat} className="mb-6 space-y-3">
                    <input
                        type="text"
                        placeholder="Название чата"
                        className="w-full p-2 border rounded"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Участники (ID через запятую)"
                        className="w-full p-2 border rounded"
                        value={participants}
                        onChange={(e) => setParticipants(e.target.value)}
                        required
                    />
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                        Создать чат
                    </button>
                </form>
            )}
        </div>
    );
}
