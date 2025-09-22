import "../assets/style/Message.css";

export default function Message({ text, time, isMe }) {
    return (
        <div className={`message_block ${isMe ? "me" : "other"}`}>
            <p className="message_text">{text}</p>
            <p className="message_time">{time}</p>
        </div>
    );
}
