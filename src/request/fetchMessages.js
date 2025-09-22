export async function fetchMessages(chatId) {
    const res = await fetch(
        `http://localhost:5000/api/chats/${chatId}/messages`
    );
    if (!res.ok) throw new Error("Ошибка при загрузке сообщений");
    return res.json();
}
