import React, { useEffect, useRef } from "react";

const NUM_PARTICLES = 100;

const random = (min, max) => Math.random() * (max - min) + min;

const ParticlesBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const particles = Array.from({ length: NUM_PARTICLES }).map(() => ({
            x: random(0, width),
            y: random(0, height),
            r: random(1.5, 3.5),
            speed: random(0.1, 0.4),
            angle: random(0, 2 * Math.PI),
            opacity: random(0.3, 0.7),
        }));

        let animationId;
        function animate() {
            ctx.clearRect(0, 0, width, height);
            for (const p of particles) {
                ctx.save();
                ctx.globalAlpha = p.opacity;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
                ctx.fillStyle = "rgba(250,204,21,0.7)"; // soft gold
                ctx.shadowColor = "#facc15";
                ctx.shadowBlur = 12;
                ctx.fill();
                ctx.restore();

                // Move particle
                p.x += Math.cos(p.angle) * p.speed;
                p.y += Math.sin(p.angle) * p.speed;
                p.angle += random(-0.01, 0.01);

                // Wrap around edges
                if (p.x < 0) p.x = width;
                if (p.x > width) p.x = 0;
                if (p.y < 0) p.y = height;
                if (p.y > height) p.y = 0;
            }
            animationId = requestAnimationFrame(animate);
        }

        animate();

        function handleResize() {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        }
        window.addEventListener("resize", handleResize);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full pointer-events-none z-0"
            aria-hidden="true"
        />
    );
};

export default ParticlesBackground;