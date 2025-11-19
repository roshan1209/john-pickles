export default function HeroAbout() {
    return (
        <div className="px-4">
            <div
                className="bg-cover bg-center flex flex-col justify-end overflow-hidden rounded-xl min-h-80"
                style={{
                    backgroundImage:
                        'linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 35%), url("/jp-about-hero.jpg")',
                }}
            >
                <div className="p-6 sm:p-8">
                    <p className="text-white text-4xl sm:text-5xl font-bold leading-tight">
                        Crafted with Care,<br /> From Our Family to Yours.
                    </p>
                </div>
            </div>
        </div>
    );
}
