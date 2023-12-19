import React from "react";

import { CgBorderStyleDotted } from "react-icons/cg";

import "./index.css"

const NewMeet = ({ newItem }) => {
    console.log(newItem,"kap");
    const whenDate = new Date(newItem.meeting_date);
    return (
        <li className="new-meet-item">
            <div className="calender">
                <div className="calender-details">
                    <div className="calender-item">
                        <p className="month">{whenDate.toDateString()}</p>
                    </div>
                    <div className="day-date-container">
                        <h2 className="date"></h2>
                        <CgBorderStyleDotted className="dots" />
                        <h2 className="day"></h2>
                    </div>
                </div>
            </div>
            <div className="event-details-container">
                <div>
                    <h1 className="event-name-heading">Event Name: {newItem.title}</h1>
                    <p className="event-details-para">Date: <span className="event-details-span">{whenDate.toDateString()}</span></p>
                     <p className="event-details-para">Who: <span className="event-details-span" id="who">{newItem.meeting_attendees}</span></p> 
                    <p className="event-details-para">Agenda: <span className="event-details-span">{newItem.description}</span></p>
                </div>
            </div>
        </li >
    );
};

export default NewMeet;