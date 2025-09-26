import { useState } from "react";

export default function ModalButton({ onCreate }) {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState("");
    const [participants, setParticipants] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        onCreate({ name, participants }); // ⬅️ отправляем данные наверх
        setIsOpen(false);
        setName("");
        setParticipants("");
    };

    return (
        <div>
            <button
                onClick={() => setIsOpen(true)}
                className="px-4 py-2 bg-blue-500 text-xs text-white rounded-lg hover:bg-blue-600 transition"
            >
                Добавить чат +
            </button>

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div
                        className="absolute inset-0 bg-black opacity-75"
                        onClick={() => setIsOpen(false)}
                    ></div>

                    <div className="relative bg-white rounded-xl shadow-2xl p-6 w-full max-w-md mx-4 animate-fadeIn">
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">
                            Новый чат
                        </h2>

                        <form onSubmit={onSubmit} className="space-y-3">
                            <input
                                type="text"
                                placeholder="Название чата"
                                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                placeholder="Участники (ID через запятую)"
                                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                value={participants}
                                onChange={(e) =>
                                    setParticipants(e.target.value)
                                }
                                required
                            />

                            <div className="flex justify-end space-x-3 mt-4">
                                <button
                                    type="button"
                                    className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Отмена
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                                >
                                    Создать
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
