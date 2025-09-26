import { MoreVertical } from "lucide-react";

function SideBarItem({ data, onClick }) {
    function modal() {
        console.log(data._id);
    }
    return (
        <div
            className="flex items-center p-4 rounded-xl bg-gray-50 hover:bg-gray-100 cursor-pointer"
            onClick={onClick}
        >
            {/* Аватар */}
            <div className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center text-white font-bold">
                {data.name[0].toUpperCase()}
            </div>

            {/* Текст */}
            <div className="ml-3">
                <p className="font-medium text-gray-800 text-base">
                    {data.name}
                </p>
            </div>

            {/* Иконка три точки */}
            <MoreVertical
                className="ml-auto rounded-full p-2 w-7 h-7 hover:bg-gray-300 transition duration-300 cursor-pointer"
                size={20}
                color="black"
                onClick={(e) => {
                    e.stopPropagation();
                    modal();
                }}
            />
        </div>
    );
}

export default SideBarItem;
