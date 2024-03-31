"use client";
import React from "react";
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
      <section className={style.AboutGenCard}>
        <h1 style={{ textAlign: "center" }}>The New Generation of Mechanic</h1>
        <p>
          We are the new generation of mechanics, and we're bringing a fresh
          perspective to the automotive industry. With years of experience under
          our belts, we've already established a reputation for ourselves as
          reliable, knowledgeable professionals who prioritize quality and
          customer satisfaction above all else. We believe that every vehicle is
          unique, and we take the time to listen to our customer's concerns and
          address any issues with care and attention to detail. Whether you need
          routine maintenance or more complex repairs, you can trust that your
          car is in good hands with our talented team of experts. We're excited
          to continue pushing the boundaries of what it means to be a mechanic
          and to provide our customers with the best possible service.
        </p>
      </section>
    </div>
  );
}
