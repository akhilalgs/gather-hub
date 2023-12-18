import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import './index.css'
//import { FaGreaterThan } from "react-icons/fa";
//import { TiSocialLinkedin } from "react-icons/ti";

//import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
//import { BiPhoneCall, BiLogoFacebook, BiLogoGmail } from "react-icons/bi";

import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaLinkedin, FaFacebookSquare, FaGoogle, FaInstagramSquare, FaYoutube, FaWhatsapp } from "react-icons/fa";


import { Link } from 'react-router-dom'



const Footer = () => {
  return (
    <div id="footer">
      <div className="footer-row">
        <div id="part1">
          <h1>Gather Hub</h1>
          <p>Unlock the power of seamless connection with Gather Hub! Elevate Your communication experience through
            video,audio,phone and chat-bringing people closer, no matter the distance.Embrace a world where inspiration
            knows no bounds, as Gather Hub transforms your conversations into moments that matter.Join us and make every connection a masterpiece.
          </p>
        </div>

        <div id="part2">
          <h1>Contact Info</h1>
          <hr className="line2" />
          <div className="footer-links">
            <div><MdOutlinePhoneInTalk className="icon-footer" /></div>
            <h3>+91 8919078185</h3>
          </div>

          <div className="footer-links">
            <div><IoMail className="icon-footer" /></div>
            <div>
              <h3>info@labyrinthglobalsolutions</h3>
              <h3>Address: Cyber Space</h3>
              <h3>Building, 5th Floor, Madhapur</h3>
              <h3>Hi-Tech City, 500081</h3>
            </div>

          </div>
        </div>

        <div id="part2">
          <h1>Useful Links</h1>
          <hr className="line2" />
          <div className="footer-links">
            <IoIosArrowRoundForward className="icon-footer" />
            <h3>Home</h3>
          </div>
          <div className="footer-links">
            <IoIosArrowRoundForward className="icon-footer" />
            <h3>Support</h3>
          </div>
          <div className="footer-links">
            <IoIosArrowRoundForward className="icon-footer" />
            <h3>Pricing</h3>
          </div>
          <div className="footer-links">
            <IoIosArrowRoundForward className="icon-footer" />
            <h3>Contact Us</h3>
          </div>
          <div className="footer-links">
            <IoIosArrowRoundForward className="icon-footer" />
            <h3>About Us</h3>
          </div>
          <div className="footer-links">
            <IoIosArrowRoundForward className="icon-footer" />
            <h3>Privacy policy</h3>
          </div>
          <div className="footer-links">
            <IoIosArrowRoundForward className="icon-footer" />
            <h3>Terms & Conditions</h3>
          </div>
        </div>
      </div>

      <div className="icons-container-footer">
        <div className="icons-inner-container">
          <div>
            <FaLinkedin className="footer-icons" />
          </div>
          <div>
            <FaFacebookSquare className="footer-icons" />
          </div>
          <div>
            <FaGoogle className="footer-icons" />
          </div>
          <div>
            <FaInstagramSquare className="footer-icons" />
          </div>
          <div>
            <FaYoutube className="footer-icons" />
          </div>
        </div>

        <div className="last-icon">
          <FaWhatsapp className="footer-icons" />
        </div>

      </div>

    </div>

  );
};

export default Footer