"use client";
import React, { useEffect } from "react";
import styles from "./page.module.css";
import Hero from "../Components/Hero";
import Services from "@/Components/Services";
import Quality from "@/Components/Quality";
import SocialMedia from "@/Components/SocialMedia";
import Appointment from "@/Components/Contact";
// import AOS from "aos";
// import "aos/dist/aos.css"; // You can also use <link> for styles

export default function Home() {
  // function handleClickME() {
  //   console.log("HI");
  //   return;
  // }
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className={styles.main}>
      <Hero />
      {/* <Services /> */}
      {/* <ReactPlayer url={"https://youtu.be/Wl7I7GSz0vc"} /> */}
      <Quality />
      <Services />
      <Appointment />
      <SocialMedia />
      <link rel="stylesheet" href="bower_components/aos/dist/aos.css" />
    </main>
  );
}
