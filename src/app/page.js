import Hero from "@/components/Hero";
import Features from "@/components/Features";
import BestSellers from "@/components/BestSellers";

export default function Home() {
  return (
      <div className="flex flex-col min-h-screen">
          <Hero/>
          <Features/>
          <BestSellers/>
      </div>
  );
}
