import {MdOutlineCleanHands} from "react-icons/md";
import {FaSpa} from "react-icons/fa";
import {IoHome} from "react-icons/io5";
import {LuLeaf} from "react-icons/lu";

export default function PromiseSection() {
    const promises = [
        { icon: <IoHome color={"Green"} />, title: "Homemade", desc: "Crafted in small batches using time-honored family recipes." },
        { icon: <LuLeaf color={"Green"} />, title: "Fresh", desc: "Only the finest, locally-sourced produce makes it into our jars." },
        { icon: <MdOutlineCleanHands color={"green"} />, title: "Hygienic", desc: "Prepared with the highest safety and cleanliness standards." },
        { icon: <FaSpa color={"Green"} />, title: "Natural Spices", desc: "Our flavor comes from pure, aromatic spices." },
    ];

    return (
        <section className="flex flex-col items-center">
            <h2 className="text-primary dark:text-[#90EE90] text-2xl font-bold pb-6 pt-5">Our Promise to You</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-5xl px-4">
                {promises.map((p, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm"
                    >
                        <div className="flex items-center justify-center size-16 bg-green-300 rounded-full mb-4">
                            <span className="material-symbols-outlined text-3xl">{p.icon}</span>
                        </div>

                        <h3 className="font-bold text-lg mb-2">{p.title}</h3>
                        <p className="text-sm leading-6">{p.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
