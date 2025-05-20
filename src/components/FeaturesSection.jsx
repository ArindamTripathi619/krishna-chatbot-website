import React from 'react';
import { FaCommentDots, FaHandsHelping, FaSpa, FaShieldAlt } from 'react-icons/fa';

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

const FeaturesSection = () => (
    <section className="py-16 transition-colors duration-500">
        <div className="container mx-auto text-center">
            <h2 className="font-krishna text-4xl text-divine-purple dark:text-yellow-300 mb-10">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, idx) => (
                    <div
                        key={idx}
                        className="group bg-gradient-to-br from-white via-purple-100 to-soft-gold/30 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-2xl shadow-xl p-8 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-transform duration-300"
                    >
                        {feature.icon}
                        <h3 className="font-ui text-lg font-semibold text-divine-indigo dark:text-yellow-200">{feature.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default FeaturesSection;