import React, { useState } from "react";
import { motion } from "framer-motion";
import "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js";

const Button = ({ onMouseEnter, children }) => (
    <button
        onMouseEnter={onMouseEnter}
        className="px-6 py-3 text-lg font-bold text-white rounded-md relative z-10"
        style={styles.button}
    >
        {children}
    </button>
);

const shapes = ["ellipse-outline", "triangle-outline", "square-outline"];
const colors = ["text-pink-500", "text-black", "text-white"];

const ScatterButton = () => {
    const [particles, setParticles] = useState([]);

    const handleHover = () => {
        const newParticles = Array.from({ length: 10 }).map(() => {
            const shape = shapes[Math.floor(Math.random() * shapes.length)];
            const color = colors[Math.floor(Math.random() * colors.length)];
            return {
                id: Math.random(),
                x: Math.random() * 150 - 75,
                y: Math.random() * 150 - 75,
                shape,
                color,
            };
        });
        setParticles(newParticles);
        setTimeout(() => setParticles([]), 1000);
    };

    return (
        <div className="relative">
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                        animate={{ opacity: 0, x: particle.x, y: particle.y, scale: 0.2 }}
                        transition={{ duration: 0.8 }}
                        className={`absolute text-6xl ${particle.color}`}
                    >
                        <ion-icon name={particle.shape}></ion-icon>
                    </motion.div>
                ))}
            </div>
            <Button onMouseEnter={handleHover}>Click Me</Button>
        </div>
    );
};

const styles = {
    button: {
        backgroundColor: '#F3A6B2',  // Squid game pink color
        border: 'none',
        color: 'white',
        fontSize: '16px',
        padding: '40px 60px',
        cursor: 'pointer',
        outline: 'none',
        textAlign: 'center',
        borderRadius: '8px',
    },
};

export default ScatterButton;
