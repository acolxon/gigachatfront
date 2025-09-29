import { useState } from "react";

export default function Test() {
    const [active, setActive] = useState(null);

    const content = [
        { title: "Node.js", desc: "Fignya" },
        { title: "React.js", desc: "Это библиотека по изучению книг" },
        { title: "Angular.js", desc: "Я незнаю что это" },
    ];
    return (
        <div className="w-screen h-screen relative bg-[rgb(29,49,57)]">
            <div className="max-w-64 mx-auto my-0 gap-2 flex flex-col absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {content.map((el, index) => (
                    <div
                        key={index}
                        className={`w-full h-auto min-h-25 flex flex-col gap-1 rounded-xl p-4 border-solid border-1 transition duration-300 cursor-pointer hover:translate-x-2 rounded-bl-none ${
                            active === index
                                ? "bg-[#283142] border-gray-200 text-gray-200 translate-x-2"
                                : "bg-gray-200 border-sky-800"
                        }`}
                        onClick={() => {
                            setActive(index);
                        }}
                    >
                        <div className="text-lg font-semibold">{el.title}</div>
                        <div className="text-sm font-light">{el.desc}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
