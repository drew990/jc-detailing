import Link from "next/link";
import Image from "next/image";
import React from "react";
import styles from "@/app/page.module.css";
import Logo1 from "@/assets/logo/AE-Logo-1-new.png";
// Import Logo
// Add in later

function Footer() {
  return (
    <footer>
      <section className={styles.Container}>
        <div className={styles.FooterNav}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image src={Logo1} alt="Logo" width={200} height={67} />
          </div>
          <div>
            <h4>Contact Info</h4>
            <p>
              Andrew - (562)325-2358 <br />
              Robert - (562)556-6128
            </p>
            <p>
              Email: <br /> andrewbanagas40@gmail.com <br />
              robertverdugo038@gmail.com
            </p>

            {/* <p>About</p> */}
          </div>
          <div>
            <div>
              <h4>Follow Us On:</h4>
              <p>Instagram (Coming Soon...)</p>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h4>Navigation</h4>
            <Link href="/">Home</Link>
            <Link href="/About">Who We Are</Link>
            <Link href="/Contact">Contact Us</Link>
          </div>
        </div>
        <div className={styles.FooterCenter}>
          <div className={styles.border}></div>
          <p> &copy;{new Date().getFullYear()} by Auto Essentials</p>
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
