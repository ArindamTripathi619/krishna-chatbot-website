import React, { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ScreenshotsGallery = ({ enlarged }) => {
    const screenshots = [
        { src: '/screenshots/welcome_screen.webp', alt: 'Welcome Screen' },
        { src: '/screenshots/login_screen.webp', alt: 'Login Screen' },
        { src: '/screenshots/register_screen.webp', alt: 'Register Screen' },
        { src: '/screenshots/chat_screen.webp', alt: 'Chat Screen' },
        { src: '/screenshots/offline_alert_screen.webp', alt: 'Offline Alert Screen' },
    ];

    const [current, setCurrent] = useState(0);
    const [paused, setPaused] = useState(false);
    const intervalRef = useRef();

    // Auto-rotate logic
    useEffect(() => {
        if (!paused) {
            intervalRef.current = setInterval(() => {
                setCurrent((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
            }, 4000);
        }
        return () => clearInterval(intervalRef.current);
    }, [paused, screenshots.length]);

    // Swipe support (mobile)
    useEffect(() => {
        let startX = null;
        const handleTouchStart = (e) => { startX = e.touches[0].clientX; };
        const handleTouchEnd = (e) => {
            if (startX === null) return;
            const endX = e.changedTouches[0].clientX;
            if (endX - startX > 50) prevScreenshot();
            else if (startX - endX > 50) nextScreenshot();
            startX = null;
        };
        const phone = document.getElementById('phone-mockup');
        if (phone) {
            phone.addEventListener('touchstart', handleTouchStart);
            phone.addEventListener('touchend', handleTouchEnd);
        }
        return () => {
            if (phone) {
                phone.removeEventListener('touchstart', handleTouchStart);
                phone.removeEventListener('touchend', handleTouchEnd);
            }
        };
        // eslint-disable-next-line
    }, [current]);

    const prevScreenshot = () => setCurrent((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
    const nextScreenshot = () => setCurrent((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));

    return (
        <div
            className={`
                transition-all duration-700
                ${enlarged ? 'scale-110 shadow-2xl' : 'scale-100'}
            `}
        >
            <section className="py-16 transition-colors duration-500">
                <h2 className="font-satisfy text-3xl text-divine-indigo dark:text-yellow-300 text-center mb-8">
                    App Screenshots
                </h2>
                <div className="flex items-center justify-center space-x-6">
                    <button
                        onClick={prevScreenshot}
                        className="p-3 rounded-full bg-white/80 hover:bg-soft-gold text-divine-indigo text-2xl shadow-lg transition
                            hover:scale-125 hover:shadow-yellow-300/60 focus:outline-none"
                        aria-label="Previous Screenshot"
                    >
                        <FaChevronLeft />
                    </button>
                    <div
                        className="relative flex flex-col items-center group"
                        onMouseEnter={() => setPaused(true)}
                        onMouseLeave={() => setPaused(false)}
                    >
                        {/* Classic phone carousel mockup */}
                        <div
                            id="phone-mockup"
                            className="relative bg-black rounded-3xl border-4 border-soft-gold shadow-2xl p-4 w-[350px] h-[721px] flex flex-col items-center"
                            style={{ boxShadow: '0 8px 40px 0 rgba(250, 204, 21, 0.15), 0 2px 8px 0 rgba(0,0,0,0.10)' }}
                        >
                            {/* Speaker */}
                            <div className="w-20 h-2 bg-gray-700 rounded-full mt-3 mb-3"></div>
                            <img
                                src={screenshots[current].src}
                                alt={screenshots[current].alt}
                                className="rounded-2xl w-[300px] h-[600px] object-cover shadow-lg"
                                draggable={false}
                            />
                            {/* Home button */}
                            <div className="w-10 h-1 bg-gray-700 rounded-full mt-3 mb-2"></div>
                        </div>
                        {/* Dots */}
                        <div className="flex justify-center mt-4 space-x-2">
                            {screenshots.map((_, idx) => (
                                <span
                                    key={idx}
                                    className={`inline-block w-3 h-3 rounded-full transition-all duration-300 ${idx === current ? 'bg-soft-gold scale-125 shadow-lg' : 'bg-gray-300'}`}
                                />
                            ))}
                        </div>
                        <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-xs text-gray-400 font-ui select-none">Swipe or use arrows</span>
                    </div>
                    <button
                        onClick={nextScreenshot}
                        className="p-3 rounded-full bg-white/80 hover:bg-soft-gold text-divine-indigo text-2xl shadow-lg transition
                            hover:scale-125 hover:shadow-yellow-300/60 focus:outline-none"
                        aria-label="Next Screenshot"
                    >
                        <FaChevronRight />
                    </button>
                </div>
            </section>
        </div>
    );
};

export default ScreenshotsGallery;