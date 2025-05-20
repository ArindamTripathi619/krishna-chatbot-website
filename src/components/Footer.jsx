import React from 'react';
import { FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => (
    <footer className="bg-[#181c2f] text-soft-gold py-8 font-ui relative transition-colors duration-500">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-yellow-300 via-soft-gold to-yellow-300 blur-sm opacity-70 rounded-full"></div>
        <div className="container mx-auto text-center">
            <p className="mb-2">© {new Date().getFullYear()} Krishna Chatbot Companion App</p>
            <p className="mb-1 text-sm text-soft-gold/80">
                Made with <span className="animate-pulse text-red-400">❤️</span> by Arindam Tripathi
            </p>
            <div className="flex justify-center space-x-6 text-2xl mt-4">
                <a
                    href="https://github.com/ArindamTripathi619"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white hover:scale-125 transition-transform duration-200"
                    aria-label="GitHub"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.instagram.com/_arindxm/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-400 hover:scale-125 transition-transform duration-200"
                    aria-label="Instagram"
                >
                    <FaInstagram />
                </a>
                <a
                    href="mailto:arindamofficial7@gmail.com"
                    className="hover:text-green-400 hover:scale-125 transition-transform duration-200"
                    aria-label="Email"
                >
                    <FaEnvelope />
                </a>
            </div>
        </div>
    </footer>
);

export default Footer;