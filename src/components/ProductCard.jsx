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

                <Link href={`/products/${title.toLowerCase().replace(/\s+/g, "-")}`} className="mt-4 flex justify-center items-center h-10 px-4 rounded-full bg-green-500 text-white font-bold group-hover:bg-primary group-hover:bg-green-600 transition-colors">
                    View Details
                </Link>
            </div>
        </div>
    );
}
