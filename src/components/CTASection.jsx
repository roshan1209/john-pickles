export default function CTASection() {
    return (
        <div className="bg-white md:rounded-xl">
            <div className="flex flex-col items-center justify-end gap-4 px-4 py-12 text-center">
                <h1 className="text-primary text-3xl font-bold">
                    Ready to Order?
                </h1>
                <p className="text-text-light max-w-2xl mx-auto">
                    Contact us directly to place your order. We're happy to help!
                </p>
                <button className="h-12 px-5 hover:bg-green-600 rounded-full bg-green-500 text-white font-bold">
                    Order on WhatsApp
                </button>
            </div>
        </div>
    );
}
