import React, { useState } from "react";
import Navbar from "../Navbar";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import { MdAccessTimeFilled } from "react-icons/md";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import { IoPeople } from "react-icons/io5";
import { CgNotes } from "react-icons/cg";
import "./index.css";
import axios from "axios";
import { useNavigate } from "react-router-dom/dist";
import it from "react-dom/client";
 
const AddNewMeet = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [meeting_date, setMeeting_date] = useState("");
  const [start_time, setStart_time] = useState("");
  const [end_time, setEnd_time] = useState("");
  const [meetingAttendees, setMeetingAttendees] = useState([]);
  const navigate = useNavigate();
 
  const save = async (e) => {
    e.preventDefault();
    if (
      title === "" ||
      description === "" ||
      meeting_date === "" ||
      start_time === "" ||
      end_time === "" ||
      meetingAttendees === ""
    ) {
      alert("Please fill in all fields.");
      return;
    }
    try {
      const response = await axios.post("http://localhost:8080/add", {
        title: title,
        description: description,
        meeting_date: meeting_date,
        start_time: start_time,
        end_time: end_time,
        meeting_attendees: meetingAttendees,
      });
      alert("Metting added successfully");
      navigate("/CalendarView");
    } catch (error) {
      console.error(error);
    }
  };
 
  return (
    <>
      <Navbar />
      <div>
        <IoMdArrowRoundBack  className="meeting-label-1"/>
        <form>
          <input
            className="Meeting-heading"
            placeholder="Add Title"
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
 
          <hr className="Meeting-underline" />
          <div className="meeting-label-container">
            <label className="meeting-label">
              <FaRegCalendarAlt className="icon-size" />
            </label>
            <DatePicker
              className="date-picker"
              selected={meeting_date}
              onChange={(date) => setMeeting_date(date)}
            />
          </div>
          <div className="meeting-label-container">
             <label className="meeting-label">
              <IoPeople className="icon-size" />
             </label>
           
            <input
              className="date-picker "
              type="text"
              name="add-guest"
              placeholder="Add Attendees/Add Guests"
              value={meetingAttendees.join(",")} // Display the array as a string with commas
              onChange={(e) => setMeetingAttendees(e.target.value.split(","))}
            />
          </div>
          <div className="meeting-label-container">
            {/* <label className="meeting-label meeting-side-heading">start Time:</label> */}
            <label className="meeting-label">
              <MdAccessTimeFilled className="icon-size" />
            </label>
            <input
              className="date-picker"
              placeholder="Start Time"
              value={start_time}
              onChange={(e) => setStart_time(e.target.value)}
            />
          </div>
 
          <div className="meeting-label-container">
            {/* <label className="meeting-label meeting-side-heading">End Time:</label> */}
            <label className="meeting-label">
              <MdAccessTimeFilled className="icon-size" />
            </label>
            <input
              className="date-picker"
              placeholder="End Time"
              value={end_time}
              onChange={(e) => setEnd_time(e.target.value)}
            />
          </div>
 
          <div className="meeting-label-container">
            <label className="meeting-label-2">
              <CgNotes className="icon-size" />
            </label>
           
            <textarea
              className="date-picker meeting-text-area-element"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter agenda / description"
            />
          </div>
          <div className="button-container">
            <button onClick={save} className="new-metting-button" type="submit">
              Create
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
 
export default AddNewMeet;