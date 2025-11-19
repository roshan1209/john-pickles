import Link from "next/link";

export default function SeeProductsSection() {
    return (
        <section className="flex flex-col items-center text-center gap-6 my-10 px-4">
            <h2 className="text-2xl font-bold">Ready to Taste the Difference?</h2>

            <p className="max-w-xl">
                Explore our delicious range of handcrafted pickles and find your new favorite.
                Every jar is a taste of home.
            </p>

            <Link
                href="/products"
                className="bg-green-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-green-600 transition"
            >
                See Our Pickles
            </Link>
        </section>
    );
}
