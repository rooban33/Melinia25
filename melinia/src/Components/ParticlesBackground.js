import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback, useEffect, useState } from "react";

export const Particle = () => {
    const [useParticles, setUseParticles] = useState(true);

    useEffect(() => {
        const checkPerformance = () => {
            let fps = 0;
            let startTime = performance.now();

            requestAnimationFrame(() => {
                let elapsedTime = performance.now() - startTime;
                fps = 1000 / elapsedTime;

                const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
                const speed = connection ? connection.downlink : 5; // Default to 5 Mbps if unknown
                const memory = navigator.deviceMemory || 2;

                if (speed < 2) {
                    window.alert(fps,speed);
                    setUseParticles(false);
                }
            });
        };

        checkPerformance();
    }, []);

    const particlesConfig = {
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        interactivity: {
            events: { onHover: { enable: true, mode: "repulse" }, resize: true },
            modes: { repulse: { distance: 100, duration: 0.4 } },
        },
        particles: {
            number: { value: 30, density: { enable: true, area: 800 } },
            color: { value: ["#FF1199", "#11FFEE"] },
            shape: { type: ["circle", "square", "triangle"] },
            opacity: { value: 0 },
            size: { value: 30, random: true },
            stroke: { width: 6, color: ["#FF1199", "#11FFEE"] },
            rotate: {
                value: { min: 0, max: 360 },
                animation: { enable: true, speed: 10, sync: false },
            },
            move: { enable: true, speed: 1, direction: "none", outModes: { default: "bounce" } },
        },
        detectRetina: true,
    };

    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    if (!useParticles) {
        return (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: "0",
                    left: "0",
                    backgroundColor: "black",
                }}
            />
        );
    }

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: "0",
                left: "0",
                opacity: "0.5",
            }}
            options={particlesConfig}
        />
    );
};
