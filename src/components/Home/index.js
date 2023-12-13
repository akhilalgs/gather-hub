import React from "react";
import "./index.css";
import Navbar from "../Navbar";
import vedio from '../images/vedio.jpg'
import meeting from '../images/meeting.webp';
import meetingcontrol1 from '../images/meetingcontrol1.jpg'
import screensharing from '../images/screensharing.jpg'
// import Footer from "../Footer";

const Home = () => {
    return(
        <>
        <Navbar/>
        <div className="first-section-container">
            <div className="first-section-image-container">
                <img className="first-section-image-container" src ={vedio} alt= "image"/>
            </div>
            <div className="first-section-content">
                <h1 className="first-section-heading">Video call online</h1>
                <p className="first-section-paragraph">Need to meet face-to-face virtually for work? Sign up for Gatherhub's collaboration platform with your Microsoft 365 or Google account to start making unlimited online video calls for free, with unlimited audio recordings, virtual backgrounds, and more. It takes just a minute to get started. Or, take a self-guided interactive tour of the app first!</p>
                <p className="first-section-paragraph">It isn't always practical to have every single meeting in person. And today, there are lots of video chat apps with work-focused video calling features that are designed more for hangouts with colleagues than chatting with loved ones.As long as you have a good Wi-Fi signal, almost any business can start working remotely while staying in touch with clients and prospects.</p>
            </div>
        </div>
        <div className="first-section-container">
            <div className="first-section-content">
                <h1 className="first-section-heading">Browser-based video calls</h1>
                <p className="first-section-paragraph">Some video conferencing software will make you download the desktop or mobile app to host and join video calls. But Gatherhub is browser-based, which means it won’t force you to download the app. Host and join meetings from a web browser using your computer or mobile device, and get all the cool features that you’d get in the app.</p>
            </div>
            <div>
                <img  className ="second-section-image-container" src={meeting} alt= "image2"/>
            </div>
        </div>
        <div className="first-section-container">
            <div>
                <img  className="second-section-image-container" src={meetingcontrol1} alt="image3"/>
            </div>
            <div className="first-section-content">
                <h1 className="first-section-heading">Full meeting control</h1>
                <p className="first-section-paragraph">In the gatherhub, all the call controls you need are easily in reach. Adjust your volume, start a screen share, mute and unmute yourself, or start and pause recording. It's all in a clean, easy-to-use interface that lays out all these options for you right on the screen.</p>
            </div>
        </div>
        <div className="first-section-container">
            <div className="first-section-content">
                <h1 className="first-section-heading">Screen sharing</h1>
                <p className="first-section-paragraph">Need to zoom in on a design mockup or run through a webinar with your remote team? Dialpad as a screen sharing app lets you choose between sharing a specific window or tab—or your whole screen. You can even do mobile screen sharing by texting someone a link. Again, no downloads needed.</p>
            </div>
            <div>
                <img  className ="second-section-image-container" src= {screensharing} alt ="image4"/>
            </div>
        </div>
        {/* <Footer/> */}
        </>
    )
}

export default Home