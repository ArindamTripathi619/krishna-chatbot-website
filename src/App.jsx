import React from "react";
import { ThemeProvider } from "./context/ThemeContext";

import HeroSection from "./components/HeroSection";
import ShowcaseSection from "./components/ShowcaseSection";
import UserFeedbackSection from "./components/UserFeedbackSection";
import GitaVerseSection from "./components/GitaVerseSection";
import Footer from "./components/Footer";
import ParticlesBackground from "./components/ParticlesBackground";
import FAQSection from './components/FAQSection';

function App() {
    return (
        <ThemeProvider>
            <ParticlesBackground />
            <HeroSection />
            <ShowcaseSection />
            <FAQSection />
            <UserFeedbackSection />
            <GitaVerseSection />
            <Footer />
        </ThemeProvider>
    );
}

export default App;