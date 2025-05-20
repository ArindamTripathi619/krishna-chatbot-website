import React, { useRef, useEffect, useState } from 'react';
import ScreenshotsGallery from './ScreenshotsGallery';
import { FaCommentDots, FaHandsHelping, FaSpa, FaShieldAlt, FaGithub } from 'react-icons/fa';

const features = [
    {
        icon: <FaCommentDots className="text-3xl text-soft-gold mb-2 group-hover:scale-125 group-hover:text-yellow-400 transition-transform duration-300" />,
        title: "Talk in natural language",
    },
    {
        icon: <FaHandsHelping className="text-3xl text-soft-gold mb-2 group-hover:scale-125 group-hover:text-yellow-400 transition-transform duration-300" />,
        title: "Receive advice and blessings",
    },
    {
        icon: <FaSpa className="text-3xl text-soft-gold mb-2 group-hover:scale-125 group-hover:text-yellow-400 transition-transform duration-300" />,
        title: "Calming UI with spiritual vibe",
    },
    {
        icon: <FaShieldAlt className="text-3xl text-soft-gold mb-2 group-hover:scale-125 group-hover:text-yellow-400 transition-transform duration-300" />,
        title: "Privacy-respecting and ad-free",
    },
];

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const [inView, setInView] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    setHasAnimated(true);
                } else {
                    setInView(false);
                }
            },
            { threshold: 0.3 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="showcase-section"
            ref={sectionRef}
            className="relative py-24 overflow-x-hidden transition-colors duration-500"
        >
            <div className={`container mx-auto flex flex-col lg:flex-row items-center justify-between transition-all duration-700
                ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}>
                {/* Phone Gallery - always left */}
                <div className="w-full lg:w-1/2 flex justify-center mb-12 lg:mb-0">
                    <ScreenshotsGallery enlarged={false} />
                </div>
                {/* Features - always right */}
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
                    <h2 className="font-parisienne text-4xl text-divine-purple dark:text-yellow-300 mb-10 text-center lg:text-left">
                        Features
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                        {features.map((feature, idx) => (
                            <div
                                key={idx}
                                className={`
                                    group bg-gradient-to-br from-white via-purple-100 to-soft-gold/30 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800
                                    rounded-2xl shadow-xl p-8 flex flex-col items-center
                                    hover:scale-105 hover:shadow-2xl hover:border-soft-gold border-2 border-transparent
                                    transition-all duration-500
                                    ${
                                        inView
                                            ? `animate-feature-card-in`
                                            : `opacity-0 translate-y-10`
                                    }
                                `}
                                style={{
                                    animationDelay: inView ? `${idx * 120 + 100}ms` : "0ms",
                                    animationFillMode: "both"
                                }}
                            >
                                {feature.icon}
                                <h3 className="font-ui text-lg font-semibold text-divine-indigo dark:text-yellow-200">{feature.title}</h3>
                            </div>
                        ))}
                    </div>
                    {/* Download button - always centered */}
                    <div className="flex justify-center w-full mt-10">
                        <a
                            href="https://github.com/ArindamTripathi619/krishna_chatbot/releases/v1.1.1/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center bg-soft-gold text-divine-indigo font-bold px-6 py-3 rounded-full shadow-lg
                                hover:bg-yellow-300 hover:scale-105 hover:shadow-yellow-300/80
                                focus:ring-4 focus:ring-yellow-200
                                transition-all duration-300 ease-out
                                animate-glow"
                        >
                            <FaGithub className="mr-2" /> Download from GitHub
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShowcaseSection;