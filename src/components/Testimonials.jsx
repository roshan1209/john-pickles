import {AiFillStar, AiOutlineStar} from "react-icons/ai";

export default function Testimonials({ reviews }) {
    return (
        <section className="mt-20">
            <div className="text-center">
                <h2 className="text-3xl font-bold">What Our Customers Say</h2>
                <p className="text-stone-600 mt-2">
                    Don't just take our word for it, see what our pickle lovers have to say!
                </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {reviews.map((review, i) => (
                    <div key={i} className="p-6 rounded-xl border bg-white">

                        {/* Rating Stars */}
                        <div className="flex text-yellow-500 text-xl">
                            {Array.from({length: 5}).map((_, j) =>
                                j < review.rating ? (
                                    <AiFillStar key={j}/>
                                ) : (
                                    <AiOutlineStar key={j}/>
                                )
                            )}
                        </div>

                        <blockquote className="mt-4">{review.comment}</blockquote>
                        <p className="font-bold mt-2">- {review.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
