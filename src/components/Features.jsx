import {IoHome, IoHomeOutline} from "react-icons/io5";
import {FaSpa} from "react-icons/fa";
import {MdMenuBook} from "react-icons/md";

export default function Features() {
    return (
        <div className="flex flex-col gap-4 px-16 py-8 text-center">
            <h2 className="text-gray-900 text-4xl font-bold">
                Handcrafted with Love
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
                Our pickles are made with passion, using cherished family recipes passed down through generations.
            </p>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4 mt-6">
                {/* Feature 1 */}
                <div className="border p-6 flex flex-col items-center rounded-xl bg-white text-center">
                    <IoHome size={30} color={"Green"} />
                    <h3 className="text-gray-900 font-bold text-lg">100% Homemade</h3>
                    <p className="text-gray-500">Crafted in small batches.</p>
                </div>

                {/* Feature 2 */}
                <div className="border p-6 flex flex-col items-center rounded-xl bg-white text-center">
                    <FaSpa size={30} color={"Green"} />
                    <h3 className="text-gray-900 font-bold text-lg">No Preservatives</h3>
                    <p className="text-gray-500">Only natural ingredients.</p>
                </div>

                {/* Feature 3 */}
                <div className="border p-6 flex flex-col items-center  rounded-xl bg-white text-center">
                    <MdMenuBook size={30} color={"Green"}  />
                    <h3 className="text-gray-900 font-bold text-lg">Family Recipes</h3>
                    <p className="text-gray-500">Taste of tradition.</p>
                </div>
            </div>
        </div>
    );
}
