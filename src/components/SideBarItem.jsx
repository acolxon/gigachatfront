function SideBarItem({ data }) {
    return (
        <div className="flex items-center p-4 rounded-xl bg-gray-50 hover:bg-gray-100 cursor-pointer">
            {/* Аватар */}
            <div className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center text-white font-bold">
                {data.name[0]}
            </div>
            {/* Текст */}
            <div className="ml-3">
                <p className="font-medium text-gray-800">{data.name}</p>
                <p className="text-sm text-gray-500">{data.message}</p>
            </div>
        </div>
    );
}

export default SideBarItem;
