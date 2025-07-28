import React from "react";
import Card from "./Cards";
import styles from "./PartnerHero2.module.css";

// Cashless Partners
import bajaj from "../../assets/cashlessPartners/bajaj.jpg";
import cholams from "../../assets/cashlessPartners/cholams.png";
import digitinsurance from "../../assets/cashlessPartners/digitinsurance.png";
import futuregenerali from "../../assets/cashlessPartners/futuregenerali.jpg";
import hdfcergo from "../../assets/cashlessPartners/hdfcergo.jpg";
import icici from "../../assets/cashlessPartners/icici.jpg";
import iffco from "../../assets/cashlessPartners/iffco.png";
import nationalinsurance from "../../assets/cashlessPartners/nationalinsurance.jpg";
import orientalinsurance from "../../assets/cashlessPartners/orientalinsurance.png";
import reliance from "../../assets/cashlessPartners/reliance.png";
import sbi from "../../assets/cashlessPartners/sbigeneral.jpg";
import sriram from "../../assets/cashlessPartners/sriram.png";
import tataaig from "../../assets/cashlessPartners/tataaig.png";
import unitedindia from "../../assets/cashlessPartners/unitedindia.jpg";
import universalsompo from "../../assets/cashlessPartners/universalsompo.jpg";

// OEM Partners
import arb from "../../assets/oemPartners/arb.jpg";
import bosch from "../../assets/oemPartners/bosch.png";
import castrol from "../../assets/oemPartners/castrol.jpg";
import ceekay from "../../assets/oemPartners/ceekay.jpg";
import esstar from "../../assets/oemPartners/esstar.jpg";
import gabriel from "../../assets/oemPartners/gabriel.png";
import hundai from "../../assets/oemPartners/hundai.png";
import lumnax from "../../assets/oemPartners/lumnax.png";
import mahindra from "../../assets/oemPartners/mahindra.jpg";
import marutisuzuki from "../../assets/oemPartners/marutisuzuki.png";
import maximile from "../../assets/oemPartners/maximile.jpg";
import mgo from "../../assets/oemPartners/mgo.png";
import mobil from "../../assets/oemPartners/mobil.png";
import monroe from "../../assets/oemPartners/monroe.png";
import motherson from "../../assets/oemPartners/motherson.png";
import servo from "../../assets/oemPartners/servo.png";
import ssAuto from "../../assets/oemPartners/ss automobiles.jpg";
import talbros from "../../assets/oemPartners/talbros.png";
import tatagenuineparts from "../../assets/oemPartners/tatagenuineparts.png";
import valeo from "../../assets/oemPartners/valeo.png";
import veedol from "../../assets/oemPartners/veedol.png";
import vishwakarmamotors from "../../assets/oemPartners/vishwakarmamotors.jpg";

// Arrays
const cashlessPartners = [
  { image: bajaj },
  { image: cholams },
  { image: digitinsurance },
  { image: futuregenerali },
  { image: hdfcergo },
  { image: icici },
  { image: iffco },
  { image: nationalinsurance },
  { image: orientalinsurance },
  { image: reliance },
  { image: sbi },
  { image: sriram },
  { image: tataaig },
  { image: unitedindia },
  { image: universalsompo },
];

const oemPartners = [
  { image: arb },
  { image: bosch },
  { image: castrol },
  { image: ceekay },
  { image: esstar },
  { image: gabriel },
  { image: hundai },
  { image: lumnax },
  { image: mahindra },
  { image: marutisuzuki },
  { image: maximile },
  { image: mgo },
  { image: mobil },
  { image: monroe },
  { image: motherson },
  { image: servo },
  { image: ssAuto },
  { image: talbros },
  { image: tatagenuineparts },
  { image: valeo },
  { image: veedol },
  { image: vishwakarmamotors },
];

const PartnerHero2 = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>
        <span>P</span>
        <span>A</span>
        <span>R</span>
        <span>T</span>
        <span>N</span>
        <span>E</span>
        <span>R</span>
        <span>S</span>
      </h2>

      {/* Cashless Partners */}
      <p className={styles.subheading}>Our Cashless Partners</p>
      <div className={styles.underline}></div>
      <div className={styles.cardContainer}>
        {cashlessPartners.map((partner, index) => (
          <Card key={index} image={partner.image} />
        ))}
      </div>

      {/* OEM Partners */}
      <p className={styles.subheading}>Our OEM Partners</p>
      <div className={styles.underline}></div>
      <div className={styles.cardContainer}>
        {oemPartners.map((partner, index) => (
          <Card key={index} image={partner.image} />
        ))}
      </div>
    </div>
  );
};

export default PartnerHero2;

