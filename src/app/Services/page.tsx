import React from "react";
// import UnderConstruction from "@/Components/UnderConstruction/page";
import styles from "@/app/page.module.css";
import Image from "next/image";
import OilChange from "@/assets/images/OilChange.jpg";

// BIG SERVICE HORIZONTAL
// Like Oil changes, brakes, transmission, and belts

// Small Services Vertical
// Windshield wipers replace, etc

export default function page() {
  return (
    <div className={styles.Container}>
      <h1> Our Services</h1>
      <section className={styles.ServicesCardFlex}>
        <div className={styles.ServicesCard}>
          <div className={styles.ServicesCardPic}>
            <Image
              src={OilChange}
              alt="Oil Change Pic"
              width={1}
              height={1}
              layout="responsive"
            />
          </div>
          <div className={styles.ServicesCardText}>
            <h3>Oil Changes</h3>
            <p>Contact service if:</p>
            <ul>
              <li> &#x2713; 5,000 miles over since your last oil change</li>
              <li> &#x2713; 6 Months since last oil change</li>
              <li> &#x2713; Oil level is black or dark brown</li>
            </ul>
          </div>
        </div>
        <div className={styles.ServicesCard}>
          <div className={styles.ServicesCardPic}>
            <Image
              src={OilChange}
              alt="Oil Change Pic"
              width={1}
              height={1}
              layout="responsive"
            />
          </div>
          <div className={styles.ServicesCardText}>
            <h3>Brake Services</h3>
            <p>Contact service if:</p>
            <ul>
              <li> &#x2713; Every 30,000 - 50,000 miles</li>
              <li> &#x2713; Signs of rust on the brake rotors</li>
              <li> &#x2713; Longer stopping distance</li>
              <li> &#x2713; High pitch screeching</li>
            </ul>
          </div>
        </div>
        <div className={styles.ServicesCard}>
          <div className={styles.ServicesCardPic}>
            <Image
              src={OilChange}
              alt="Oil Change Pic"
              width={1}
              height={1}
              layout="responsive"
            />
          </div>
          <div className={styles.ServicesCardText}>
            <h3>Serpentine Belt Service</h3>
            <p>Contact service if:</p>
            <ul>
              <li> &#x2713; Every 60,000 - 100,000 miles</li>
              <li> &#x2713; Signs of wear (Cracks, Glazing, Fraying)</li>
              <li> &#x2713; Squealing or chirping sound</li>
              <li> &#x2713; Performance loss</li>
            </ul>
          </div>
        </div>
        <div className={styles.ServicesCard}>
          <div className={styles.ServicesCardPic}>
            <Image
              src={OilChange}
              alt="Oil Change Pic"
              width={1}
              height={1}
              layout="responsive"
            />
          </div>
          <div className={styles.ServicesCardText}>
            <h3>Transmission Service</h3>
            <p>Contact service if:</p>
            <ul>
              <li> &#x2713; Check with your manufacture for intervals</li>
              <li> &#x2713; Gears shifts too quickly or slowly</li>
              <li> &#x2713; Your transmission grinds or makes noise</li>
              <li> &#x2713; Sudden shift forward backward or forward</li>
            </ul>
          </div>
        </div>
        <div className={styles.ServicesCard}>
          <div className={styles.ServicesCardPic}>
            <Image
              src={OilChange}
              alt="Oil Change Pic"
              width={1}
              height={1}
              layout="responsive"
            />
          </div>
          <div className={styles.ServicesCardText}>
            <h3>Air Filter Replacement</h3>
            <p>Contact service if:</p>
            <ul>
              <li>&#x2713; 10,000 - 15,000 miles since replacement</li>
              <li> &#x2713; Filter is dark</li>
              <li> &#x2713; Your AC airflow is weak</li>
            </ul>
          </div>
        </div>
        <div className={styles.ServicesCard}>
          <div className={styles.ServicesCardPic}>
            <Image
              src={OilChange}
              alt="Oil Change Pic"
              width={1}
              height={1}
              layout="responsive"
            />
          </div>
          <div className={styles.ServicesCardText}>
            <h3>Tire Rotation</h3>
            <p>Contact service if:</p>
            <ul>
              <li>&#x2713; The tire has noticeable wear</li>
              <li> &#x2713; You've driven 5,000 miles</li>
            </ul>
          </div>
        </div>
        <div className={styles.ServicesCard}>
          <div className={styles.ServicesCardPic}>
            <Image
              src={OilChange}
              alt="Oil Change Pic"
              width={1}
              height={1}
              layout="responsive"
            />
          </div>
          <div className={styles.ServicesCardText}>
            <h3>AC Recharge</h3>
            <p>Contact service if:</p>
            <ul>
              <li>&#x2713; AC doesn't blow cold air</li>
              <li> &#x2713; AC only cools when accelerating</li>
            </ul>
          </div>
        </div>
        <div className={styles.ServicesCard}>
          <div className={styles.ServicesCardPic}>
            <Image
              src={OilChange}
              alt="Oil Change Pic"
              width={1}
              height={1}
              layout="responsive"
            />
          </div>
          <div className={styles.ServicesCardText}>
            <h3>Windshield Wiper Replacement</h3>
            <p>Contact service if:</p>
            <ul>
              <li>&#x2713; The rubber is ripping </li>
              <li> &#x2713; They make awful noises</li>
            </ul>
          </div>
        </div>
        <div className={styles.ServicesCard}>
          <div className={styles.ServicesCardPic}>
            <Image
              src={OilChange}
              alt="Oil Change Pic"
              width={1}
              height={1}
              layout="responsive"
            />
          </div>
          <div className={styles.ServicesCardText}>
            <h3>Battery Replacement</h3>
            <p>Contact service if:</p>
            <ul>
              <li>&#x2713; Battery is 3-5 years old</li>
              <li>&#x2713; The car starts slower than usual </li>
              <li>&#x2713; The Battery is swollen</li>
              <li>&#x2713; An odd smell comes from the battery</li>
            </ul>
          </div>
        </div>
        <div className={styles.ServicesCard}>
          <div className={styles.ServicesCardPic}>
            <Image
              src={OilChange}
              alt="Oil Change Pic"
              width={1}
              height={1}
              layout="responsive"
            />
          </div>
          <div className={styles.ServicesCardText}>
            <h3>Battery Replacement</h3>
            <p>Contact service if:</p>
            <ul>
              <li>&#x2713; Your headlight flickers</li>
              <li>&#x2713; Headlight is out </li>
              <li>&#x2713; Your lights are dim</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
