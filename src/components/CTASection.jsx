export default function CTASection() {
    return (
        <div className="bg-gray-100 rounded-xl mt-16">
            <div className="flex flex-col justify-end gap-6 px-4 py-12 text-center">
                <h1 className="text-primary text-3xl font-extrabold">
                    Ready to Order?
                </h1>
                <p className="text-text-light max-w-2xl mx-auto">
                    Contact us directly to place your order. We're happy to help!
                </p>

                <div className="flex justify-center flex-wrap gap-4 mt-4">
                    <button className="h-12 px-5 rounded-full bg-green-800 text-white font-bold">
                        Order on WhatsApp
                    </button>
                    <button className="h-12 px-5 rounded-full bg-gray-400 text-primary font-bold">
                        Call Us
                    </button>
                    <button className="h-12 px-5 rounded-full bg-gray-400 text-primary font-bold">
                        Email Us
                    </button>
                </div>
            </div>
        </div>
    );
}
