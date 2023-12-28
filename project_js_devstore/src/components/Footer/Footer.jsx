import React from 'react';
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from 'react-icons/fa';
import Payment from "../../assets/payments.png";
import { useNavigate } from "react-router-dom";
const Footer = () => {
    const navigate = useNavigate()
    return <footer className='footer'>
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">
                Vestibulum sagittis congue turpis, 
                eu imperdiet ante ultricies id. Morbi 
                vestibulum, diam at dignissim viverra, 
                est metus euismod velit, quis rhoncus 
                dui nisl vel tellus. 
                </div>
            </div>
            <div className="col">
                <div className="title">Contact</div>
                <div className="c-item">
                    <FaLocationArrow />
                    <div className="text">123 Main St, New York</div>
                </div>
                <div className="c-item">
                    <FaMobileAlt />
                    <div className="text">Phone: +1 XXX-XXX-XXXX</div>
                </div>
                <div className="c-item">
                    <FaEnvelope />
                    <div className="text">generateRandomEmail@example.com</div>
                </div>
            </div>
            <div className="col">
                <div className="title">Categories</div>
                <span className="text">Headphones</span>
                <span className="text">Smart Watches</span>
                <span className="text">Bluetooth Speakers</span>
                <span className="text">Wirles Earbuds</span>
                <span className="text">Home Theatree</span>
                <span className="text">Projectors</span>
            </div>
            <div className="col">
                <div className="title" onClick={() => {navigate("/register")}}>Log in</div>
                <span className="text">Home</span>
                <span className="text">About</span>
                <span className="text">Privacy Policy</span>
                <span className="text">Return</span>
                <span className="text">Terms & Conditions</span>
                <span className="text">Contact Us</span>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                    DEVSTORE 2023 CREATED BY DEV. E-COMMERCE 
                    SOLUTIONS.
                </div>
                <img src={Payment} alt="" />
            </div>
        </div>
    </footer>;
};

export default Footer;
