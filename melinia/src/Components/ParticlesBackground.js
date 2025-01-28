import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import { useCallback } from "react"
import particlesConfig from "./config/particles-config";
import { Galaxy } from 'react-stars-particles';

export const Particle = () => {
    const particlesInit = useCallback(async (engine) => {
        //console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesConfig = {
        background: {
            color: {
                value: "transparent", // Ensure background is not affected
            },
        },
        fpsLimit: 60,
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "repulse", // Interactive effect on hover
                },
                resize: true,
            },
            modes: {
                repulse: {
                    distance: 100,
                    duration: 0.4,
                },
            },
        },
        particles: {
            number: {
                value: 30, // Number of shapes
                density: {
                    enable: true,
                    area: 800,
                },
            },
            color: {
                value: "#ffffff", // Border color (white)
            },
            shape: {
                type: ["circle", "square", "triangle"], // Shapes to render
            },
            opacity: {
                value: 0, // Fully transparent fill
            },
            size: {
                value: 30, // Shape size
                random: true,
            },
            stroke: {
                width: 6, // Border thickness
                color: "#ffffff", // White border color
            },
            rotate: {
                value: {
                    min: 0,
                    max: 360, // Allow random rotation angles
                },
                animation: {
                    enable: true, // Enable rotation animation
                    speed: 10, // Speed of rotation
                    sync: false, // Each shape rotates independently
                },
            },
            move: {
                enable: true,
                speed: 1, // Movement speed
                direction: "none",
                random: false,
                straight: false,
                outModes: {
                    default: "bounce", // Shapes bounce off edges
                },
            },
        },
        detectRetina: true,
    };

    const particlesLoaded = useCallback(async (container) => {
        //console.log(container);
    }, []);
    return (
        // <Particles
        //     id="tsparticles"
        //     init={particlesInit}
        //     loaded={particlesLoaded}
        //     style={{
        //         width: "100%",
        //         height: "100%",
        //         position: "absolute",
        //         top: "0",
        //         left: "0"
        //     }}
            // params={particlesConfig}
        // />
    //     <Galaxy 
    //     quantity={500}
    //     attract={0.8}
    //     repulse={0.3}
    //     color="white"
    //   />

    <Particles
    id="tsparticles"
    init={particlesInit}
    style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: "0",
        left: "0",
        opacity:"0.5"
    }}
    options={particlesConfig}
/>
    );
};

