import {FaWhatsapp} from "react-icons/fa";

export default function ContactButtons() {
    return (
        <div className="flex justify-center w-full pb-8">
            <div className="flex flex-col sm:flex-row flex-1 gap-4 px-4 py-3 max-w-[720px] justify-center">

                {/* WhatsApp */}
                <button className="flex h-12 px-5 items-center justify-center rounded-lg bg-green-500 text-white font-bold gap-2 hover:bg-green-600 transition">
                    <FaWhatsapp size={30} color="white"/>
                    Chat on WhatsApp
                </button>
            </div>
        </div>
    );
}
