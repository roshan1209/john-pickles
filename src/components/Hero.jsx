"use client";

import {FaWhatsapp} from "react-icons/fa";
import Image from "next/image";

export default function Hero() {
    return (
        <div className="relative">
            <div
                className="flex min-h-[600px] md:min-h-[640px] flex-col bg-cover bg-center bg-no-repeat items-center justify-center p-4 text-center"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("/pickle-hero.jpg")',
                }}
            >
                <Image src="/jp-logo-white-hero.png" alt={"logo"} width={400} height={240}/>
                <h2 className="text-white text-base sm:text-lg">
                    Where Quality Meets Authentic Taste
                </h2>

                <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center w-full max-w-md mt-4">
                    <button
                        className="flex items-center justify-center gap-2 h-12 p-6 bg-green-500 text-white rounded-lg font-bold">
                        <FaWhatsapp size={30} color="white"/>
                        Order on WhatsApp
                    </button>

                </div>
            </div>
        </div>
    );
}
