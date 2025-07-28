import React from "react";
import styles from "../Contact/Contact.module.css";
import contactustwo from "../../assets/contactustwo.jpg";
import ContactForm from "./ContactForm";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imageBox}>
          <h1 className={styles["overlay-text"]}>Contact Us</h1>
          <img src={contactustwo} alt="contactustwo" />
        </div>
      </div>

      <div className={styles.infoContainer}>
        <h3>Need Our Help?</h3>
        <div className={styles.infoContent}>
          <div className={styles.infoImage}></div>
          <div className={styles.i}>
            <p>
              Let us know how we can assist you — from service bookings to
              general support, we’re always ready to help.
            </p>
            <ul className={styles.helpList}>
              <li>
                <span>✔</span> Book a mechanic at your location – home, office,
                or roadside.
              </li>
              <li>
                <span>✔</span> Understand our service plans and pricing clearly.
              </li>
              <li>
                <span>✔</span> Get 24/7 emergency breakdown assistance when
                stranded.
              </li>
              <li>
                <span>✔</span> Track your ongoing service and get real-time
                updates.
              </li>
              <li>
                <span>✔</span> Get expert advicee on any vehicle issue or
                concern.
              </li>
              <li>
                <span>✔</span> Share your feedback to help us improve your
                experience.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.formContainer}>
        <ContactForm />
      </div>

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
    </>
  );
};

export default Contact;
