import React from "react";

const Bgbutton = ({ onMouseEnter, children, image }) => (
    <button
        onMouseEnter={onMouseEnter}
        className="px-6 py-3 text-lg font-bold bg-red-600 text-white rounded-md relative z-10"
        style={{ ...styles.button, backgroundImage: `url(${image})` }}
    >
        {children}
    </button>
);

const styles = {
    button: {
        backgroundSize: 'contain',  // Ensures the whole image is visible
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat', // Prevents image from repeating
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

export default Bgbutton;
