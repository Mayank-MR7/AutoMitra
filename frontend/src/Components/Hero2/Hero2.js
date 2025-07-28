import React from "react";
import styles from "../Hero2/Hero2.module.css";
import carrepair from "../../assets/carrepair.jpeg";
import carrepairtwo from "../../assets/carrepairtwo.jpg";
import Card from "./Card";


const services = [
  {
    title: "General Maintenance ",
    description:
      "Regular maintenance is the key to keeping your car running smoothly. From oil changes to fluid top-ups, our expert mechanics ensure your vehicle stays in top condition, preventing costly repairs down the road.",
    image: carrepair,
  },
  {
    title: "Engine Repair",
    description:
      "A healthy engine and transmission are vital for a smooth drive. We diagnose and repair engine issues, fix transmission problems, and ensure optimal performance for your vehicle.",
    image: carrepairtwo,
  },
  {
    title: "Brake & Suspension ",
    description:
      "Your safety depends on well-functioning brakes and a stable suspension system. We inspect, repair, and replace brake pads, rotors, and suspension components to provide a smooth and safe ride.",
    image: carrepair,
  },
  {
    title: "Battery & Electricals  Repair",
    description:
      "From battery replacements to fixing complex wiring issues, we keep your car’s electrical system in perfect working order. Our diagnostics help identify faults before they become major problems.",
    image: carrepairtwo,
  },
  {
    title: "Tire & Wheel Services",
    description:
      "Proper tire maintenance improves fuel efficiency and driving safety. We offer tire rotation, wheel alignment, balancing, and replacement services to enhance your vehicle’s road grip.",
    image: carrepair,
  },
  {
    title: "Car AC & Heating Services",
    description:
      "A comfortable ride starts with a well-functioning AC and heating system. Whether it's recharging the refrigerant or repairing faulty components, we ensure your car’s climate control works perfectly in all seasons.",
    image: carrepairtwo,
  }
];

const Hero2 = () => {
  return (
    
    <div className={styles.container}>
       <div className={styles.overlay}></div> {/* Overlay div */}
      <h2 className={styles.heading}> What We Do</h2>
      <div className={styles.cardContainer}>
        {services.map((service, index) => (
          <Card
            key={index}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero2;
