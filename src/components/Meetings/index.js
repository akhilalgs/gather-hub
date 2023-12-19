
import Navbar from "../Navbar"
import NewMeet from "../NewMeet"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import Cookies from 'js-cookie'; 
import "./index.css"
 
const myMeetings = [{ id: uuidv4(),  who: "akhila@gamil.com", agenda: "developer testing" }, { id: uuidv4(),  who: "akhila@gamil.com", agenda: "developer testing" }, { id: uuidv4(),  who: "akhila@gamil.com", agenda: "developer testing" }, { id: 4,  who: "akhila@gamil.com", agenda: "developer testing" }]
 
const Meetings = () => {
    const [meetings, setMeetings] = useState([])
    const navigate = useNavigate();
    const token = Cookies.get('token');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8081/meetings',{
                    headers: {
                        'Authorization':token 
                    }
                });
                console.log(response,"error")
                setMeetings(response.data);
            } catch (error) {
                console.error('Error fetching meetings:', error);
            }
        };
 
        fetchData();
    } );
  console.log(meetings)
    const newMeetButton = () => {
        navigate("/new-metting")
    }
 
    return (
        <>
           
        <Navbar />
            <div className="meetings-main-container">
                <div className="new-button-container">
                    <button onClick={newMeetButton} className="new-metting-button" type="button">New Metting</button>
                </div>
 
                <ul className="mettings-cards-container">
                    {meetings.map((eachItem) => (
                        <NewMeet key={eachItem.id} newItem={eachItem} />
                    ))}
                </ul>
                
 
            </div>
        </>
    )
 
 
}
 
 
export default Meetings
 