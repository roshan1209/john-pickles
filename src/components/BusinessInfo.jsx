export default function BusinessInfo() {
    return (
        <div className="flex flex-col items-center gap-6 w-full max-w-2xl p-8">

            <div className="text-center">
                <h3 className="text-lg font-bold">Business Hours</h3>
                <p className="text-text-light/80 mt-1">
                    Monday - Friday, 9:00 AM - 5:00 PM
                </p>
            </div>

            <div className="text-center">
                <h3 className="text-lg font-bold">Our Location</h3>
                <p className="text-text-light/80 mt-1">
                    123 Pickle Lane, Brinetown, USA 54321
                </p>
            </div>

        </div>
    );
}
