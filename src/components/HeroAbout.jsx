export default function HeroAbout() {
    return (
        <div className="px-4">
            <div
                className="bg-cover bg-center flex flex-col justify-end overflow-hidden rounded-xl min-h-80"
                style={{
                    backgroundImage:
                        'linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 35%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDdvoUNp3eW3IaGj91FNYENj-nA2J_TaT63YscTUOgXutmrnPcoe4l_8nz0O-APsrTqzwX98WapisCa1-SKuxB-XcJwpYMzRyNxgZfsv17-_W7V5s0ied1gmeTQn_VNrYWEcC8SXsmICkq4BdzFzESeeTk2jmOicdg4zDgRvn3jF3DGhGEgrDybtnjhKlLjvk9MO7sF8vpTFiNBUjXRkKiWPoaH34JABW-ThHlb54wWbclbapeABeKOpwEIdiGBkr5XQE4nAf3WG6A")',
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
