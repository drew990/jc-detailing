import React from "react";
import styles from "../app/page.module.css";
import { motion } from "framer-motion";

export default function SocialMedia() {
  return (
    <div className={styles.SocialMedia}>
      <motion.div
        data-aos="fade-up"
        viewport={{ once: true }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ delay: 0.5 }}
        whileInView={{ y: 0, opacity: 1 }}
        style={{ width: "80%", margin: "auto", textAlign: "center" }}
      >
        <h2>Stay Up To Date On Our Social Media</h2>
        <div className={styles.SocialMediaButton}>Coming Soon...</div>
      </motion.div>
    </div>
  );
}
