import Link from "next/link";
import React from "react";
import styles from "@/app/page.module.css";

// Import Logo
// Add in later

function Footer() {
  return (
    <footer>
      <section className={styles.Container}>
        <div className={styles.FooterNav}>
          <div>
            <h1>Logo Here</h1>
          </div>
          <div>
            <h4>Contact Info</h4>
            <p>Phone Number: (XXX)XXX-XXXX</p>
            <p>Email: TEST@gmail.com</p>
            {/* <p>About</p> */}
          </div>
          <div>
            <div>
              <h4>Follow Us On:</h4>
              <p>Instagram (Coming Soon...)</p>
            </div>
          </div>
          <div>
            <h4>Navigation</h4>
            <a href="/">Home</a>
            <p>Who We Are (Coming Soon...)</p>
            <p>Contact Us (Coming Soon...)</p>
            <p>Q&A (Coming Soon...)</p>
          </div>
        </div>
        <div className={styles.FooterCenter}>
          <div className={styles.border}></div>
          <p> &copy;{new Date().getFullYear()} by JC Detailing</p>
          <h4>
            Made By{" "}
            <Link href="https://github.com/drew990">Andrew Banagas</Link>
          </h4>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
