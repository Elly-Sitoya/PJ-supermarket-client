import React from "react";
import Doctor from "../Assets/staff-team.jpg";
// import Doctor from "../Assets/doctor-group.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
          Tired of juggling busy schedules and long grocery lines? Groovy Mart
          brings the supermarket to you, offering a convenient and personalized
          shopping experience focused on your well-being. Explore our virtual
          aisles overflowing with fresh produce, pantry staples, and healthy
          indulgences. Our knowledgeable product consultants are always a tap
          away, ready to answer your questions, recommend delicious recipes that
          fit your dietary needs, and guide you towards a healthier lifestyle.
          Groovy Mart – join us on your journey to a happier, healthier you
        </p>

        <h4 className="about-text-title">Your Solutions</h4>

        <SolutionStep
          title="Plan Your Shopping Trip"
          description="Get a head start on your next shopping trip! Browse virtual sections at your convenience, add items to your virtual cart, and plan your shopping list efficiently. Save time in the store by knowing exactly what you need."
        />

        <SolutionStep
          title="Discover Detailed Information"
          description="Dive deeper into each category! Just like browsing physical shelves, you can zoom in on individual products to view detailed descriptions, ingredients, and nutritional information. Make informed choices before heading to the store!"
        />

        <SolutionStep
          title="Navigate Virtual Sections"
          description="Explore our virtual sections just like the real supermarket! Find your perfect category with ease at [Supermarket Name]. We offer a wide selection of products grouped in familiar sections, making it easy to locate exactly what you're looking for."
        />
      </div>
    </div>
  );
}

export default About;
