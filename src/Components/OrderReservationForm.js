import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/OrderReservation.css";
import { ToastContainer, toast } from "react-toastify";

function OrderReservationForm() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const [customerName, setCustomerName] = useState("");
  const [customerNumber, setCustomerNumber] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    const errors = {};
    if (!customerName.trim()) {
      errors.patientName = "Customer name is required";
    } else if (customerName.trim().length < 8) {
      errors.patientName = "Customer name must be at least 8 characters";
    }

    if (!customerNumber.trim()) {
      errors.patientNumber = "Customer phone number is required";
    } else if (customerNumber.trim().length !== 10) {
      errors.patientNumber = "Customer phone number must be of 10 digits";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Reset form fields and errors after successful submission
    setCustomerName("");
    setCustomerNumber("");
    setFormErrors({});

    toast.success("Order Reserved !", {
      position: toast.POSITION.TOP_CENTER,
      onOpen: () => setIsSubmitted(true),
      onClose: () => setIsSubmitted(false),
    });
  };

  return (
    <div className="appointment-form-section">
      <h1 className="legal-siteTitle">
        <Link to="/">
          PJ SUPERMARKET <span className="legal-siteSign"></span>
        </Link>
      </h1>

      <div className="form-container">
        <h2 className="form-title">
          <span>Reserve an Order </span>
        </h2>

        <form className="form-content" onSubmit={handleSubmit}>
          <label>
            Full Name:
            <input
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              required
            />
            {formErrors.patientName && (
              <p className="error-message">{formErrors.patientName}</p>
            )}
          </label>

          <br />
          <label>
            Phone Number:
            <input
              type="text"
              value={customerNumber}
              onChange={(e) => setCustomerNumber(e.target.value)}
              required
            />
            {formErrors.patientNumber && (
              <p className="error-message">{formErrors.patientNumber}</p>
            )}
          </label>

          <br />
          <button type="submit" className="text-appointment-btn">
            submit
          </button>

          <p
            className="success-message"
            style={{ display: isSubmitted ? "block" : "none" }}
          >
            Order Reserved Successfully, Your orders has been sent to our
            staffs.
          </p>
        </form>
      </div>

      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
}

export default OrderReservationForm;
