import React from "react";
import styles from "../app/page.module.css";

export default function Hero() {
  return (
    <div className={styles.HeroBackground}>
      <h1>Detailing Business</h1>
      <h3>Your Car Detailing Business For Your Car</h3>
      <button>Make An Appointment Today</button>
    </div>
  );
}
