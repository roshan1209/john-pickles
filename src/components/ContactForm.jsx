export default function ContactForm() {
    return (
        <div className="w-full flex justify-center p-4">
            <div className="flex flex-col gap-6 w-full max-w-2xl">
                <div className="flex flex-col sm:flex-row gap-6">
                    <label className="flex flex-col flex-1">
                        <p className="font-medium pb-2">Your Name</p>
                        <input
                            className="form-input h-14 px-4 rounded-lg border border-primary/40 bg-background-light"
                            placeholder="Enter your name"
                        />
                    </label>

                    <label className="flex flex-col flex-1">
                        <p className="font-medium pb-2">Your Email</p>
                        <input
                            className="form-input h-14 px-4 rounded-lg border border-primary/40 bg-background-light"
                            placeholder="Enter your email"
                        />
                    </label>
                </div>

                {/* Message */}
                <label className="flex flex-col">
                    <p className="font-medium pb-2">Message</p>
                    <textarea
                        className="form-textarea min-h-36 px-4 py-3 rounded-lg border border-primary/40 bg-background-light"
                        placeholder="Tell us how we can help..."
                    ></textarea>
                </label>

                {/* Submit */}
                <button className="h-12 px-5 rounded-lg bg-green-500 text-white font-bold hover:bg-green-600 transition">
                    Send Message
                </button>
            </div>
        </div>
    );
}
