"use client";
import React from "react";
import styles from "../app/page.module.css";
import Oil from "@/assets/icons/Oil.png";
import Filter from "@/assets/icons/Filter.png";
import Tire from "@/assets/icons/Tire.png";
import AC from "@/assets/icons/AC.png";
import Brakes from "@/assets/icons/Brakes.png";
import Battery from "@/assets/icons/Battery.png";
import Transmission from "@/assets/icons/Transmission.png";
import WaterPump from "@/assets/icons/WaterPump.png";
import Belt from "@/assets/icons/Belt.png";
import Headlight from "@/assets/icons/Headlight.png";
import WindShield from "@/assets/icons/WindShield.png";
import Image from "next/image";
import Link from "next/link";

function Services() {
  return (
    <div className={styles.Service}>
      <h2>Services We Offer</h2>
      <section className={styles.Container}>
        <div className={styles.Card2}>
          <Image loading="lazy" alt="Oil" src={Oil} height={60} width={60} />
          <h3>Oil Change</h3>
          <p>
            Regular oil changes are crucial for maintaining the health of your
            vehicle. By keeping your engine clean and lubricated, you can
            improve its performance and extend its lifespan.{" "}
          </p>
        </div>
        <div className={styles.Card2}>
          <Image
            loading="lazy"
            alt="Brakes"
            src={Brakes}
            height={60}
            width={60}
          />
          <h3>Brake Services</h3>
          <p>
            Brake and brake rotor replacements are important for maintaining the
            safety of your vehicle and ensuring proper braking performance.
            Neglecting these replacements can lead to brake failure, and longer
            stopping distances.
          </p>
        </div>
        <div className={styles.Card2}>
          <Image loading="lazy" alt="Belt" src={Belt} height={60} width={60} />
          <h3>Belt Replacement</h3>
          <p>
            Belts play a crucial role in the functioning of different components
            of your vehicle, such as the engine, alternator, water pump, power
            steering pump, and air conditioning compressor. Over time, belts can
            become worn, cracked, or damaged, which can cause them to break or
            slip.
          </p>
        </div>
        <div className={styles.Card2}>
          <Image
            loading="lazy"
            alt="Transmission"
            src={Transmission}
            height={60}
            width={60}
          />
          <h3>Transmission Service</h3>
          <p>
            Regular transmission service is crucial to prevent expensive repairs
            and maintain the health of your vehicle&apos;s transmission. By
            getting your transmission serviced at recommended intervals, you can
            prevent wear and tear, improve fuel efficiency, and ensure the
            reliability of your vehicle.
          </p>
        </div>
        <div className={styles.Card1}>
          <Image
            loading="lazy"
            alt="Filter"
            src={Filter}
            height={50}
            width={50}
          />
          <h4>Air Filter Replacement</h4>
          <p>
            Engine and cabin filter changes are important for maintaining the
            air quality inside your vehicle, improving fuel efficiency, and
            ensuring optimal performance of your engine
          </p>
        </div>

        <div className={styles.Card1}>
          <Image loading="lazy" alt="Tire" src={Tire} height={50} width={50} />
          <h4>Tire Rotation</h4>
          <p>
            Regular tire rotations help even wear and tear, which not only
            prolongs the lifespan of your tires but also enhances the overall
            performance and safety of your vehicle
          </p>
        </div>
        <div className={styles.Card1}>
          <Image loading="lazy" alt="AC" src={AC} height={50} width={50} />
          <h4>AC Recharge</h4>
          <p>
            Recharge your car&apos;s air conditioning regularly to prevent poor
            performance, high fuel consumption, and costly repairs
          </p>
        </div>

        <div className={styles.Card1}>
          <Image
            loading="lazy"
            alt="WindShield"
            src={WindShield}
            height={50}
            width={50}
          />
          <h4>Windshield Replacement</h4>
          <p>
            Over time, the rubber on the wiper blades can wear out, causing
            streaks, smears, and reduced visibility
          </p>
        </div>

        <div className={styles.Card1}>
          <Image
            loading="lazy"
            alt="WaterPump"
            src={WaterPump}
            height={50}
            width={50}
          />
          <h4>Water Pump Replacement</h4>
          <p>
            Replacing the water pump, one can ensure that the engine runs
            smoothly, and the risk of future costly repairs is significantly
            reduced
          </p>
        </div>
        <div className={styles.Card1}>
          <Image
            loading="lazy"
            alt="Battery"
            src={Battery}
            height={50}
            width={50}
          />
          <h4>Battery Replacement</h4>
          <p>
            Car batteries generally last from 3-5 years, but testing the
            battery&apos;s performance every three years is recommended.
          </p>
        </div>

        <div className={styles.Card1}>
          <Image
            loading="lazy"
            alt="Headlight"
            src={Headlight}
            height={50}
            width={50}
          />
          <h4>Headlight Replacement</h4>
          <p>
            Are you having trouble seeing the road at night or in low-light
            conditions? A headlight replacement may be exactly what you need. A
            new set of headlights can improve your visibility and enhance the
            appearance of your vehicle.
          </p>
        </div>
        {/* <div data-aos="fade-up" className={styles.Card}>
          <Image alt="C" src={cars} height={75} width={75} />
          <h3>Fluid Changes</h3>
          <ul>
            <li>Oil</li>
            <li>Brakes</li>
            <li>Transmission</li>
            <li>Radiator</li>
          </ul>
        </div>
        <div data-aos="fade-up" className={styles.Card}>
          <div>
            <Image alt="C-E" src={car_ex} height={75} width={75} />
            <h3>Preventible Maintenance</h3>

            <ul>
              <li>Brake Rotors</li>
              <li>Battery Service</li>
              <li>Water Pump</li>
              <li>Serpentine Belt</li>
              <li>Timing Belt</li>
            </ul>
          </div>
        </div>
        <div data-aos="fade-up" className={styles.Card}>
          <Image alt="C-I" src={car_in} height={75} width={75} />
          <h3>Interior</h3>
          <p>We Offer The Following Interior Service</p>
          <ul>
            <li>Basic Cleaning</li>
          </ul>
        </div> */}
      </section>
      <Link style={{ opacity: 1 }} href="/contact">
        <button data-aos="fade-up" style={{ cursor: "pointer" }}>
          Get In Touch
        </button>
      </Link>
    </div>
  );
}

export default Services;
