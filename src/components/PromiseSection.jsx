export default function PromiseSection() {
    const promises = [
        { icon: "home", title: "Homemade", desc: "Crafted in small batches using time-honored family recipes." },
        { icon: "eco", title: "Fresh", desc: "Only the finest, locally-sourced produce makes it into our jars." },
        { icon: "health_and_safety", title: "Hygienic", desc: "Prepared with the highest safety and cleanliness standards." },
        { icon: "spa", title: "Natural Spices", desc: "Our flavor comes from pure, aromatic spices." },
    ];

    return (
        <section className="flex flex-col items-center">
            <h2 className="text-primary dark:text-[#90EE90] text-2xl font-bold pb-6 pt-5">Our Promise to You</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-5xl px-4">
                {promises.map((p, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center p-6 bg-white dark:bg-background-dark/50 rounded-xl shadow-sm"
                    >
                        <div className="flex items-center justify-center size-14 bg-primary/10 rounded-full mb-4">
                            <span className="material-symbols-outlined text-primary text-3xl">{p.icon}</span>
                        </div>

                        <h3 className="font-bold text-lg mb-2">{p.title}</h3>
                        <p className="text-sm leading-6">{p.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
