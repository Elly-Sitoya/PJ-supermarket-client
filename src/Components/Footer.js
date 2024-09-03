import React from "react";
import "../Styles/Footer.css";
import SubscribeNewsletter from "./SubscribeNewsletter";
import { Link } from "react-router-dom";
import { FaTiktok } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="ft-info">
          <div className="ft-info-p1">
            <p className="ft-title">
              PJ Supermarket <span className="ft-sign"></span>
            </p>
            <p className="ft-description">
              Save time for what matters. Spend less time searching and more
              time enjoying the shopping experience. Breeze through the aisles
              with PJ Simulation, and get back to the things you love.
            </p>
          </div>
        </div>

        <div className="ft-list">
          <p className="ft-list-title">Legal</p>
          <ul className="ft-list-items">
            <li>
              <Link to={"/legal"}>Privacy Policy</Link>
            </li>
            <li>
              <Link to={"/legal"}>Terms of Services</Link>
            </li>
          </ul>
        </div>

        <div className="ft-list" id="contact">
          <p className="ft-list-title">Talk To Us</p>
          <ul className="ft-list-items">
            <li>
              <a href="mailto:pjsupermarket3@gmail.com">
                pjsupermarket3@gmail.com
              </a>
            </li>

            <li>
              <a href="tel:+022 2326 6232">+254704942094</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="ft-copyright">
        <p>© 2024 PJ SUPERMARKET. All rights reserved.</p>

        <ul className="ft-social-links">
  
        <li>
            <a
              href="mailto:pjsupermarket3@gmail.com"
              title="Email"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TfiEmail />
              
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=61560590440351"
              title="FaceBook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com/@pj_supaa?is_from_webapp=1&sender_device=pc"
              title="Tiktok"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/pj_supaa_?igsh=MTF1NmhkamJlMmxnOA=="
              title="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoInstagram />
              
            </a>
          </li>
          
        </ul>
      </div>
    </div>
  );
}

export default Footer;
