"use client";
import React from "react";
// import UnderConstruction from "@/Components/UnderConstruction/page";
import styles from "@/app/page.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import OilChange from "@/assets/images/OilChange.jpg";
import Tires from "@/assets/serviceimages/Tires.jpg";
import Belt from "@/assets/serviceimages/Belt.jpg";
import Transmission from "@/assets/serviceimages/Transmission.jpg";
import Brakes from "@/assets/serviceimages/Brakes.jpg";
import Filter from "@/assets/serviceimages/AirFilter.jpg";
import AC from "@/assets/serviceimages/AC.jpg";
import Headlight from "@/assets/serviceimages/headlight.png";
import Battery from "@/assets/serviceimages/Battery.png";
import Wiper from "@/assets/serviceimages/Wiper.png";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auto Essentials - Mobile Lube - Services",
  description:
    "Auto Essentials is a top-notch mobile lube shop that provides fast, reliable, and professional on-site automotive maintenance services.",
};
// BIG SERVICE HORIZONTAL
// Like Oil changes, brakes, transmission, and belts

// Small Services Vertical
// Windshield wipers replace, etc

export default function page() {
  const list = { hidden: { x: -10, opacity: 0 } };
  const item = { hidden: { x: 0, opacity: 1 } };

  return (
    <div style={{ paddingTop: "8rem" }} className={styles.Container}>
      <h1 style={{ padding: "0 2rem", borderLeft: "2px solid #071d88" }}>
        Services
      </h1>
      <motion.section className={styles.ServicesCardFlex}>
        <motion.div className={styles.ServicesCard}>
          <div className={styles.ServicesCardPic}>
            <Image
              src={OilChange}
              alt="Oil Change Pic"
              width={1}
              height={1}
              layout="responsive"
            />
          </div>
          <div className={styles.ServicesCardText}>
            <h3>Oil Changes</h3>
            <p>Contact service if:</p>
            <ul>
              <li> &#x2713; 5,000 miles over since your last oil change</li>
              <li> &#x2713; 6 Months since last oil change</li>
              <li> &#x2713; Oil level is black or dark brown</li>
            </ul>
          </div>
        </motion.div>
        <div className={styles.ServicesCard}>
          <div className={styles.ServicesCardPic}>
            <Image
              src={Brakes}
              alt="Brake Pic"
              width={1}
              height={1}
              layout="responsive"
            />
          </div>
          <div className={styles.ServicesCardText}>
            <h3>Brake Services</h3>
            <p>Contact service if:</p>
            <ul>
              <li> &#x2713; Every 30,000 - 50,000 miles</li>
              <li> &#x2713; Signs of rust on the brake rotors</li>
              <li> &#x2713; Longer stopping distance</li>
              <li> &#x2713; High pitch screeching</li>
            </ul>
          </div>
        </div>
        <div className={styles.ServicesCard}>
          <div className={styles.ServicesCardPic}>
            <Image
              src={Belt}
              alt="Belt Pic"
              width={1}
              height={1}
              layout="responsive"
            />
          </div>
          <div className={styles.ServicesCardText}>
            <h3>Serpentine Belt Service</h3>
            <p>Contact service if:</p>
            <ul>
              <li> &#x2713; Every 60,000 - 100,000 miles</li>
              <li> &#x2713; Signs of wear (Cracks, Glazing, Fraying)</li>
              <li> &#x2713; Squealing or chirping sound</li>
              <li> &#x2713; Performance loss</li>
            </ul>
          </div>
        </div>
        <div className={styles.ServicesCard}>
          <div className={styles.ServicesCardPic}>
            <Image
              src={Transmission}
              alt="Transmission Pic"
              width={1}
              height={1}
              layout="responsive"
            />
          </div>
          <div className={styles.ServicesCardText}>
            <h3>Transmission Service</h3>
            <p>Contact service if:</p>
            <ul>
              <li> &#x2713; Check with your manufacture for intervals</li>
              <li> &#x2713; Gears shifts too quickly or slowly</li>
              <li> &#x2713; Your transmission grinds or makes noise</li>
              <li> &#x2713; Sudden shift forward backward or forward</li>
            </ul>
          </div>
        </div>
        <div className={styles.ServicesCard}>
          <div className={styles.ServicesCardPic}>
            <Image
              src={Filter}
              alt="Filter Pic"
              width={1}
              height={1}
              layout="responsive"
            />
          </div>
          <div className={styles.ServicesCardText}>
            <h3>Air Filter Replacement</h3>
            <p>Contact service if:</p>
            <ul>
              <li>&#x2713; 10,000 - 15,000 miles since replacement</li>
              <li> &#x2713; Filter is dark</li>
              <li> &#x2713; Your AC airflow is weak</li>
            </ul>
          </div>
        </div>
        <div className={styles.ServicesCard}>
          <div className={styles.ServicesCardPic}>
            <Image
              src={Tires}
              alt="Tires Pic"
              width={1}
              height={1}
              layout="responsive"
            />
          </div>
          <div className={styles.ServicesCardText}>
            <h3>Tire Rotation</h3>
            <p>Contact service if:</p>
            <ul>
              <li>&#x2713; The tire has noticeable wear</li>
              <li> &#x2713; You&apos;ve driven 5,000 miles</li>
            </ul>
          </div>
        </div>
        <div className={styles.ServicesCard}>
          <div className={styles.ServicesCardPic}>
            <Image
              src={AC}
              alt="AC Pic"
              width={1}
              height={1}
              layout="responsive"
            />
          </div>
          <div className={styles.ServicesCardText}>
            <h3>AC Recharge</h3>
            <p>Contact service if:</p>
            <ul>
              <li>&#x2713; AC doesn&apos;t blow cold air</li>
              <li> &#x2713; AC only cools when accelerating</li>
            </ul>
          </div>
        </div>
        <div className={styles.ServicesCard}>
          <div className={styles.ServicesCardPic}>
            <Image
              src={Wiper}
              alt="Wiper Pic"
              width={1}
              height={1}
              layout="responsive"
            />
          </div>
          <div className={styles.ServicesCardText}>
            <h3>Windshield Wiper Replacement</h3>
            <p>Contact service if:</p>
            <ul>
              <li>&#x2713; The rubber is ripping </li>
              <li> &#x2713; They make awful noises</li>
            </ul>
          </div>
        </div>
        <div className={styles.ServicesCard}>
          <div className={styles.ServicesCardPic}>
            <Image
              src={Battery}
              alt="Battery Pic"
              width={1}
              height={1}
              layout="responsive"
            />
          </div>
          <div className={styles.ServicesCardText}>
            <h3>Battery Replacement</h3>
            <p>Contact service if:</p>
            <ul>
              <li>&#x2713; Battery is 3-5 years old</li>
              <li>&#x2713; The car starts slower than usual </li>
              <li>&#x2713; The Battery is swollen</li>
              <li>&#x2713; An odd smell comes from the battery</li>
            </ul>
          </div>
        </div>
        <div className={styles.ServicesCard}>
          <div className={styles.ServicesCardPic}>
            <Image
              src={Headlight}
              alt="Headlight Pic"
              width={1}
              height={1}
              layout="responsive"
            />
          </div>
          <div className={styles.ServicesCardText}>
            <h3>Headlight Replacement</h3>
            <p>Contact service if:</p>
            <ul>
              <li>&#x2713; Your headlight flickers</li>
              <li>&#x2713; Headlight is out </li>
              <li>&#x2713; Your lights are dim</li>
            </ul>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
