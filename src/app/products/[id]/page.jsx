import Breadcrumbs from "@/components/Breadcrumbs";
import ProductGallery from "@/components/ProductGallery";
import ProductInfo from "@/components/ProductInfo";
import Testimonials from "@/components/Testimonials";
import ProcessSection from "@/components/ProcessSection";
import {FaFireAlt} from "react-icons/fa";
import {LuLeaf} from "react-icons/lu";
import {IoSunny} from "react-icons/io5";

export default function ProductDetailsPage() {

    // Static sample data (can be dynamic later)
    const product = {
        title: "Spicy Mango Tango",
        description:
            " A tangy and timeless recipe passed down through generations, combining ripe mangoes with a fiery blend of hand-picked spices. Perfectly balanced to deliver a zesty punch with every bite.",
        images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDX5nAPC_sYNIz-RjOMqe7s6jmeOwKt-n4TDjPeP6dorDemJAIRiKjlUhYrX2xXnvvUR45af-a5KJZcvbyYCXW_cayD7RDckvFU5skuv-kgY2JwOEP7MffQkuRadEwZ1pmb55tuzfQRmutOnRdD6QXFPzHE86BE8bOzcMa6WatP6Nb_g_HdZKn9VoaHhQvUL-IHrutNs5SJuBIoZdp8ROiO2mhS2tjp3LaHW-lxUMBna0k6zpM_qztHQD2EMAps-FfxWxekmHASqUs",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDuzU5i5KK43juk9F2F-RCZmwc4DKl-wkQRgG0wE2CHVpPgbjZkxOhBJdzujbVtU2Qxv1Wn0cA1sfwPdPGt5Ff4izZ3KFJqinrvcNitDTNzrzUwXy3BCywnStmU99Omz-whRGb0Cdh_-3SKy6OtObJWCtyCBBj3PzxjU-VEbZIWUmK-bJZR348e-hgTR4GvwrZtAD_FsL8VwasteTTEp-fJCaMOH3qVd_0_U5fqM2Cu1s491Ntpp_2t77B0HY4REWrqRDn2-cFWnug",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAeRAJp7Kmba2Q-gicWoZlc6UVQhdGtNJI_4YDPXr8e-JtEiR25kegODjnL4L3DY6MhJY27_ZPxgG3SWSOOxXVMdvR_4njTovH2np8VwjpVa6J0ZXS3j3ng-gpU0DCJLrtyUQ2sIhgHbcChVIfUj7IqbNwoHuUpi87GrN3WUU-94NNpCQf-RbF_wlluEl8mh7O_NeIohvcUNhYygZQFosDJAO9NHzxNr84RpZ1fYzIvOLhYkH0q0E_GQIxaMXhAXxqhlTbJX3ls8Yg",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAphNTMrAJSSVOfWJI7uS1EPb9gg5cBbIxr4X0gfcf82tdcYuZPp4qvqnKEElktN2ZZTJKAQjPhQm2_UtDOpU2Ddebh2Ex3rc3WOZ6r7PuntnUvqQwevp-0_GMoek__1cg2kF_ulOouCpKhUCpv96phUt0uRbw3OL9C-cH75s5U4Hy9raa0F-ug5mFfCnt7pRVCqDhfEztdBywYVih-vBZ5lGO2rsnFTSm1OingS3c9iXNygcYp4yUw0cU7EffKy6p6XJLnQHeFgcE",
        ],
        tags: [
            { icon: <FaFireAlt />, label: "Spice Level: Hot", color: "bg-yellow-400/20 text-yellow-800" },
            { icon: <LuLeaf />, label: "100% Vegan", color: "bg-green-400/20 text-green-800" },
            { icon: <IoSunny />, label: "Sun-Dried", color: "bg-blue-400/20 text-blue-800" },
        ],
        sizes: [
            { label: "250g Jar", price: "₹120", selected: true },
            { label: "500g Jar", price: "₹220", selected: false },
        ],
    };

    const reviews = [
        { name: "Anjali P.", rating: 5, comment: "The best mango pickle I've ever had!" },
        { name: "Rohan K.", rating: 4, comment: "Perfect spice and authentic taste!" },
        { name: "Priya S.", rating: 5, comment: "Fast delivery and amazing flavor!" },
    ];

    const steps = [
        { title: "Fresh Ingredients", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWwXwTBG1g1gvnrNItCM-SwnANG5kd3QNb6sk3TiC_eRMsP-ifsr7kj42CZg8q9R6V2aneK8ytJ9vicQnfnvoJ4z5H0xIxM2Xash0iiBLRK1vtMwcqH_1wLPo5CvQ_01_dLy6wEawf3JQeJkKigvOttLPibA6pQgav9-oDEV74k0kL_S3eFlFBGZuRH8C777xd_eMqd7eadUVL_Wz0nZwFv1OVfQnHXomVlF6eL7pd-0LN50-k6SphFTwbyzbGhS509lg7ZyeM2qk", desc: "We handpick the freshest, highest-quality raw mangoes and spices from local farms." },
        { title: "Sun-Drying Process", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAl3BkihI5tdMhjk-WesyfgsceEajjQ2_7PB1ycyBqe6izJeh7gNtkceECHN19WfmMUAjt_UTSodXDf2e53-LKgBow9I_1USKPIHPbMuFpUB1XRQhhpLp4L5GkHh4c7Smjk6ZRk7NF2n0jcygx1GBAQKjF4dEHHx6rfFP8QCo9Xa3mFCySDYzVawHhNeA85-W_UbVv8m3DCkZHSm-G4LvG6lDE2SViK1oeri9nH2UCBRxHW5xHLDAvaOVISOo_EjUPdfvFyEL8rd_U", desc: "The spiced mangoes are naturally sun-dried to develop deep, rich flavors." },
        { title: "Hygienic Bottling", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1G2iMloHrhQyzFJ1f1vc0ueUo3HaTQGNX2-v6Ydp0VZUxriEcDCybXmKC7DTNgxstSi5plqsak8fBH2LjsS8KsFu2fcusGTDZad7Oc-S9DGdHXRBtbKxAJn3tmQELkwu4qnpCtcZIrTbXIF4iRE-iMcTLJSYkC_POUUhJZk5MRXacYbOf9WK14XaqoCkd8x3XwV11SsI6NNpHnA_usWhGdgWy88F-N-WMoKhY63NkG78kmw1xgh3wVLY_Ex_KvH319YNZhWZ3b6A", desc: "Finally, the pickle is sealed in sterilized glass jars to preserve its freshness and taste." },
    ];

    return (
        <div className="bg-background-light dark:bg-background-dark">
            <main className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-10">

                <Breadcrumbs
                    paths={[
                        { label: "Home", href: "/" },
                        { label: "All Products", href: "/products" },
                        { label: product.title },
                    ]}
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <ProductGallery images={product.images} />
                    <ProductInfo product={product} />
                </div>

                <Testimonials reviews={reviews} />
                <ProcessSection steps={steps} />

            </main>
        </div>
    );
}
