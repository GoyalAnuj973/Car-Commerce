import React from "react";
import "./index.css";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";
import instagram from "../../assets/images/instagram.png";
function footer() {
    return(
        <div className="footer">
            <div className="footer-col">
                <div className="footer-heading">Contact</div>
                    <ul className="contact">
                        <li>Request a Test Drive</li>
                        <li>Book Car</li>
                        <li>Career</li>
                        <li>Contact Us</li>
                    </ul>
            </div>
            <div className="footer-col">
                <div className="footer-heading">Xtremecars:</div>
                <ul className="contact">
                    <div>12th Floor, Vishwaroop IT Park, Sector 32, Vashi, Navi Mumbai - 400705. Maharashtra, India</div>
                    <div>Phone: +91(22)612800000</div>
                </ul>
            </div>
            <div className="footer-col">
                <div className="footer-heading">Legal</div>
                <ul className="contact">
                    <li>Legal Disclaimer/Imprint</li>
                    <li>Privacy Policy</li>
                    <li>Cookie Policy</li>
                </ul>
            </div>
            <div className="footer-col">
                <div className="footer-heading">Connect with us</div>
                <ul className="contact">
                    <li className="socialicon"><img src={facebook} alt="facebook"/></li>
                    <li className="socialicon"><img src={twitter} alt="twitter"/></li>
                    <li className="socialicon"><img src={instagram} alt="instagram"/></li>
                </ul>
            </div>
        </div>
    );
}

export default footer;