import ProductGrid from "@/components/ProductGrid";
import CTASection from "@/components/CTASection";

export default function OurPicklesPage() {
    return (
        <div className="bg-background-light min-h-screen text-text-light max-w-6xl mx-auto">
            <main className="flex flex-col gap-10 md:gap-16">
                <div className="text-center px-4 pt-8">
                    <h1 className="text-3xl md:text-5xl font-bold text-primary">
                        Our Delicious Homemade Pickles
                    </h1>
                </div>
                <ProductGrid />
                <CTASection />
            </main>
        </div>
    );
}
