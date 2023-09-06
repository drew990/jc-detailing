"use client";
import React, { useState } from "react";
import styles from "@/app/page.module.css";

function page() {
  const [carType, setCarType] = useState("");
  const [serviceType, setServiceType] = useState("");

  function selectService() {
    console.log("In Select Service");
  }

  function handleClick() {
    console.log("YES");
  }

  console.log("In Select Service");

  return (
    <div style={{ color: "black" }}>
      <h1>Appointments</h1>
      <section
        style={{ textAlign: "center" }}
        className={`${styles["Container"]} ${styles["Appointment"]}`}
      >
        <h2>Ready To Get Started?</h2>
        <h3>Fill Out The Information Below To Start Making An Appointment</h3>
        <h4>Step 1: What Type of Cleaning Do You Need?</h4>
        <form>
          <div className={styles.OptionFlex}>
            <div
              data-value={"Interior"}
              onClick={() => console.log("WOW")}
              className={styles.OptionCard}
            >
              <h1>IMG</h1>
              <p>Interior</p>
            </div>
            <div
              data-value={"Exterior"}
              onClick={selectService}
              className={styles.OptionCard}
            >
              <h1>IMG</h1>
              <p>Exterior</p>
            </div>
            <div
              data-value={"Both"}
              onClick={selectService}
              className={styles.OptionCard}
            >
              <h1>IMG</h1>
              <p>Both</p>
            </div>
          </div>
          <h4>Step 2: Click Your Car Type</h4>
          <div className={styles.OptionFlex}>
            <div className={styles.OptionCard}>
              <h1>IMG</h1>
              <p>Car</p>
            </div>
            <div className={styles.OptionCard}>
              <h1>IMG</h1>
              <p>SUV</p>
            </div>
            <div className={styles.OptionCard}>
              <h1>IMG</h1>
              <p>Truck</p>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

export default page;
