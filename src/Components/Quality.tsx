import React from "react";
import styles from "../app/page.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Quality() {
  return (
    <div className={styles.Quality}>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
        className={styles.Container}
      >
        <h1>We Aim For Quality Work</h1>
        <p>
          We take great pride in the quality of our work and our in-depth
          knowledge of cars. Our team of experts is committed to delivering
          exceptional services that meet and exceed our customers&apos;
          expectations. We believe that every customer deserves the highest
          level of care and attention, and we strive to provide a professional
          and diplomatic approach to all our interactions. With our expertise
          and dedication, you can trust us to provide reliable and efficient
          services that will keep your car running smoothly for years to come.
        </p>
        <Link style={{ opacity: 1 }} href="/about">
          <button style={{ cursor: "pointer" }}>Learn More</button>
        </Link>
      </motion.div>
    </div>
  );
}
