import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import axios from 'axios';
import Navbar from '../Navbar';

const CalendarView = () => {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    // Fetch meetings from backend
    axios.get('http://localhost:8080/meetings')
      .then(response => {
        setMeetings(response.data);
      })
      .catch(error => {
        console.error('Error fetching meetings:', error);
      });
  }, []);

  const events = meetings.map(meeting => ({
    title: meeting.title,
    start: meeting.meeting_date,
    end: meeting.meeting_date,
    description: meeting.description,
    start_time: meeting.start_time,
    end_time: meeting.end_time,
  }));

  const eventContent = ({ event }) => {
    return (
      <>
      
        <div
          style={{
            backgroundColor: '#4CAF50', // Adjust block color as needed
            color: 'white',
            padding: '5px',
            borderRadius: '5px',
            textAlign: 'center',
          }}
        >
          <b>{event.title}</b>
          <p>{event.start.toLocaleDateString()}</p>
          <p>{event.description}</p>
        </div>
      </>
    );
  };

  return (
    <div>
        <Navbar />
    <div>
      
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventContent={eventContent}
      />
    </div>
    </div>
  );
};

export default CalendarView;
