import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import './index.css'
//import { FaGreaterThan } from "react-icons/fa";
//import { TiSocialLinkedin } from "react-icons/ti";

//import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
//import { BiPhoneCall, BiLogoFacebook, BiLogoGmail } from "react-icons/bi";


import {Link} from 'react-router-dom'



const Footer = () => {
  return (
    <>
      <div className="Ecommerce-Website-Footer-Section-bg pb-5 pt-5">
        <div className="container">
            <div className="row footer-section-row-container">
                <div className="col-12 col-md-4 col-lg-2">
                    <div className="d-flex flex-column justify-conent-start justify-conent-md-start ">
                        <div className="text-md-left text-sm-center mb-3 footer-section-company-logo">
                            {/* <img src={gmmlogo} alt="" className="Ecommerce-Website-Footer-Section-logo" /> */}
                        </div>
                        <div className="d-flex flex-row justify-content-md-start justify-conent-center mt-3 ml-3 mb-3 footer-section-company-logo">
                            <a href="https://www.facebook.com/gloriousmindmine" rel="noreferrer" target="_blank" className="Ecommerce-Website-Footer-Section-logo-card mr-2">
                                {/* <img src={Facebook} alt="facebook" className="social-media-logos"/> */}
                            </a>
                            <a href="https://twitter.com/GmmTraining" target="_blank" rel="noreferrer" className="Ecommerce-Website-Footer-Section-logo-card mr-2">
                              {/* <img src={Twitter} alt="twitter" className="social-media-logos"/> */}
                            </a>
                            <a href="https://www.linkedin.com/company/glorious-mindmine-consulting-pvt-ltd-/" rel="noreferrer" target="_blank" className="Ecommerce-Website-Footer-Section-logo-card mr-2">
                                
                                {/* <img src={Linkedin} alt="linkedin" className="social-media-logos"/> */}
                            </a>
                            <a href="https://www.instagram.com/gloriousmindmine/" target="_blank" rel="noreferrer" className="Ecommerce-Website-Footer-Section-logo-card">
                                {/* <img src={Instagram} alt="instagram" className="social-media-logos"/> */}
                            </a>
                            <a href="https://www.youtube.com/@GloriousMindmineTraining" target="_blank" rel="noreferrer" className="Ecommerce-Website-Footer-Section-logo-card">
                                {/* <img src={Youtube} alt="youtube" className="social-media-logos"/> */}
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                    <div>
                        <h1 className="Ecommerce-Website-Footer-Section-heading mb-4">Quick links</h1>
                        <div className="Footer-courses-list">
                        <Link
                          to="/career" style={{textDecorationLine:"none",color:"black"}}
                        >
                          <p className="Footer-Each-course">Career Support</p>
                        </Link>
                        <Link
                          to="/success" style={{textDecorationLine:"none",color:"black"}}
                        >
                          <p className="Footer-Each-course" >Success Stories</p>
                        </Link>
                        <Link style={{textDecorationLine:"none",color:"black"}}
                          to="/Hirefromus"
                          >
                          <p className="Footer-Each-course" >Hire From Us</p>
                        </Link>
                        <Link style={{textDecorationLine:"none",color:"black"}}
                          to="/corporate"
                          >
                          <p className="Footer-Each-course" >Corporate</p>
                        </Link>
                        <Link
                          to="/aboutus" style={{textDecorationLine:"none",color:"black"}}
                          >
                          <p className="Footer-Each-course" >About Us</p>
                        </Link>
                        <Link
                          to="/studyabroad" style={{textDecorationLine:"none",color:"black"}}
                          >
                          <p className="Footer-Each-course" >Study Abroad</p>
                        </Link>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                    <div>
                        <h1 className="Ecommerce-Website-Footer-Section-heading mb-4">Soft Skills</h1>
                        <div className="Footer-courses-list">
                          <Link to="/english"  style={{textDecorationLine:"none",color:"black"}}><p className="Footer-Each-course">English Communication</p></Link>
                          <Link to="/businesscorporate" className="Footer-Each-cours" style={{textDecorationLine:"none",color:"black"}}><p className="Footer-Each-course">Business Communication</p></Link>
                          <Link to="/leadership" className="Footer-Each-cours" style={{textDecorationLine:"none",color:"black"}}><p className="Footer-Each-course">Leadership Skills</p></Link>
                          {/*<Link to="/Mendix" className="Footer-Each-cours" style={{textDecorationLine:"none",color:"black"}}><p className="Footer-Each-course">Mendix Developer</p></Link>
                          <Link to="/Polarian" className="Footer-Each-cours" style={{textDecorationLine:"none",color:"black"}}><p className="Footer-Each-course">Polarion Expert</p></Link>*/}
                          <Link to="/team-building"  style={{textDecorationLine:"none",color:"black"}}><p className="Footer-Each-course">Team Building</p></Link>
                          <Link to="/ielts" className="Footer-Each-cours" style={{textDecorationLine:"none",color:"black"}}><p className="Footer-Each-course">IELTS</p></Link>
                          </div>  
                    </div>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                    <div>
                        <h1 className="Ecommerce-Website-Footer-Section-heading mb-4">IT Courses</h1>
                        <div className="Footer-courses-list">
                          <Link to="/AWS" className="Footer-Each-cours" style={{textDecorationLine:"none",color:"black"}}><p className="Footer-Each-course">AWS</p></Link>
                          <Link to="/Datascience" className="Footer-Each-cours" style={{textDecorationLine:"none",color:"black"}}><p className="Footer-Each-course">Data Science Engineer</p></Link>
                          <Link to="/FullStackCourse" className="Footer-Each-cours" style={{textDecorationLine:"none",color:"black"}}><p className="Footer-Each-course">Full Stack Developer</p></Link>
                          {/*<Link to="/Mendix" className="Footer-Each-cours" style={{textDecorationLine:"none",color:"black"}}><p className="Footer-Each-course">Mendix Developer</p></Link>
                          <Link to="/Polarian" className="Footer-Each-cours" style={{textDecorationLine:"none",color:"black"}}><p className="Footer-Each-course">Polarion Expert</p></Link>
                          <Link to="/english"  style={{textDecorationLine:"none",color:"black"}}><p className="Footer-Each-course"> English Communication</p></Link>*/}
                          <Link to="/DigitalMarkting"  style={{textDecorationLine:"none",color:"black"}}><p className="Footer-Each-course">Digital Marketing</p></Link>
                          <Link to="/salesforce" className="Footer-Each-cours" style={{textDecorationLine:"none",color:"black"}}><p className="Footer-Each-course">Salesforce Admin</p></Link>
                          </div>  
                    </div>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                    <div className="">
                        <h1 className="Ecommerce-Website-Footer-Section-heading mb-4">Contact Us</h1>
                        <div className="Footer-courses-list-2">
                          <p>+19-800-844885</p>
                          <p>connect@glorious mindmine</p>
                          <p>201,2nd Floor, Mustafa Towers,</p> 
                            <p>Lakdikapul-500004</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="Ecommerce-Website-Footer-Section-line" />
            <div className="d-flex flex-column justify-content-center align-items-center">
                
                <div className="d-flex flex-row gap-4">
                  <p className="privacy-text"><Link to="/privacy-policy" >Privacy Policy</Link></p>
                  <p className="privacy-text"><Link to="/terms-and-conditions" >Terms & Conditions</Link></p>
                </div>
                <div className="ml-2 mt-1">
                    <h1 className="Ecommerce-Website-Footer-Section-address">Copyright @2023 By Glorious Mindmine</h1>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default Footer