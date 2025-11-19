import HeroAbout from "@/components/HeroAbout";
import StorySection from "@/components/StorySection";
import PromiseSection from "@/components/PromiseSection";
import SeeProductsSection from "@/components/SeeProductsSection";

export default function AboutPage() {
    return (
        <div className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark min-h-screen max-w-6xl mx-auto">
            <main className="flex flex-col gap-4 sm:gap-16 mt-8 sm:mt-12">
                <HeroAbout />
                <StorySection />
                <PromiseSection />
                <SeeProductsSection />
            </main>
        </div>
    );
}
