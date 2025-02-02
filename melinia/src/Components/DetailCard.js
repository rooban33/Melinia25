import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AccessAlarmsOutlinedIcon from "@mui/icons-material/AccessAlarmsOutlined";

const DetailCard = ({ venue, date, time }) => {
    const styles = {
        card: {
            backgroundColor: "#ff3860", // Squid Game Red
            color: "black",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            width: "350px", // Increased width
            fontFamily: "'Poppins', sans-serif",
            transition: "transform 0.3s ease-in-out",
            marginTop: "20px"
        },
        cardHover: {
            transform: "scale(1.05)", // Zoom effect on hover
        },
        row: {
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "10px",
        },
        title: {
            fontSize: "20px",
            fontWeight: "bold",
        },
        text: {
            fontSize: "16px",
        },
    };

    return (
        <div
            style={styles.card}
            onMouseEnter={(e) => (e.currentTarget.style.transform = styles.cardHover.transform)}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}>

            <div style={styles.row}>
                <LocationOnOutlinedIcon />
                <h2 style={styles.title}>{venue}</h2>
            </div>
            <div style={styles.row}>
                <CalendarMonthOutlinedIcon />
                <p style={styles.text}>{date}</p>
            </div>
            <div style={styles.row}>
                <AccessAlarmsOutlinedIcon />
                <p style={styles.text}>{time}</p>
            </div>
        </div>
    );
};

export default DetailCard;
