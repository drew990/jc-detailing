"use client";
import React, { useState } from "react";
import styles from "../app/page.module.css";
import clean from "@/Images/Icons/clean.png";
import time from "@/Images/Icons/time-span.png";
import car from "@/Images/Icons/car-clean.png";
import Image from "next/image";

function Services() {
  const [test, setTest] = useState("");

  const handleClick = () => {
    console.log("I was clicked");
  };

  return (
    <div className={styles.Container}>
      <div className={styles.Service}>
        <h2>Services</h2>
        <section>
          <div className={styles.Card} onClick={handleClick}>
            <Image src={car} alt="IMG" width={75} height={75} />
            <div className={styles.CardText}>
              <h4>Hand Wash</h4>
              <p>
                Hand washing allows for a more thorough clean, as you can pay
                attention to the details and ensure every nook and cranny is
                washed
              </p>
            </div>
          </div>
          <div className={styles.Card}>
            <Image src={clean} alt="IMG" width={75} height={75} />
            <div className={styles.CardText}>
              <h4>Clean Interior</h4>
              <p>
                I use a vacuum to remove any dirt or debris from the seats and
                floor mats
              </p>
            </div>
          </div>
          <div className={styles.Card}>
            <Image src={time} alt="IMG" width={75} height={75} />
            <div className={styles.CardText}>
              <h4>At Your Time</h4>
              <p>
                Don’t worry about time crunching your day as you can schedule
                your day and hour of service
              </p>
            </div>
          </div>
        </section>
        <button onClick={handleClick}>Test Button</button>
      </div>
    </div>
  );
}

export default Services;
