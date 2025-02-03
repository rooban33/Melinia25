import React from "react";
import "./DetailCard.css"; // Ensure this CSS file contains the styles
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AccessAlarmsOutlinedIcon from "@mui/icons-material/AccessAlarmsOutlined";

const DetailCard = ({ venue, date, time }) => {
    return (
        <div className="custom-card">
            <p className="custom-heading">
                <LocationOnOutlinedIcon style={{ marginRight: '8px' }} />
                {venue}
            </p>
            <p className="custom-heading">
                <CalendarMonthOutlinedIcon style={{ marginRight: '8px' }} />
                {date}
            </p>
            <p className="custom-heading">
                <AccessAlarmsOutlinedIcon style={{ marginRight: '8px' }} />
                {time}
            </p>
        </div>
    );
};

export default DetailCard;