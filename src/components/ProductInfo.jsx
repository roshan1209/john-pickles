import {FaWhatsapp} from "react-icons/fa";

export default function ProductInfo({ product }) {
    return (
        <div className="flex flex-col gap-6">

            {/* Title & Description */}
            <div>
                <h1 className="text-4xl lg:text-5xl font-extrabold">{product.title}</h1>
                <p className="text-stone-700 mt-3">{product.description}</p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
                {product.tags.map((tag, i) => (
                    <span
                        key={i}
                        className={`${tag.color} px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1`}
                    >
            <span className="material-symbols-outlined !text-sm">{tag.icon}</span>
                        {tag.label}
          </span>
                ))}
            </div>

            {/* Sizes */}
            <div>
                <h3 className="font-bold mb-2">Select Size</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {product.sizes.map((size, i) => (
                        <label
                            key={i}
                            className={`flex justify-between p-4 rounded-lg cursor-pointer border ${
                                size.selected ? "border-primary bg-primary/10" : "border-stone-300 dark:border-stone-700"
                            }`}
                        >
                            <div className="flex items-center gap-3">
                                <input type="radio" name="size" defaultChecked={size.selected} className="text-primary" />
                                <span>{size.label}</span>
                            </div>
                            <span className="font-bold">{size.price}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 mt-4">
                <button
                    className="flex items-center justify-center gap-2 h-12 p-6 bg-green-500 text-white rounded-lg font-bold">
                    <FaWhatsapp size={30} color="white"/>
                    Order on WhatsApp
                </button>
            </div>

        </div>
    );
}
