import React from 'react';
import { FaGithub } from 'react-icons/fa';

const HeroSection = () => {
    return (
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden transition-colors duration-500">
            {/* Soft radial glow behind the title */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <div className="w-[600px] h-[600px] rounded-full bg-gradient-radial from-yellow-400/30 via-yellow-300/10 to-transparent blur-3xl opacity-70"></div>
            </div>
            {/* Glowing feather */}
            <img
                src="/assets/feather.webp"
                alt="Decorative Krishna Feather Illustration"
                className="absolute left-0 top-0 w-1/3 opacity-10 pointer-events-none animate-feather-float"
            />
            {/* Lord Krishna Silhouette */}
            <img
                src="/assets/lord_krishna_silhouette.svg"
                alt="Lord Krishna Silhouette"
                className="absolute right-0 bottom-0 md:right-10 md:bottom-0 w-1/4 md:w-1/5 opacity-20 md:opacity-30 drop-shadow-[0_0_40px_rgba(250,204,21,0.4)] pointer-events-none select-none"
                style={{ zIndex: 2 }}
            />
            
            <div className="relative z-10 flex flex-col items-center text-center">
                <h1 className="font-tangerine text-5xl md:text-9xl text-soft-gold dark:text-yellow-300 drop-shadow-lg mb-4 animate-pulse shiny-text">
                    Chat With Krishna
                </h1>
                <br/>
                <br/>
                <br/>
                <p className="font-parisienne text-lg md:text-3xl text-yellow-100 mb-4 animate-fade-in">
                    Experience divine conversations and guidance 🙏✨.
                </p>
                <br/>
                <br/>
               
                <p className="font-merienda text-xl md:text-6xl text-divine-purple dark:text-yellow-300 mb-8 mt-16 min-h-[3.5rem] flex flex-wrap justify-center gap-x-6 gap-y-2 animate-glow-infinite">
                    {[
                        "Your",
                        "Divine",
                        "AI",
                        "Companion",
                        "for",
                        "soulful",
                        "conversations"
                    ].map((word, idx) => (
                        <span
                            key={idx}
                            className="inline-block animate-jump-in"
                            style={{ animationDelay: `${idx * 0.18 + 0.2}s`, animationFillMode: "both" }}
                        >
                            {word}
                        </span>
                    ))}
                </p>

                <br/>
                <div className="flex space-x-4 mt-10">
                    <button
                        onClick={() => {
                            const showcase = document.getElementById('showcase-section');
                            if (showcase) {
                                showcase.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        className="flex items-center bg-soft-gold text-divine-indigo font-bold px-6 py-3 rounded-full shadow-lg
                            hover:bg-yellow-300 hover:scale-105 hover:shadow-yellow-300/80
                            focus:ring-4 focus:ring-yellow-200
                            transition-all duration-300 ease-out
                            animate-glow"
                    >
                        <FaGithub className="mr-2" /> Download the App
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;