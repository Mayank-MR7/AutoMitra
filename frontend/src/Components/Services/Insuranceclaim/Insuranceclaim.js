import React, { useState, useCallback } from "react";
import styles from "../Insuranceclaim/Insuranceclaim.module.css";
import carrepairtwo from "../../../assets/carrepairtwo.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:8000";
const INSURANCE_API_URL = `${API_BASE_URL}/api/insurance`;

const Insuranceclaim = () => {
  const [formData, setFormData] = useState({
    insuranceCompany: "",
    policyNumber: "",
    insuredName: "",
    insuredEmail: "",
    vehicleName: "",
    vehicleNumber: "",
    area: "",
    city: "",
    state: "",
    pincode: "",
    accidentDate: "",
    accidentTime: "",
    accidentLocation: "",
    accidentReason: "",
    damagePart: "",
    driverName: "",
    driverLicense: "",
    peopleInVehicle: "",
    contactPersonName: "",
    contactPersonNumber: "",
    legalAction: "",
    legalDetails: "",
    personInjured: "",
    injuryDetails: "",
    carInWorkshop: "",
    workshopDetails: "",
    estimatePrepared: "",
    billAmount: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.insuranceCompany.trim()) {
      toast.error("Insurance company name is required");
      return;
    }

    if (!formData.policyNumber.trim()) {
      toast.error("Policy number is required");
      return;
    }

    if (formData.contactPersonNumber && !formData.contactPersonNumber.match(/^\d{10}$/)) {
      toast.error("Please enter a valid 10-digit contact number");
      return;
    }

    setIsSubmitting(true);

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const response = await fetch(INSURANCE_API_URL, {
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
        throw new Error(errorData.message || "Claim submission failed");
      }

      const data = await response.json();
      
      toast.success(data.message || "Insurance claim submitted successfully!");
      
      setFormData({
        insuranceCompany: "",
        policyNumber: "",
        insuredName: "",
        insuredEmail: "",
        vehicleName: "",
        vehicleNumber: "",
        area: "",
        city: "",
        state: "",
        pincode: "",
        accidentDate: "",
        accidentTime: "",
        accidentLocation: "",
        accidentReason: "",
        damagePart: "",
        driverName: "",
        driverLicense: "",
        peopleInVehicle: "",
        contactPersonName: "",
        contactPersonNumber: "",
        legalAction: "",
        legalDetails: "",
        personInjured: "",
        injuryDetails: "",
        carInWorkshop: "",
        workshopDetails: "",
        estimatePrepared: "",
        billAmount: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
      toast.error(
        error.name === "AbortError" 
          ? "Request timed out. Please try again."
          : error.message || "Error submitting insurance claim"
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
      <h2 className={styles.heading}>Insurance Claim</h2>

      <form className={`${styles.forms} ${styles.gridForm}`} onSubmit={handleSubmit}>
        {/* Insurance Information */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Insurance Company Name <span className={styles.required}>*</span></label>
          <input 
            type="text" 
            name="insuranceCompany" 
            value={formData.insuranceCompany} 
            onChange={handleChange} 
            required 
            disabled={isSubmitting}
            minLength={2}
            maxLength={100}
          />
        </div>
        
        <div className={styles.formGroup}>
          <label className={styles.label}>Policy Number <span className={styles.required}>*</span></label>
          <input 
            type="text" 
            name="policyNumber" 
            value={formData.policyNumber} 
            onChange={handleChange} 
            required 
            disabled={isSubmitting}
            minLength={2}
            maxLength={50}
          />
        </div>
        
        <div className={styles.formGroup}>
          <label className={styles.label}>Insured Name</label>
          <input 
            type="text" 
            name="insuredName" 
            value={formData.insuredName} 
            onChange={handleChange} 
            disabled={isSubmitting}
            maxLength={100}
          />
        </div>
        
        <div className={styles.formGroup}>
          <label className={styles.label}>Insured Email</label>
          <input 
            type="email" 
            name="insuredEmail" 
            value={formData.insuredEmail} 
            onChange={handleChange} 
            disabled={isSubmitting}
            maxLength={100}
          />
        </div>
        
        {/* Vehicle Information */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Vehicle Name</label>
          <input 
            type="text" 
            name="vehicleName" 
            value={formData.vehicleName} 
            onChange={handleChange} 
            disabled={isSubmitting}
            maxLength={50}
          />
        </div>
        
        <div className={styles.formGroup}>
          <label className={styles.label}>Vehicle Number</label>
          <input 
            type="text" 
            name="vehicleNumber" 
            value={formData.vehicleNumber} 
            onChange={handleChange} 
            disabled={isSubmitting}
            maxLength={20}
          />
        </div>
        
        {/* Workshop Details */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Area</label>
          <input 
            type="text" 
            name="area" 
            value={formData.area} 
            onChange={handleChange} 
            disabled={isSubmitting}
            maxLength={50}
          />
        </div>
        
        <div className={styles.formGroup}>
          <label className={styles.label}>City</label>
          <input 
            type="text" 
            name="city" 
            value={formData.city} 
            onChange={handleChange} 
            disabled={isSubmitting}
            maxLength={50}
          />
        </div>
        
        <div className={styles.formGroup}>
          <label className={styles.label}>State</label>
          <input 
            type="text" 
            name="state" 
            value={formData.state} 
            onChange={handleChange} 
            disabled={isSubmitting}
            maxLength={50}
          />
        </div>
        
        <div className={styles.formGroup}>
          <label className={styles.label}>Pincode</label>
          <input 
            type="text" 
            name="pincode" 
            value={formData.pincode} 
            onChange={handleChange} 
            disabled={isSubmitting}
            maxLength={10}
          />
        </div>
        
        {/* Accident Details */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Accident Date</label>
          <input 
            type="date" 
            name="accidentDate" 
            value={formData.accidentDate} 
            onChange={handleChange} 
            disabled={isSubmitting}
            max={new Date().toISOString().split('T')[0]}
          />
        </div>
        
        <div className={styles.formGroup}>
          <label className={styles.label}>Accident Time</label>
          <input 
            type="time" 
            name="accidentTime" 
            value={formData.accidentTime} 
            onChange={handleChange} 
            disabled={isSubmitting}
          />
        </div>
        
        <div className={styles.formGroup}>
          <label className={styles.label}>Accident Location</label>
          <input 
            type="text" 
            name="accidentLocation" 
            value={formData.accidentLocation} 
            onChange={handleChange} 
            disabled={isSubmitting}
            maxLength={100}
          />
        </div>
        
        <div className={styles.formGroup}>
          <label className={styles.label}>Accident Reason</label>
          <textarea 
            name="accidentReason" 
            rows="3" 
            value={formData.accidentReason} 
            onChange={handleChange} 
            disabled={isSubmitting}
            maxLength={500}
          />
        </div>
        
        <div className={styles.formGroup}>
          <label className={styles.label}>Damage Part</label>
          <input 
            type="text" 
            name="damagePart" 
            value={formData.damagePart} 
            onChange={handleChange} 
            disabled={isSubmitting}
            maxLength={100}
          />
        </div>
        
        {/* Driver Information */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Driver Name</label>
          <input 
            type="text" 
            name="driverName" 
            value={formData.driverName} 
            onChange={handleChange} 
            disabled={isSubmitting}
            maxLength={100}
          />
        </div>
        
        <div className={styles.formGroup}>
          <label className={styles.label}>Driver License</label>
          <input 
            type="text" 
            name="driverLicense" 
            value={formData.driverLicense} 
            onChange={handleChange} 
            disabled={isSubmitting}
            maxLength={50}
          />
        </div>
        
        <div className={styles.formGroup}>
          <label className={styles.label}>People in Vehicle</label>
          <input 
            type="number" 
            name="peopleInVehicle" 
            value={formData.peopleInVehicle} 
            onChange={handleChange} 
            disabled={isSubmitting}
            min="0"
            max="20"
          />
        </div>
        
        {/* Contact Information */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Contact Person Name</label>
          <input 
            type="text" 
            name="contactPersonName" 
            value={formData.contactPersonName} 
            onChange={handleChange} 
            disabled={isSubmitting}
            maxLength={100}
          />
        </div>
        
        <div className={styles.formGroup}>
          <label className={styles.label}>Contact Person Number</label>
          <input 
            type="tel" 
            name="contactPersonNumber" 
            value={formData.contactPersonNumber} 
            onChange={handleChange} 
            disabled={isSubmitting}
            pattern="\d{10}"
            title="10 digit phone number"
          />
        </div>
        
        {/* Legal Information */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Legal Action Taken</label>
          <select 
            name="legalAction" 
            value={formData.legalAction} 
            onChange={handleChange}
            disabled={isSubmitting}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        
        <div className={styles.formGroup}>
          <label className={styles.label}>Legal Details</label>
          <textarea 
            name="legalDetails" 
            rows="3" 
            value={formData.legalDetails} 
            onChange={handleChange} 
            disabled={isSubmitting}
            maxLength={500}
          />
        </div>
        
        {/* Injury Information */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Person Injured</label>
          <select 
            name="personInjured" 
            value={formData.personInjured} 
            onChange={handleChange}
            disabled={isSubmitting}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        
        <div className={styles.formGroup}>
          <label className={styles.label}>Injury Details</label>
          <textarea 
            name="injuryDetails" 
            rows="3" 
            value={formData.injuryDetails} 
            onChange={handleChange} 
            disabled={isSubmitting}
            maxLength={500}
          />
        </div>
        
        {/* Workshop Status */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Car in Workshop</label>
          <select 
            name="carInWorkshop" 
            value={formData.carInWorkshop} 
            onChange={handleChange}
            disabled={isSubmitting}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        
        <div className={styles.formGroup}>
          <label className={styles.label}>Workshop Details</label>
          <textarea 
            name="workshopDetails" 
            rows="3" 
            value={formData.workshopDetails} 
            onChange={handleChange} 
            disabled={isSubmitting}
            maxLength={500}
          />
        </div>
        
        {/* Bill Information */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Estimate Prepared</label>
          <select 
            name="estimatePrepared" 
            value={formData.estimatePrepared} 
            onChange={handleChange}
            disabled={isSubmitting}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        
        <div className={styles.formGroup}>
          <label className={styles.label}>Bill Amount (₹)</label>
          <input 
            type="number" 
            name="billAmount" 
            value={formData.billAmount} 
            onChange={handleChange} 
            disabled={isSubmitting}
            min="0"
            step="0.01"
          />
        </div>

        <div className={styles.fullWidth}>
          <button 
            type="submit" 
            className={styles.submitButton}
            disabled={isSubmitting}
            aria-busy={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className={styles.spinner} aria-hidden="true" />
                Submitting Claim...
              </>
            ) : (
              "Submit Claim"
            )}
          </button>
        </div>
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

export default Insuranceclaim;