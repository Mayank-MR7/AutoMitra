import React, { useState, useCallback } from "react";
import styles from "../Gethired/Gethired.module.css";
import carrepairtwo from "../../../assets/carrepairtwo.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// API endpoint configuration
// const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:8000";
const API_BASE_URL = "https://automitra.onrender.com/" || "http://localhost:8000";

const HIRE_API_URL = `${API_BASE_URL}/api/hire`;


const Gethired = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    experience: "",
    description: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  // Memoized change handler
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Client-side validation
    if (!formData.phone.match(/^\d{10}$/)) {
      toast.error("Please enter a valid 10-digit phone number");
      return;
    }

    setIsLoading(true);

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000); // 8s timeout

      const response = await fetch(HIRE_API_URL, {
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
      
      toast.success(data.message || "Application submitted successfully!");
      setFormData({
        name: "",
        phone: "",
        email: "",
        city: "",
        experience: "",
        description: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
      toast.error(
        error.name === "AbortError" 
          ? "Request timed out. Please try again."
          : error.message || "Error submitting application"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${carrepairtwo})` }}
    >
      <div className={styles.overlay}></div>
      <h2 className={styles.heading}>Get Hired</h2>

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
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
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
        />
        <input
          type="number"
          name="experience"
          placeholder="Experience (in years)"
          value={formData.experience}
          onChange={handleChange}
          required
          min="0"
          max="50"
        />
        <textarea
          name="description"
          placeholder="Describe your expertise"
          rows="4"
          value={formData.description}
          onChange={handleChange}
          required
          minLength={10}
          maxLength={500}
        />
        <button 
          type="submit" 
          disabled={isLoading}
          aria-busy={isLoading}
        >
          {isLoading ? (
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

export default Gethired;