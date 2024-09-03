import React from "react";
import Doctor from "../Assets/staff-6.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../Styles/ReserveOrder.css";

function ReserveOrder() {
  const navigate = useNavigate();

  const handleReserveOrderClick = () => {
    navigate("/orderReservation");
  };

  return (
    <div className="ba-section">
      <div className="ba-image-content">
        <img src={Doctor} alt="Doctor Group" className="ba-image1" />
      </div>

      <div className="ba-text-content">
        <h3 className="ba-title">
          <span>Why Choose PJ Simulation</span>
        </h3>
        <p className="ba-description">
          Make informed choices! Get detailed information, view high-resolution
          3D models, and even chat with virtual "product consultants" before
          adding items to your cart.
        </p>

        <p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} />{" "}
          Expertise at Your Fingertips
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} />{" "}
          Quick and Easy Assistance
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} />{" "}
          Streamlined Shopping Experience
        </p>
        <p className="ba-checks ba-check-last">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} />{" "}
          Enrollment Easy and Quick
        </p>

        <button
          className="text-order-btn"
          type="button"
          onClick={handleReserveOrderClick}
        >
          <FontAwesomeIcon icon={faCalendarCheck} /> Reserve Order
        </button>
      </div>
    </div>
  );
}

export default ReserveOrder;
