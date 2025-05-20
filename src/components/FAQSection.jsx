import React, { useRef, useEffect, useState } from "react";

const faqs = [
    {
        question: "What is Chat With Krishna?",
        answer: "Chat With Krishna is an AI-powered chatbot designed to provide spiritual guidance, advice, and calming conversations inspired by Lord Krishna."
    },
    {
        question: "Is my data safe?",
        answer: "Yes! The app is privacy-respecting and does not store or share your conversations. There are no ads or trackers."
    },
    {
        question: "How do I download the app?",
        answer: "Scroll to the Showcase section and click the Download button, or use the button in the hero section."
    },
    {
        question: "Can I use this app offline?",
        answer: "Currently, an internet connection is required for the AI to respond."
    }
];

const FAQSection = () => {
    const sectionRef = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new window.IntersectionObserver(
            ([entry]) => setInView(entry.isIntersecting),
            { threshold: 0.2 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="faq-section"
            ref={sectionRef}
            className="relative py-24 overflow-x-hidden transition-colors duration-500"
        >
            {/* Soft radial glow behind the title */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <div className="w-[400px] h-[400px] rounded-full bg-gradient-radial from-yellow-400/20 via-yellow-300/10 to-transparent blur-3xl opacity-60"></div>
            </div>
            <div className={`container mx-auto flex flex-col items-center transition-all duration-700
                ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}>
                <h2 className="font-parisienne text-4xl text-divine-purple dark:text-yellow-300 mb-12 text-center animate-jump-in">
                    Frequently Asked Questions
                </h2>
                <div className="w-full max-w-3xl space-y-8">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className={`
                                group
                                bg-gradient-to-br from-white via-purple-100 to-soft-gold/20 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800
                                rounded-2xl shadow-xl p-8
                                border-2 border-transparent
                                transition-all duration-500
                                hover:scale-105 hover:shadow-2xl hover:border-soft-gold hover:border-2
                                hover:shadow-yellow-300/40
                                ${inView ? 'animate-feature-card-in' : 'opacity-0 translate-y-10'}
                            `}
                            style={{
                                animationDelay: inView ? `${idx * 120 + 100}ms` : "0ms",
                                animationFillMode: "both"
                            }}
                        >
                            <h3 className="font-merienda text-2xl text-divine-indigo dark:text-yellow-200 mb-3 flex items-center gap-4">
                                <span className="text-soft-gold text-7xl leading-none -mt-4">&#8226;</span>
                                {faq.question}
                            </h3>
                            <p className="font-ui text-lg text-gray-700 dark:text-gray-200">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;