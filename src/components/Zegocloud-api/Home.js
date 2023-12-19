import React from "react"
import { Navigate, useNavigate } from "react-router-dom";
function Home () {
    const[room_id,setRoom_id]=React.useState('') 
    const navigate=useNavigate();
    const hanllesave=async ()=>{
        try {
            const response = await axios.get('http://localhost:8080/meetings');
            setMeetings(response.data);
        } catch (error) {
            console.error('Error fetching meetings:', error);
        }

       
        console.log(room_id)
        navigate(`/room/${room_id}`)
    }
   
   

    return(
        <div>
            <input type="text" placeholder="Enter Room id"  value={room_id} onChange={(e)=>setRoom_id(e.target.value)} />
            <button onClick={hanllesave}>Join</button>
            
            
            
        </div>
    )
}
export default Home