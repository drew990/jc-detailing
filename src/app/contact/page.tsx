"use client";
import React from "react";
import Phone from "@/assets/icons/Phone.png";
import Mail from "@/assets/icons/Mail.png";

import styles from "@/app/page.module.css";
import Image from "next/image";

export default function page() {
  return (
    <div
      style={{ paddingTop: "10rem", maxWidth: "1000px" }}
      className={styles.Container}
    >
      <div className={styles.ContactCustomerPhone}>
        <h2>Contact Us</h2>
      </div>
      <p>
        Contacting us is important because it allows us to address any
        questions, concerns, or issues that you may have. By reaching out to us,
        we can provide you with the necessary support and guidance to help you
        with your needs. Additionally, your feedback is valuable to us as it
        allows us to continuously improve our products and services to better
        meet your needs. We are committed to providing the best possible
        experience for our customers, and by contacting us, you are helping us
        achieve that goal.
      </p>
      <div className={styles.ContactCustomerPhoneNumber}>
        <Image src={Phone} alt="Phone" width={50} height={50} />
        <h4> Talk To The Mechanics</h4>
      </div>
      <p className={styles.ContactPhone}>
        Andrew - (562)325-2358 <br />
        Robert - (562)556-6128
      </p>
      <h2 className={styles.ContactEmailH2}>Email Us</h2>
      <p>Allow up to 48 hours for a response</p>
      <form
        className={styles.ContactForm}
        action="https://formspree.io/f/mleqpdqr"
        method="POST"
      >
        <div style={{ width: "fit-content" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingTop: "1rem",
            }}
          >
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="CustomerEmail"
              name="CustomerEmail"
              placeholder="Email Here"
              required
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingTop: "1rem",
            }}
          >
            <label>Full Name</label>
            <input
              type="text"
              id="FullName"
              name="FullName"
              placeholder="Name Here"
              required
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingTop: "1rem",
            }}
          >
            <label>Company Name</label>
            <input
              type="text"
              id="CompanyName"
              name="CompanyName"
              placeholder="Company Name"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingTop: "1rem",
            }}
          >
            <label>Vin</label>
            <input
              type="text"
              id="Vin"
              name="Vin"
              placeholder="Vin"
              minLength={17}
              maxLength={17}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingTop: "1rem",
            width: "fit-content",
          }}
        >
          <label
            style={{
              paddingBottom: "1rem",
              width: "fit-content",
              margin: "auto",
            }}
          >
            Message
          </label>
          <textarea
            className={styles.NewTextarea}
            placeholder="Message Here"
            id="message"
            name="message"
            rows={8}
            // cols={30}
            required
          />
        </div>
        <div style={{ margin: " 3rem auto", width: "fit-content" }}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
