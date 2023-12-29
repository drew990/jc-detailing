import React from "react";
import styles from "../app/page.module.css";
import Link from "next/link";

export default function Quality() {
  return (
    <div className={styles.Quality}>
      <div data-aos="fade-up" className={styles.Container}>
        <h1>We Aim For Quality Cleaning</h1>
        <p>
          Quality detailing involves a comprehensive cleaning and restoration of
          a vehicle's exterior, interior, and engine bay. This includes washing,
          polishing, waxing, vacuuming, steam cleaning, conditioning, leather
          treatment, and engine bay cleaning. We ensures that every surface is
          thoroughly cleaned and restored, leaving your car looking and feeling
          brand new.
        </p>
        <Link style={{ opacity: 1 }} href="/About">
          <button style={{ cursor: "pointer" }}>Learn More</button>
        </Link>
      </div>
    </div>
  );
}
