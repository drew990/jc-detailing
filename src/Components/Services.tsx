"use client";
import React, { useState } from "react";
import styles from "../app/page.module.css";
import cars from "@/assets/icons/cars.png";
import car_ex from "@/assets/icons/car-ex.png";
import car_in from "@/assets/icons/car-in.png";
import Image from "next/image";
import Link from "next/link";

function Services() {
  const [test, setTest] = useState("");

  const handleClick = () => {
    console.log("I was clicked");
  };

  return (
    <div className={styles.Service}>
      <h2>Services We Offer</h2>
      <section className={styles.Container}>
        <div data-aos="fade-up" className={styles.Card}>
          <Image alt="C" src={cars} height={75} width={75} />
          <h3>Cars</h3>
          <p>We Service The Following Cars</p>
          <ul>
            <li>Regular Cars</li>
            <li>SUV</li>
            <li>Trucks</li>
          </ul>
        </div>
        <div data-aos="fade-up" className={styles.Card}>
          <div>
            <Image alt="C-E" src={car_ex} height={75} width={75} />
            <h3>Exterior</h3>
            <p>We Offer The Following Exterior Service</p>
            <ul>
              <li>Basic Wash</li>
              <li>Coating</li>
            </ul>
          </div>
        </div>
        <div data-aos="fade-up" className={styles.Card}>
          <Image alt="C-I" src={car_in} height={75} width={75} />
          <h3>Interior</h3>
          <p>We Offer The Following Interior Service</p>
          <ul>
            <li>Basic Cleaning</li>
          </ul>
        </div>
      </section>
      <Link style={{ opacity: 1 }} href="/Contact">
        <button data-aos="fade-up" style={{ cursor: "pointer" }}>
          Get A Quote
        </button>
      </Link>
    </div>
  );
}

export default Services;
