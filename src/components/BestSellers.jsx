export default function BestSellers() {
    const items = [
        {
            name: "Brinjal Pickle",
            desc: "A fiery and tangy delight.",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgE8mTgY3R3-65Y2Xqd726g-qOGc6AlsA4xqM5MRwwZyzLYJ6gGKqx0S5G9_FYGQvoF3BwqWDWTAPR_3fjvLOXLCzfvzrp39N0KYvB-n_6mXOQNUlVlBwYb9AtxP7rSGcOhWadVDCxrHI4RTxrZWkedgM2TC3inSRZZky4Nqoj5krISlPjJUDIbmytWPrF1D36Y3nunXDsN7M0XLC2V3q9t8Hdydsg8lCSNspeiJSd8HtMQpxwbuY6p-8SbnCRlFG3-eHbvrDG3g8"
        },
        {
            name: "Classic Lime Pickle",
            desc: "Timeless zesty flavor.",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjrL2OjVe_S9MNBAI3dUUT3FE-Woj6daIfiaaIg1A_UIXNSR5JJapgwkT-fcOnpDN8osO0UlYoXH_cKP53ui9on6RYmvaaoFn7tGeFElDrRGROIG5W-0Pjnmq1wFCOQUUDdF7HbH9j9NbAfZEQ07Wz_iPCLW2gXuX2ZN--6q_afiELAEFEVT1iM3CiD4fBglqEblnt91mXEFIGYm4wmxxcyr9Hd7tyzCxAoReRdUPG9jjqyhft-mtidvMzTJk7MCFOMGDf8GtddO0"
        },
        {
            name: "Garlic Delight Pickle",
            desc: "Whole garlic cloves pickled perfectly.",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgE8mTgY3R3-65Y2Xqd726g-qOGc6AlsA4xqM5MRwwZyzLYJ6gGKqx0S5G9_FYGQvoF3BwqWDWTAPR_3fjvLOXLCzfvzrp39N0KYvB-n_6mXOQNUlVlBwYb9AtxP7rSGcOhWadVDCxrHI4RTxrZWkedgM2TC3inSRZZky4Nqoj5krISlPjJUDIbmytWPrF1D36Y3nunXDsN7M0XLC2V3q9t8Hdydsg8lCSNspeiJSd8HtMQpxwbuY6p-8SbnCRlFG3-eHbvrDG3g8"
        }
    ];

    return (
        <div className="py-10 px-16">
            <h2 className="text-center text-3xl font-bold text-gray-900">
                Our Best Sellers
            </h2>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 mt-8">
                {items.map((item, index) => (
                    <div key={index} className="flex flex-col gap-4">
                        <div
                            className="w-full bg-cover bg-center aspect-square rounded-xl"
                            style={{ backgroundImage: `url(${item.img})` }}
                        />
                        <div className="text-center">
                            <p className="font-bold text-lg">{item.name}</p>
                            <p className="text-gray-500">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
