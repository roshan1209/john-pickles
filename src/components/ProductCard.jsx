import Link from "next/link";

export default function ProductCard({ title, price, images }) {
    console.log(images);
    return (
        <div className="flex flex-col gap-4 pb-3 bg-surface-light rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group">
            <div
                className="w-full bg-center bg-cover aspect-square"
                style={{ backgroundImage: `url(${images[0]})` }}
            ></div>

            <div className="px-4 pb-4 flex flex-col flex-grow">
                <p className="text-lg font-bold text-primary">{title}</p>
                <p className="text-sm text-text-light mt-1">From ₹{price}</p>

                <Link href={`/products/${title.toLowerCase().replace(/\s+/g, "-")}`} className="mt-auto">
                    <button
                        className="mt-4 w-full h-10 px-4 rounded-full bg-gray-400 text-primary font-bold group-hover:bg-primary group-hover:text-gray-200 transition-colors">
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
}
