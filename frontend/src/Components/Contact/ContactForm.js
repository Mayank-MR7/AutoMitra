import React, { useState } from 'react';
import styles from "./ContactForm.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    comment: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  setIsSubmitting(true);

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000); // 8s timeout

    const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:8000";
    const CONTACT_API_URL = `${API_BASE_URL}/api/contact`;

    const response = await fetch(CONTACT_API_URL, {
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
    toast.success(data.message || "Message sent successfully!");

    setFormData({ name: '', phone: '', email: '', comment: '' });
  } catch (error) {
    console.error("Submission error:", error);
    toast.error(
      error.name === "AbortError"
        ? "Request timed out. Please try again."
        : error.message || "Error submitting contact request"
    );
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <div className={styles.contactFormContainer}>
      <div className={styles.contactForm}>
        <div className={styles.header}>
          <h1 className={styles.title}>Call: 83-759-722-21</h1>
          <p className={styles.description}>
            If you have any questions or comments regarding us or your vehicle, 
            please fill out a contact request form below.
          </p>
        </div>
        
        <div className={styles.formWrapper}>
          <h2 className={styles.sectionTitle}>Contact Us</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Your name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Your Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={styles.input}
                required
                placeholder="Enter your phone number"
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>E-mail</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                required
                placeholder="Enter your email address"
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Comment</label>
              <textarea
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                className={styles.textarea}
                required
                placeholder="How can we help you?"
              />
            </div>

            <button 
              type="submit" 
              className={styles.submitBtn}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;