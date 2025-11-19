import Image from "next/image";

export default function HeroAbout() {
    return (
        <div
            className="bg-cover bg-center flex min-h-[600px] flex-col justify-center overflow-hidden min-h-80"
            style={{
                backgroundImage:
                    'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("/jp-about-hero.jpg")',
            }}
        >
            <div className="p-6 sm:p-8 text-center">
                <Image src={"/jp-logo-white.png"} alt={"logo"} width={300} height={180} className="mx-auto"/>
                <p className="text-white text-4xl sm:text-5xl font-bold leading-tight">
                    Crafted with Care,<br/> From Our Family to Yours.
                </p>
            </div>
        </div>
    );
}
