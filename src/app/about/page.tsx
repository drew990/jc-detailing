"use client";
import React from "react";
import styles from "@/app/page.module.css";
import Link from "next/link";
import Image from "next/image";

import Location from "@/assets/images/Location-2.jpg";
import Joshua from "@/assets/images/Joshua.png";
import CarJack from "@/assets/images/CarJack.jpg";

export default function page() {
  return (
    <div className={styles.Container}>
      <h1
        style={{
          padding: "0 2rem",
          borderLeft: "2px solid #071d88",
          marginTop: "3rem",
        }}
      >
        About Us
      </h1>
      <section className={styles.AboutFlex}>
        <div className={styles.AboutPic}>
          <Image
            src={Joshua}
            alt="Who Pic"
            layout="responsive"
            width={1}
            height={1}
          />
        </div>
        <div className={styles.AboutContainer}>
          <h2 style={{ textAlign: "center" }}>Who Are We?</h2>
          <p>
            Our team is comprised of three highly skilled workers - Robert,
            Joshua, and Andrew - who possess years of invaluable experience in
            the automotive industry. Our shared passion for cars is evident in
            every service we provide, as we strive to deliver the same level of
            quality that one would expect from a dealership. We decided to
            establish a mobile lube company to help people become more
            knowledgeable about vehicle maintenance and upkeep, so they can
            enjoy the best possible performance from their cars. Whether you
            need an oil change or a full vehicle inspection, you can trust us to
            meticulously care for your car. Your vehicle will receive the
            attention and respect it deserves, ensuring it runs smoothly and
            reliably for years to come.
          </p>
        </div>
      </section>
      <section className={styles.AboutFlexReverse}>
        <div className={styles.AboutPic}>
          <Image
            src={Location}
            alt="Who Pic"
            layout="responsive"
            width={1}
            height={1}
          />
        </div>
        <div className={styles.AboutContainer}>
          <h2>Where Do We Services?</h2>
          <p style={{ paddingBottom: "2rem" }}>
            Our mobile lube services cover a broad range of cities in Southern
            California, including but not limited to Pasadena, Pomona, Yorba
            Linda, Huntington Beach, Long Beach, and El Segundo. Our extensive
            coverage area enables us to deliver our services to a wide range of
            customers across the region.
          </p>
          <p style={{ textAlign: "center" }}>
            Unsure if we service your city? Send us an email to check.
          </p>
          <div style={{ width: "fit-content", margin: "auto" }}>
            <Link style={{ opacity: 1 }} href="/contact">
              <button>Contact Us</button>
            </Link>
          </div>
        </div>
      </section>
      <section className={styles.AboutFlex}>
        <div className={styles.AboutPic}>
          <Image
            src={CarJack}
            alt="Jack Pic"
            layout="responsive"
            width={1}
            height={1}
          />
        </div>
        <div className={styles.AboutContainer}>
          <h2>How Does Our Service Work?</h2>
          <p>
            Our mobile service comes to your house, and we service your car in
            your driveway. Simply schedule a time that works best for you, and
            we'll take care of the rest. Enjoy the convenience of having your
            car serviced without leaving your home.
          </p>
          <div style={{ width: "fit-content", margin: "auto" }}>
            <Link style={{ opacity: 1 }} href="/services">
              <button>Our Services</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

{
  /* <div className={style.AboutNavBar}>
        <Link href="/about#test">Our Mission</Link>
        <p>Locations</p>
        <p>How It Works</p>
        <p>The Crew</p>
      </div>
      <section className={style.AboutMission}>
        <h1>Our Mission</h1>
        <p>
          At our mobile lube business, we are the experts in providing top-notch
          automotive maintenance services, right at your doorstep. With our
          fast, reliable, and professional on-site oil changes, tire rotations,
          and other essential car maintenance tasks, we are the ultimate
          solution for all your car care needs. We are confident in our ability
          to save your time and hassle while providing the highest quality of
          service. Our mission is to exceed your expectations every time and to
          build lasting relationships through exceptional service and customer
          care.
        </p>
      </section>

      <section className={style.TextContainer} id="test">

        <h2>How Does it Work?</h2>
        <p>
          It's very simple, once making an appointment with us, we drive to the
          designated house and perform the service in a flat driveway
        </p>
        <button>Get In Touch</button>

> */
}
{
  /* className={style.AboutGenCard} */
}
