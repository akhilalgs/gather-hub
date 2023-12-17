import React from "react";
import "./index.css";
import Navbar from "../Navbar";
import Footer from "../Footer"

import { IoVideocam } from "react-icons/io5";
import { BiChat } from "react-icons/bi";
import { FaPhoneAlt, FaChalkboardTeacher } from "react-icons/fa";
import { WiStars } from "react-icons/wi";
import { MdMarkEmailUnread, MdOutlinePeopleOutline, MdAppRegistration } from "react-icons/md";

const Home = () => {
    return (
        <>
            <Navbar />
            <div id="top-section">
                <div className="top-text-container">
                    <h2>Unified communication and collaboration platform</h2>
                    <h3>Make meaningful connections with meetings, team chat, whiteboard, phone, and more in one offering.</h3>
                    <div className="features-conatiner">
                        <div id="feature">
                            <div className="feature-logo"><IoVideocam className="top-icon" /></div>
                            <h3>Virtual Mettings</h3>
                        </div>
                        <div id="feature">
                            <div className="feature-logo"><BiChat className="top-icon" /></div>
                            <h3>Team Chat</h3>
                        </div>
                        <div id="feature">
                            <div className="feature-logo"><FaPhoneAlt /></div>
                            <h3>VoIp Phone System</h3>
                        </div>
                        <div id="feature">
                            <div className="feature-logo"><FaChalkboardTeacher className="top-icon" /></div>
                            <h3>Online Whiteboard</h3>
                        </div>
                        <div id="feature">
                            <div className="feature-logo"><WiStars className="top-icon" /></div>
                            <h3>Ai Comparison</h3>
                        </div>
                        <div id="feature">
                            <div className="feature-logo"><MdMarkEmailUnread className="top-icon" /></div>
                            <h3>Email and Calendar</h3>
                        </div>
                        <div id="feature">
                            <div className="feature-logo"><MdOutlinePeopleOutline className="top-icon" /></div>
                            <h3>Virtual Working Space</h3>
                        </div>
                        <div id="feature">
                            <div className="feature-logo"><MdAppRegistration className="top-icon" /></div>
                            <h3>Appointment Scheduler</h3>
                        </div>
                    </div>
                </div>
                <div>
                    <img alt="top-section-img1" src="https://blog.ipleaders.in/wp-content/uploads/2021/05/Meeting_Presentation_Conference-1.jpg" />
                </div>

            </div>

            <div className="company-container">
                <center>
                    <h3 className="client-head">OUR CLIENTS</h3>
                    <hr className="line" />
                </center>

                <img className="company-images" alt="companies" src="https://www.essdocs.com/sites/default/files/inline-images/PARTNERS_17FEB23_RESIZE_FINAL.png" />
            </div>

            <div className="bottom-section">
                <div>
                    <img className="bottom-img-1" alt="btn-img1" src="https://rtcweb.in/wp-content/uploads/2021/01/img-experties.png" />
                </div>
                <div id="bottom-section-text">
                    <h2>Connect with could calling.</h2>
                    <h3>Powerful calling that brings together your global workforce and customers anywhere, on any device, in any enivronment.</h3>
                </div>
            </div>

            <Footer />

        </>
    )
}

export default Home