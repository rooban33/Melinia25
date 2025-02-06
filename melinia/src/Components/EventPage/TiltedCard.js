import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./learnmorebutton.css";

const springValues = {
    damping: 30,
    stiffness: 100,
    mass: 2,
};

export default function TiltedCard({
    is_flagship,
    eventId,
    imageSrc,
    altText = "Tilted card image",
    captionText = "",
    buttonText = "Learn More",
    containerHeight = "300px",
    containerWidth = "100%",
    imageHeight = "320px",
    imageWidth = "100%",
    scaleOnHover = 1.1,
    rotateAmplitude = 8,
    showMobileWarning = true,
    showTooltip = true,
    overlayContent = null,
    displayOverlayContent = false,
    dampeningFactor = 1,
    speedFactor = 0.4,  // <-- New prop to control speed
}) {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useSpring(useMotionValue(0), springValues);
    const rotateY = useSpring(useMotionValue(0), springValues);
    const scale = useSpring(1, springValues);
    const opacity = useSpring(0);
    const rotateFigcaption = useSpring(0, { stiffness: 250, damping: 20, mass: 1 });
    const navigate = useNavigate();
    const [lastY, setLastY] = useState(0);
    const [stars, setStars] = useState([]);

    const handleEventClick = () => {
        const registrationLinks = {
            "1": "https://unstop.com/p/melinia-hackathon-2025-coimbatore-institute-of-technology-cit-coimbatore-1389350",
            "2": "https://unstop.com/p/the-pitch-pit-coimbatore-institute-of-technology-cit-coimbatore-1389526?lb=PETC6GS6",
        };
        if (registrationLinks[eventId]) {
            window.location.href = registrationLinks[eventId]; // Redirect to registration page
        } else {
            navigate(`/event/${eventId}`); // Navigate to the event page if not in the list
        }
    };


    function handleMouse(e) {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const offsetX = (e.clientX - rect.left - rect.width / 2) * dampeningFactor;
        const offsetY = (e.clientY - rect.top - rect.height / 2) * dampeningFactor;

        const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
        const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

        rotateX.set(rotationX);
        rotateY.set(rotationY);

        x.set(e.clientX - rect.left);
        y.set(e.clientY - rect.top);

        const velocityY = offsetY - lastY;
        rotateFigcaption.set(-velocityY * 0.6);
        setLastY(offsetY);
    }

    function handleMouseEnter() {
        scale.set(scaleOnHover);
        opacity.set(1);
        if (is_flagship) {
            createStars();
        }
    }


    function handleMouseLeave() {
        opacity.set(0);
        scale.set(1);
        rotateX.set(0);
        rotateY.set(0);
        rotateFigcaption.set(0);

        setTimeout(() => setStars([]), 800);
    }

    function createStars() {
        const numStars = 20;
        const rect = ref.current.getBoundingClientRect();
        const newStars = Array.from({ length: numStars }).map(() => {
            const borderSide = Math.floor(Math.random() * 4);
            let x = 0, y = 0;

            switch (borderSide) {
                case 0: x = Math.random() * rect.width; y = 0; break;
                case 1: x = rect.width; y = Math.random() * rect.height; break;
                case 2: x = Math.random() * rect.width; y = rect.height; break;
                case 3: x = 0; y = Math.random() * rect.height; break;
            }

            // Apply speed factor to velocity
            const velocityX = ((x === 0 ? -1 : x === rect.width ? 1 : Math.random() - 0.5) * 200) * speedFactor;
            const velocityY = ((y === 0 ? -1 : y === rect.height ? 1 : Math.random() - 0.5) * 200) * speedFactor;

            return {
                id: Math.random(),
                x,
                y,
                velocityX,
                velocityY,
                scale: Math.random() * 1 + 0.2,
            };
        });
        setStars(newStars);
    }

    return (
        <figure
            ref={ref}
            className="relative w-full h-full [perspective:800px] flex flex-col items-center justify-between overflow-visible"
            style={{ height: containerHeight, width: containerWidth }}
            onMouseMove={handleMouse}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {showMobileWarning && (
                <div className="absolute top-4 text-center text-sm block sm:hidden">
                    This effect is not optimized for mobile. Check on desktop.
                </div>
            )}

            <motion.div
                className="relative [transform-style:preserve-3d]"
                style={{
                    width: imageWidth,
                    height: imageHeight,
                    rotateX,
                    rotateY,
                    scale,
                }}
            >
                <motion.img
                    src={imageSrc}
                    alt={altText}
                    className="absolute top-0 left-0 object-cover rounded-[15px] will-change-transform"
                    style={{ width: imageWidth, height: imageHeight }}
                />
            </motion.div>

            {displayOverlayContent && overlayContent && (
                <motion.div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gray bg-opacity-80 rounded-lg p-4 text-center"
                    style={{ width: imageWidth }}
                >
                    <p className="text-lg text-gray-800 font-medium mb-2">{overlayContent}</p>
                    <button className="learn-more" onClick={handleEventClick}>
                        <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">{buttonText}</span>
                    </button>
                </motion.div>
            )}

            {stars.map((star) => (
                <motion.div
                    key={star.id}
                    className="absolute star-shape shadow-lg"
                    style={{
                        width: `${star.scale * 12}px`,
                        height: `${star.scale * 12}px`,
                        top: `${star.y}px`,
                        left: `${star.x}px`,
                    }}
                    initial={{ opacity: 1, scale: star.scale }}
                    animate={{
                        opacity: 0,
                        x: star.velocityX,
                        y: star.velocityY,
                        transition: { duration: 0.8, ease: "easeOut" },
                    }}
                />
            ))}
        </figure>
    );
}
