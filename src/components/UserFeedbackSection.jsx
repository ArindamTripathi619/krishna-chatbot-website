import React, { useRef, useEffect, useState } from "react";
import { FaQuoteLeft, FaUserCircle } from "react-icons/fa";

const feedbacks = [
    {
        name: "Aarav S.",
        text: "This app feels truly divine. The responses are calming and insightful!",
    },
    {
        name: "Priya M.",
        text: "I love the spiritual vibe and the beautiful UI. Highly recommended!",
    },
    {
        name: "Rahul K.",
        text: "The advice and verses are so relevant. It’s like talking to a wise friend.",
    },
];

const UserFeedbackSection = () => {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new window.IntersectionObserver(
            ([entry]) => setVisible(entry.isIntersecting),
            { threshold: 0.2 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="py-20 transition-colors duration-500"
        >
            <div className="container mx-auto">
                <h2 className="font-krishna text-6xl text-divine-indigo dark:text-yellow-300 text-center mb-12">
                    What Users Say
                </h2>
                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                    {feedbacks.map((fb, idx) => (
                        <div
                            key={idx}
                            className={`
                                max-w-sm w-full bg-white/90 dark:bg-gray-800/80 rounded-2xl shadow-xl p-8 flex flex-col items-center
                                transition-all duration-700
                                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                                hover:scale-105 hover:shadow-2xl hover:border-soft-gold border-2 border-transparent
                            `}
                            style={{ transitionDelay: `${idx * 150 + 200}ms` }}
                        >
                            <FaQuoteLeft className="text-2xl text-soft-gold mb-4" />
                            <p className="font-ui text-lg text-gray-700 dark:text-gray-200 mb-4 text-center">"{fb.text}"</p>
                            <div className="flex items-center gap-2 mt-2">
                                <FaUserCircle className="text-2xl text-divine-indigo dark:text-yellow-300" />
                                <span className="font-semibold text-divine-indigo dark:text-yellow-200">{fb.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UserFeedbackSection;