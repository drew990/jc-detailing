// import React, { useState } from "react";
import styles from "@/app/page.module.css";

export default function Contact() {
  // Data For the Forms
  // const [fullName, setFullName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  return (
    <div className={styles.Appointment}>
      <h2>Make An Appointment Today</h2>
      <div data-aos="fade-up" className={styles.AppointmentFlex}>
        <section>
          <h3>What To Write</h3>

          <p>
            In order to for us to estimate our quotes and give you the best
            deal, we need to know what your vin is
          </p>
        </section>
        <form action="https://formspree.io/f/mleqpdqr" method="POST">
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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingTop: "1rem",
              maxWidth: "100%",
              width: "100%",
            }}
          >
            <label style={{ paddingBottom: "1rem", margin: "auto" }}>
              Message
            </label>
            <textarea
              placeholder="Message Here"
              id="message"
              name="message"
              rows={8}
              // cols={30}
              required
            />
          </div>
          <div style={{ maxWidth: "100%", width: "100%" }}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
