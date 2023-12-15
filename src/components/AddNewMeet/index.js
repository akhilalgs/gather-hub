import React, { useState } from "react";
import Navbar from "../Navbar";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import { IoPeople } from "react-icons/io5";
import { CgNotes } from "react-icons/cg";
import "./index.css";

const AddNewMeet = () => {
    const [addNewMeet, setAddNewMeet] = useState({
        title: "",
        description: "",
        meeting_date: new Date(),
        start_time: "",
        end_time: "",
        meeting_attendees: "",
        
    });

    const handleDateChange = (date) => {
        setAddNewMeet({ ...addNewMeet, meeting_date: date });
    };

    const handleStartTimeChange = (start_time) => {
        setAddNewMeet({ ...addNewMeet, start_time });
    };

    const handleEndTimeChange = (end_time) => {
        setAddNewMeet({ ...addNewMeet, end_time });
    };

    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAddNewMeet({ ...addNewMeet, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:8080/add", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(addNewMeet),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // If the response is successful, you can handle it here
            console.log('Form submitted successfully');
            const data = response.json()
            console.log(data)

            // Reset the form or redirect if needed
        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle errors, maybe show an error message to the user
        }
    };


    return (
        <>
            <Navbar />
            <div>
                <form onSubmit={handleSubmit}>
                    <input className="Meeting-heading" placeholder="Add Title" type="text" value={addNewMeet.title}
                            onChange={handleInputChange}/>
                    <hr className="Meeting-underline" />
                    <div className="meeting-label-container">
                        <label className="meeting-label"><FaRegCalendarAlt className="icon-size" /></label>
                        <DatePicker className="date-picker" selected={addNewMeet.meeting_date} onChange={handleDateChange} />
                    </div >
                    <div className="meeting-label-container">
                        <IoPeople className="icon-size-1"/>
                        <input className="date-picker meeting-label"
                            type="text"
                            name="add-guest"
                            placeholder="Add Attendees / Add Guests"
                            //value={addNewMeet.agenda}
                            onChange={handleInputChange}/>
                       
                    </div>
                    <div className="meeting-label-container">                        
                        <label className="meeting-label meeting-side-heading">start Time:</label>
                        <TimePicker className="date-picker" value={addNewMeet.start_time} onChange={handleStartTimeChange} />
                    </div>
                    
                    <div className="meeting-label-container">
                        <label className="meeting-label meeting-side-heading">End Time:</label>
                        <TimePicker className="date-picker" value={addNewMeet.end_time} onChange={handleEndTimeChange} />
                    </div>

                    
                    <div className="meeting-label-container-1">                       
                        <CgNotes className="icon-size"/>
                        <textarea className="date-picker meeting-text-area-element"                            
                            name="description"
                            value={addNewMeet.description}
                            onChange={handleInputChange}
                            placeholder="Enter agenda / Description"
                        />
                    </div>
                    <div>
                        <button className="new-metting-button" type="submit">Create</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddNewMeet;
