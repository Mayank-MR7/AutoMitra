import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css"; 
import carrepair from "../../assets/carrepair.jpeg";
import carrepairtwo from "../../assets/carrepairtwo.jpg";
import carrepairthree from "../../assets/carrepairthree.jpg";
import styles from "../Carosol/Carosol.module.css";


const Carosol = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          src={carrepair}
          alt="Car Repair"
          className="d-block w-100"
          style={{ height: "600px", objectFit: "cover" }}
        />
        <Carousel.Caption className={styles.carouselCaption}>
          <h3>Find Skilled Mechanics for Your Workshop – Fast & Easy!</h3>
          <p>
            Post your requirements and connect with experienced mechanics
            instantly.
          </p>
          <div className="d-flex gap-2 mb-2" style={{ justifyContent: "center" }}>
          {/* <Button variant="primary" size="lg" style={{backgroundColor: "#f69d07"}}>
           Requirements
          </Button> */}
        </div>
        </Carousel.Caption>

        

      </Carousel.Item>
      <Carousel.Item>
        <img
          src={carrepairtwo}
          alt="carrepairtwo"
          className="d-block w-100"
          style={{ height: "600px", objectFit: "cover" }}
        />
        <Carousel.Caption className={styles.carouselCaption}>
          <h3>Looking for a Mechanic Job? We’ve Got You Covered</h3>
          <p>
            Apply for high-paying workshop jobs and kickstart your career today.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={carrepairthree}
          alt="Car Repair"
          className="d-block w-100"
          style={{ height: "600px", objectFit: "cover" }}
        />
        <Carousel.Caption className={styles.carouselCaption}>
          <h3>Verified & Experienced Mechanics - Hire with Confidence!</h3>
          <p>
            We ensure all mechanics go through background checks and skill
            verification.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carosol;
