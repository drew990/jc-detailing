import Link from "next/link";
import React from "react";
import styles from "@/app/page.module.css";

function Footer() {
  return (
    <footer>
      <section className={styles.Container}>
        <h4>Navigation</h4>
        <p>Pricing</p>
        <p>Contact</p>
        <p>About</p>
        <div className={styles.border}></div>
        <p> &copy;{new Date().getFullYear()} by JC Detailing</p>
        <h4>
          Made By <Link href="https://github.com/drew990">Andrew Banagas</Link>
        </h4>
      </section>
    </footer>
  );
}

export default Footer;
