import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import NewMeet from '../NewMeet';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './index.css';

const Meetings = () => {
    const [meetings, setMeetings] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/meetings');
                setMeetings(response.data);
            } catch (error) {
                console.error('Error fetching meetings:', error);
            }
        };

        fetchData();
    }, []);

    const newMeetButton = () => {
        navigate('/new-metting');
    };

    return (
        <>
            <Navbar />
            <div className="meetings-main-container">
                <div className="new-button-container">
                    <button onClick={newMeetButton} className="new-metting-button" type="button">
                        New Meeting
                    </button>
                </div>

                <ul className="meetings-cards-container">
                    {meetings.map((meeting) => (
                        <NewMeet key={meeting.id} newItem={meeting} />
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Meetings;
