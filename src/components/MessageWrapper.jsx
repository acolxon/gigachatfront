// import "../assets/style/MessageWrapper.css";
import Message from "./Message";
import "../assets/style/MessageWrapper.css";
export default function MessageWrapper() {
    return (
        <div className="message-wrapper">
            <div className="continer">
                <Message />
                <Message />
                <Message />
                <Message />
            </div>
        </div>
    );
}
