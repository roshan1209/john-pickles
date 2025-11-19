import ProductCard from "./ProductCard";
import products from "../../public/data/products.json";

export default function ProductGrid() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
            {products.map((prod, index) => (
                <ProductCard key={index} {...prod} />
            ))}
        </div>
    );
}
