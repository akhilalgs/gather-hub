import Navbar from "../Navbar";

import "./index.css"

const ContactUs = () => {


    const handleSubmitForm = (e) => {
        e.preventDefult()
    }

    return (
        <>
            <Navbar />
            <div id="contact-us-page">
                <div className="contact-container">
                    <h2 className="contact-head">Get in touch</h2>
                    <h4 className="contact-para">Please fill out the form below,You can also contact us via email/phone,and our team will gladly handle your request!</h4>
                </div>
                <form className="form">
                    <div id="form-container">
                        <input id="input" type="text" placeholder="First Name*" />
                        <input id="input" type="text" placeholder="Last Name*" />
                        <input id="input" type="text" placeholder="Business Email Address*" />
                    </div>
                    <div>
                        <textarea className="text-area" placeholder="Message*"></textarea>
                    </div>
                    <div className="check-box-container">
                        <input className="check-box" type="checkbox" />
                        <h3 className="check-box-text">Agree Terms & Conditions</h3>
                    </div>
                    <p className="contact-privacy">For more information about Gather Hub protects your privacy and processes your personal please see our Privacy Policy.</p>
                    <button onSubmit={handleSubmitForm} className="button-submit" type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}


export default ContactUs