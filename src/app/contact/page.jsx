import ContactButtons from "@/components/ContactButton";
import ContactForm from "@/components/ContactForm";
import BusinessInfo from "@/components/BusinessInfo";

export default function ContactPage() {
    return (
        <div className="bg-background-light text-text-light min-h-screen">
            <main className="flex flex-col items-center pt-8 px-4">
                <div className="text-center max-w-2xl mb-8">
                    <h1 className="text-4xl sm:text-5xl font-black">Get in Touch</h1>
                    <p className="mt-3 text-text-light/80 dark:text-text-dark/80">
                        Have a question or ready to place an order? We'd love to hear from you.
                    </p>
                </div>

                <ContactButtons />
                <h2 className="text-xl font-bold mt-5 mb-3">Or Send Us a Message</h2>
                <ContactForm />

                <BusinessInfo />
            </main>
        </div>
    );
}
