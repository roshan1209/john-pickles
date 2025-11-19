"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="flex items-center justify-between border-b z-10 w-full bg-[#EFECE3] border-gray-200 px-6 sm:px-10 py-4">
            {/* Logo */}
            <div className="flex items-center justify-between gap-4 text-gray-800">
                <Link href={"/"}>
                    <Image src="/logo-jp.png" alt={"logo"} width={64} height={64} />
                </Link>
                <h2 className="text-blue-900 text-2xl font-bold uppercase">
                    John Pickles
                </h2>
            </div>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-9">
                <Link className="text-gray-700 text-md hover:text-blue-800 transition-colors relative group" href="/">
                    Home
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-800 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link className="text-gray-700 text-md hover:text-blue-800 transition-colors relative group" href="/products">
                    Our Products
                    <span
                        className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-800 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link className="text-gray-700 text-md hover:text-blue-800 transition-colors relative group" href="/about-us">
                    About Us
                    <span
                        className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-800 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link className="text-gray-700 text-md hover:text-blue-800 transition-colors relative group" href="/contact">
                    Contact
                    <span
                        className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-800 transition-all duration-300 group-hover:w-full"></span>
                </Link>
            </div>

            {/* Mobile Hamburger Icon */}
            <button
                className="sm:hidden flex flex-col gap-1"
                onClick={() => setOpen(!open)}
                aria-label="Toggle Menu"
            >
                <span className={`h-0.5 w-6 bg-gray-900 transition-all ${open ? "rotate-45 translate-y-1.5" : ""}`}></span>
                <span className={`h-0.5 w-6 bg-gray-900 transition-all ${open ? "opacity-0" : ""}`}></span>
                <span className={`h-0.5 w-6 bg-gray-900 transition-all ${open ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
            </button>

            {/* Mobile Menu Drawer */}
            {open && (
                <div className="absolute top-16 left-0 w-full bg-[#EFECE3] border-b border-gray-200 sm:hidden shadow-md z-50 animate-slide-down">
                    <nav className="flex flex-col gap-4 p-6 text-gray-700 text-base">
                        <Link href="/" className="hover:text-green-600">Home</Link>
                        <Link href="/products" className="hover:text-green-600">Our Products</Link>
                        <Link href="/about-us" className="hover:text-green-600">About Us</Link>
                        <Link href="/contact" className="hover:text-green-600">Contact</Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
