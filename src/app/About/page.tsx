"use client";
import React, { useEffect } from "react";
import UnderConstruction from "@/Components/UnderConstruction/page";
import style from "@/app/page.module.css";

export default function page() {
  return (
    <div className={style.Container}>
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
      <h1 style={{ textAlign: "center" }}>Meet The Crew!</h1>
      <section className={style.AboutLeft}>
        <div className={style.AboutProfilePic}></div>
        <h2>Robert</h2>
        <p className={style.AboutCard}>
          we are the new generation of technicians, eager{" "}
        </p>
      </section>
      <section className={style.AboutRight}>
        <div className={style.AboutProfilePic}></div>
        <h2>Joshua</h2>
        <p className={style.AboutCard}>
          With years of experience, working with company fleets, he strives in
          quality and his knowledge in automotive
        </p>
      </section>
      <section className={style.AboutLeft}>
        <div className={style.AboutProfilePic}></div>
        <h2>Andrew</h2>
        <p className={style.AboutCard}>
          With years of experience, working with company fleets, he strives in
          quality and his knowledge in automotive
        </p>
      </section>
    </div>
  );
}
