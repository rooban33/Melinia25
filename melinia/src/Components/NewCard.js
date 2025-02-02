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
    eventId,
    imageSrc,
    altText = "Tilted card image",
    captionText = "",
    buttonText = "Learn More", // Button text
    containerHeight = "300px",
    containerWidth = "100%",
    imageHeight = "300px",
    imageWidth = "300px",
    scaleOnHover = 1.1,
    rotateAmplitude = 8,
    showMobileWarning = true,
    showTooltip = true,
    overlayContent = null,
    displayOverlayContent = false,
    dampeningFactor = 1, //0.5
}) {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useSpring(useMotionValue(0), springValues);
    const rotateY = useSpring(useMotionValue(0), springValues);
    const scale = useSpring(1, springValues);
    const opacity = useSpring(0);
    const rotateFigcaption = useSpring(0, {
        stiffness: 250,
        damping: 20,
        mass: 1,
    });
    const navigate = useNavigate();
    const [lastY, setLastY] = useState(0);

    const handleEventClick = () => {
        navigate(`/event/${eventId}`);
    };

    function handleMouse(e) {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const offsetX = (e.clientX - rect.left - rect.width / 2) * dampeningFactor; // Apply dampening
        const offsetY = (e.clientY - rect.top - rect.height / 2) * dampeningFactor; // Apply dampening

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
    }

    function handleMouseLeave() {
        opacity.set(0);
        scale.set(1);
        rotateX.set(0);
        rotateY.set(0);
        rotateFigcaption.set(0);
    }

    return (
        <figure
            ref={ref}
            className="relative w-full h-full [perspective:800px] flex flex-col items-center justify-between"
            style={{
                height: containerHeight,
                width: containerWidth,
            }}
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
                    className="absolute top-0 left-0 object-cover rounded-[15px] will-change-transform [transform:translateZ(0)]"
                    style={{
                        width: imageWidth,
                        height: imageHeight,
                    }}
                />
            </motion.div>

            {displayOverlayContent && overlayContent && (
                <motion.div
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray bg-opacity-80 rounded-lg p-4 text-center shadow-md"
                    style={{
                        width: imageWidth,
                    }}
                >
                    <p className="text-lg text-gray-800 font-medium">{overlayContent}</p>
                    <button className="learn-more" onClick={handleEventClick}>
                        <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">{buttonText}</span>
                    </button>

                </motion.div>
            )}


            {/* Caption placed at the bottom
            <figcaption className="mt-4 text-center text-sm text-gray-700">
                {captionText}
            </figcaption>

            {/* Button placed below the caption */}
            {/* <button
                className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={() => alert("Button clicked")}
            >
                {buttonText}
            </button> */}

            {/* <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
                        onClick={handleEventClick}
                    >

                        {buttonText}
                    </button> */}


        </figure>
    );
}
