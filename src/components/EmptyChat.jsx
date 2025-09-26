import { MessageCircle } from "lucide-react";

export default function EmptyChat() {
    return (
        <div className="flex flex-1 bg-white shadow-lg rounded-l-2xl mx-4 my-2 items-center justify-center">
            <div className="flex flex-col items-center text-gray-500 space-y-4 max-w-md text-center">
                <MessageCircle className="w-20 h-20 text-blue-400" />
                <h3 className="text-3xl font-semibold text-gray-700">
                    Добро пожаловать в GigaChat
                </h3>
                <p className="text-base text-gray-500">
                    Выберите чат слева, чтобы начать общение.
                    <br />
                    Или создайте новый чат, нажав кнопку{" "}
                    <span className="font-medium text-blue-500">
                        «Добавить чат +»
                    </span>
                    .
                </p>
            </div>
        </div>
    );
}
