import React, { useState, useEffect } from 'react';

const verses = [
    {
        text: "Whenever dharma declines, I manifest myself.",
        reference: "— Bhagavad Gita 4.7"
    },
    {
        text: "The soul is neither born, nor does it die; it is eternal.",
        reference: "— Bhagavad Gita 2.20"
    },
    {
        text: "You have the right to perform your prescribed duties, but you are not entitled to the fruits of your actions.",
        reference: "— Bhagavad Gita 2.47"
    }
];

const GitaVerseSection = () => {
    const [current, setCurrent] = useState(0);

    // Auto-slide effect
    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrent((prev) => (prev + 1) % verses.length);
        }, 5000);
        return () => clearTimeout(timer);
    }, [current]);

    const nextVerse = () => setCurrent((prev) => (prev + 1) % verses.length);
    const prevVerse = () => setCurrent((prev) => (prev - 1 + verses.length) % verses.length);

    return (
        <section className="relative py-16 text-soft-gold transition-colors duration-500 overflow-hidden">
            {/* Parallax feather */}
            <img
                src="/assets/feather.webp"
                alt="Decorative Krishna peacock feather illustration"
                className="pointer-events-none select-none absolute left-0 top-1/2 -translate-y-1/2 w-1/3 opacity-10 animate-parallax"
                style={{ zIndex: 1 }}
            />
            <div className="container mx-auto text-center relative z-10">
                <h2 className="font-dancing text-4xl mb-8 text-soft-gold animate-fade-in">
                    Wisdom from the Bhagavad Gita
                </h2>
                <div className="flex items-center justify-center gap-4 mb-6">
                    <button
                        aria-label="Previous verse"
                        onClick={prevVerse}
                        className="bg-soft-gold/30 hover:bg-soft-gold/60 text-soft-gold rounded-full p-3 shadow transition-all duration-300"
                    >
                        <span className="text-2xl">&#8592;</span>
                    </button>
                    <blockquote
                        key={current}
                        className="mx-auto max-w-2xl border-l-4 border-soft-gold pl-6 italic text-2xl font-ui bg-[#232946]/80 backdrop-blur-md rounded-xl shadow-lg animate-fade-in"
                        style={{ animationDelay: "0.1s" }}
                    >
                        <p className="mb-2 animate-text-pop">{verses[current].text}</p>
                        <footer className="text-lg text-soft-gold/70 font-dancing">{verses[current].reference}</footer>
                    </blockquote>
                    <button
                        aria-label="Next verse"
                        onClick={nextVerse}
                        className="bg-soft-gold/30 hover:bg-soft-gold/60 text-soft-gold rounded-full p-3 shadow transition-all duration-300"
                    >
                        <span className="text-2xl">&#8594;</span>
                    </button>
                </div>
                <div className="flex justify-center gap-2 mb-6">
                    {verses.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrent(idx)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${current === idx ? "bg-soft-gold shadow" : "bg-soft-gold/30"}`}
                            aria-label={`Go to verse ${idx + 1}`}
                        />
                    ))}
                </div>
                <a
                    href="https://www.holy-bhagavad-gita.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-8 py-3 bg-soft-gold text-divine-indigo font-bold rounded-full shadow-lg hover:bg-yellow-300 transition animate-glow"
                >
                    Read More
                </a>
            </div>
        </section>
    );
};

export default GitaVerseSection;