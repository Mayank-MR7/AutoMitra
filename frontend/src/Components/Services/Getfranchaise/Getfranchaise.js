import React, { useState, useCallback } from "react";
import styles from "../Getfranchaise/Getfranchaise.module.css";
import carrepairtwo from "../../../assets/carrepairtwo.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// API configuration
const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:8000";
const FRANCHISE_API_URL = `${API_BASE_URL}/api/franchise`;

const Getfranchaise = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    email: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Optimized change handler with useCallback
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Client-side validation
    if (!formData.phone.match(/^\d{10}$/)) {
      toast.error("Please enter a valid 10-digit phone number");
      return;
    }

    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000); // 8s timeout

      const response = await fetch(FRANCHISE_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Submission failed");
      }

      const data = await response.json();
      
      toast.success(data.message || "Franchise request submitted successfully!");
      
      // Reset form
      setFormData({
        name: "",
        phone: "",
        city: "",
        email: "",
        description: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
      toast.error(
        error.name === "AbortError" 
          ? "Request timed out. Please try again."
          : error.message || "Error submitting franchise request"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${carrepairtwo})` }}
    >
      <div className={styles.overlay}></div>
      <h2 className={styles.heading}>Get Franchise</h2>

      <form className={styles.forms} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          minLength={2}
          maxLength={50}
          disabled={isSubmitting}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number (10 digits)"
          value={formData.phone}
          onChange={handleChange}
          required
          pattern="\d{10}"
          title="10 digit phone number"
          disabled={isSubmitting}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          required
          minLength={2}
          maxLength={50}
          disabled={isSubmitting}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />
        <textarea
          name="description"
          placeholder="Your Message"
          rows="4"
          value={formData.description}
          onChange={handleChange}
          required
          minLength={10}
          maxLength={500}
          disabled={isSubmitting}
        />
        <button 
          type="submit" 
          disabled={isSubmitting}
          aria-busy={isSubmitting}
          className={styles.submitButton}
        >
          {isSubmitting ? (
            <>
              <span className={styles.spinner} aria-hidden="true" />
              Submitting...
            </>
          ) : (
            "Submit"
          )}
        </button>
      </form>

      <ToastContainer 
        position="bottom-right" 
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Getfranchaise;