export default function ProcessSection({ steps }) {
    return (
        <section className="mt-20">
            <div className="text-center">
                <h2 className="text-3xl font-bold">Made with Love & Care</h2>
                <p className="text-stone-600 mt-2">
                    We follow traditional methods to ensure every jar is packed with authentic flavor and goodness.
                </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {steps.map((step, i) => (
                    <div key={i} className="text-center flex flex-col gap-4">
                        <div
                            className="aspect-video bg-cover rounded-lg"
                            style={{ backgroundImage: `url(${step.image})` }}
                        ></div>
                        <h4 className="font-bold">{step.title}</h4>
                        <p className="text-sm text-stone-600">{step.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
