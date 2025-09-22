import SidebarHeader from "./SidebarHeader";
import ChatList from "./ChatList";
// import SidebarFooter from "./SidebarFooter";

export default function Sidebar({ chats, onSelectChat }) {
    return (
        <div className="w-64 h-screen bg-gray-100 border-r flex flex-col">
            <SidebarHeader />
            <ChatList chats={chats} onSelectChat={onSelectChat} />
            <SidebarFooter />
        </div>
    );
}
