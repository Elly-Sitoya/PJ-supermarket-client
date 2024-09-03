import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="legal-section-title">
      <h1 className="legal-siteTitle">
        <Link to="/">
          PJ SUPERMARKET <span className="legal-siteSign"></span>
        </Link>
      </h1>

      <div className="legal-text-content">
        <p className="legal-title">General Info</p>
        <p className="legal-description">
          Welcome to PJ Simulation! Your dedicated companion for a seamless and
          hassle-free shopping experience. Let us guide you effortlessly through
          the virtual aisles, ensuring you locate all the essentials you seek.
        </p>

        <p className="legal-title">Privacy Policy</p>
        <p className="legal-description">
          Your privacy is important to us! PJ Simulation's Privacy Policy
          explains how we collect, use, and protect the information you share
          with us while using the app. We ensure secure data handling and treat
          your information with the utmost respect.
        </p>

        <p className="legal-title">Terms of Service</p>
        <p className="legal-description">
          By using PJ Simulation, you agree to our Terms of Service. These terms
          outline responsible app use, data privacy practices, and disclaimers
          regarding PJ Simulation's role as a shopping assistant, not a
          replacement for supermarket staff. Understanding these terms ensures a
          smooth experience for all users.
        </p>

        <p className="legal-title">Consultations</p>
        <p className="legal-description">
          PJ Simulation connects you with a wealth of product information at
          your fingertips! Our app provides detailed descriptions,
          high-resolution images, and potentially even customer reviews to help
          you make informed choices while shopping. Think of it as your in-store
          product consultant!
        </p>

        <p className="legal-title">How it Works</p>
        <p className="legal-description">
          PJ Simulation is designed to simplify your supermarket experience.
          Find what you need quickly with our virtual aisles and product
          location features. Plan your shopping list in the app and access
          detailed information about products on demand. Shop smarter, save
          time, and get what you need with PJ Simulation.
        </p>
      </div>
    </div>
  );
}

export default LegalDocs;
