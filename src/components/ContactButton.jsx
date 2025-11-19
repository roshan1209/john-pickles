export default function ContactButtons() {
    return (
        <div className="flex justify-center w-full pt-8 pb-12">
            <div className="flex flex-col sm:flex-row flex-1 gap-4 px-4 py-3 max-w-[720px] justify-center">

                {/* WhatsApp */}
                <button className="flex h-12 px-5 items-center rounded-lg bg-gray-400 text-button-text font-bold gap-2 hover:bg-primary/90 transition">
                    <span className="material-symbols-outlined">chat</span>
                    Chat on WhatsApp
                </button>

                {/* Call */}
                <button className="flex h-12 items-center px-5 rounded-lg bg-gray-400 text-button-text font-bold gap-2 hover:bg-primary/90 transition">
                    <span className="material-symbols-outlined">call</span>
                    Call Us
                </button>

                {/* Email */}
                <button className="flex h-12 items-center px-5 rounded-lg bg-gray-400 text-button-text font-bold gap-2 hover:bg-primary/90 transition">
                    <span className="material-symbols-outlined">mail</span>
                    Send an Email
                </button>

            </div>
        </div>
    );
}
