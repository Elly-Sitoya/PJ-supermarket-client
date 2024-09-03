import React from "react";
import StaffCard from "./StaffCard";
import profile1 from "../Assets/staff-1.jpg";
import profile2 from "../Assets/staff-2.jpeg";
import profile3 from "../Assets/staff-3.jpg";
import profile4 from "../Assets/staff-4.jpg";
import "../Styles/Staff.css";

function Staff() {
  return (
    <div className="staff-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Meet Our Staff</span>
        </h3>

        <p className="dt-description">
        We put the supermarket at your fingertips! Explore a vast selection of virtual aisles brimming with all your favorite products. Find exactly what you need with our easy browsing options.
          
        </p>
      </div>

      <div className="dt-cards-content">
        <StaffCard
          img={profile1}
          name="Wanjiru Kamau"
          title="Head of Product Development"
          stars="4.9"
          reviews="1800"
        />
        <StaffCard
          img={profile2}
          name="David Ochieng"
          title="Software Engineer"
          stars="4.8"
          reviews="700"
        />
        <StaffCard
          img={profile3}
          name="Daniel Kiarie"
          title=" Content Creator (Recipes & Product Information)"
          stars="4.7"
          reviews="450"
        />
        <StaffCard
          img={profile4}
          name="Aisha Mohammed"
          title="Customer Service Specialist"
          stars="4.8"
          reviews="500"
        />
      </div>
    </div>
  );
}

export default Staff;
