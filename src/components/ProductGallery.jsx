export default function ProductGallery({ images }) {
    return (
        <div className="flex flex-col gap-4">
            <div
                className="w-full bg-center bg-cover rounded-xl aspect-square"
                style={{ backgroundImage: `url(${images[0]})` }}
            ></div>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-4">
                {images.slice(1).map((img, i) => (
                    <div
                        key={i}
                        className="bg-center bg-cover rounded-lg aspect-square"
                        style={{ backgroundImage: `url(${img})` }}
                    ></div>
                ))}
            </div>
        </div>
    );
}
