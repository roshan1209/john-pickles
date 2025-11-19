import {FaFacebook, FaInstagram} from "react-icons/fa";
import {BiLogoGmail} from "react-icons/bi";

export default function Footer() {
    return (
        <footer className="mt-10 border-t border-gray-300 py-8 px-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
                <p className="text-sm text-gray-500">
                    © 2024 John Pickles. All Rights Reserved.
                </p>
                <div className="flex items-center gap-6">
                    <a href="#" className="text-gray-500 hover:text-green-600"><FaFacebook /></a>
                    <a href="#" className="text-gray-500 hover:text-green-600"><FaInstagram /></a>
                    <a href="#" className="text-gray-500 hover:text-green-600"><BiLogoGmail /></a>
                </div>
            </div>
        </footer>
    );
}
