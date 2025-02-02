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
                value: "transparent",
            },
        },
        fpsLimit: 60,
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "repulse",
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
                value: 30,
                density: {
                    enable: true,
                    area: 800,
                },
            },
            color: {
                value: ["#FF1199", "#11FFEE"], // Alternating colors
            },
            shape: {
                type: ["circle", "square", "triangle"],
            },
            opacity: {
                value: 0,
            },
            size: {
                value: 30,
                random: true,
            },
            stroke: {
                width: 6,
                color: ["#FF1199", "#11FFEE"], // Alternating border colors
            },
            rotate: {
                value: {
                    min: 0,
                    max: 360,
                },
                animation: {
                    enable: true,
                    speed: 10,
                    sync: false,
                },
            },
            move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: false,
                straight: false,
                outModes: {
                    default: "bounce",
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