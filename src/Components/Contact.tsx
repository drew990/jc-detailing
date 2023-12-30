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
            deal, we need to know what car and model we will be working on. All
            we need to know is the following details
          </p>
          <ul
            style={{
              width: "fit-content",
              textAlign: "left",
              margin: "auto",
              padding: "1rem 0 ",
            }}
          >
            <li style={{ paddingBottom: "0.75rem" }}>Year of Car</li>
            <li style={{ paddingBottom: "0.75rem" }}>Car Brand</li>
            <li style={{ paddingBottom: "0.75rem" }}>
              Car Type (SUV, Truck, Sedan, etc)
            </li>
            <li style={{ paddingBottom: "0.75rem" }}>
              And what type of service <br /> (Basic Car Wash, Coating, Basic
              Cleaning)
            </li>
          </ul>
          <p>
            To help you, <b style={{ fontWeight: "bold" }}>you may copy </b> the
            message below and fill in the blank
          </p>
          <br />
          <p>
            Hello, My name is (first name), and I am looking for (service). My
            car is a (Car Details) I was wondering when your next available day
            is and how much the service will be. Thank you!
          </p>
        </section>
        <form>
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
              id="email"
              name="email"
              placeholder="Email Here"
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
            <input type="text" id="fn" name="fn" placeholder="Name Here" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingTop: "1rem",
            }}
          >
            <label style={{ paddingBottom: "1rem" }}>Message</label>
            <textarea
              placeholder="Message Here. Feel Free To Copy The Given Message"
              id="message"
              name="message"
              rows={6}
              cols={8}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
