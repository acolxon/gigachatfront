import { Link } from "react-router-dom";

export default function Message() {
    return (
        <div className="flex h-screen bg-gradient-to-br from-blue-50 to-white">
            {/* Сайдбар */}
            <aside className="w-72 bg-white shadow-lg rounded-r-2xl flex flex-col my-2">
                {/* Заголовок */}
                <div className="p-5 text-lg font-semibold text-gray-800 bg-gray-50 rounded-tl-md rounded-tr-md">
                    Чаты
                </div>
                {/* Список чатов */}
                <div className="flex-1 overflow-y-auto space-y-2 p-4">
                    <div className="flex items-center p-4 rounded-xl bg-gray-50 hover:bg-gray-100 cursor-pointer">
                        {/* Аватар */}
                        <div className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center text-white font-bold">
                            Д
                        </div>
                        {/* Текст */}
                        <div className="ml-3">
                            <p className="font-medium text-gray-800">Друг</p>
                            <p className="text-sm text-gray-500">Здарова 👊</p>
                        </div>
                    </div>
                    <div className="flex items-center p-4 rounded-xl bg-gray-50 hover:bg-gray-100 cursor-pointer">
                        {/* Аватар */}
                        <div className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center text-white font-bold">
                            Д
                        </div>
                        {/* Текст */}
                        <div className="ml-3">
                            <p className="font-medium text-gray-800">Друг</p>
                            <p className="text-sm text-gray-500">Здарова 👊</p>
                        </div>
                    </div>
                    <div className="flex items-center p-4 rounded-xl bg-gray-50 hover:bg-gray-100 cursor-pointer">
                        {/* Аватар */}
                        <div className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center text-white font-bold">
                            Д
                        </div>
                        {/* Текст */}
                        <div className="ml-3">
                            <p className="font-medium text-gray-800">Друг</p>
                            <p className="text-sm text-gray-500">Здарова 👊</p>
                        </div>
                    </div>
                </div>

                {/* Футер */}
                <Link
                    to="/profile"
                    className="flex items-center p-4 text-sm text-gray-700 bg-gray-50 rounded-br-2xl hover:bg-gray-100 transition"
                >
                    {/* Аватар */}
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                        J
                    </div>
                    {/* Имя */}
                    <span className="ml-2">John Smith</span>
                </Link>
            </aside>

            {/* Окно сообщений */}
            <main className="flex-1 flex flex-col bg-white shadow-lg rounded-l-2xl mx-4 my-2">
                {/* Заголовок чата */}
                <div className="p-5 text-lg font-semibold text-gray-800 bg-gray-50 rounded-tl-md rounded-tr-md">
                    Друг
                </div>

                {/* Сообщения */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                    <div className="flex">
                        <div className="bg-gray-100 px-4 py-2 rounded-xl text-gray-800 max-w-xs shadow-sm">
                            Привет!
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <div className="bg-blue-500 text-white px-4 py-2 rounded-xl max-w-xs shadow-sm">
                            Здарова 👊
                        </div>
                    </div>
                </div>

                {/* Поле ввода */}
                <div className="p-4 flex bg-gray-50 rounded-b-2xl">
                    <input
                        type="text"
                        placeholder="Введите сообщение..."
                        className="flex-1 rounded-xl px-4 py-2 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <button className="ml-3 bg-blue-500 text-white px-5 py-2 rounded-xl shadow hover:bg-blue-600 transition">
                        ➤
                    </button>
                </div>
            </main>
        </div>
    );
}
