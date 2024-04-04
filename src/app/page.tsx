"use client";
import React from "react";
import styles from "./page.module.css";
import Hero from "../Components/Hero";
import Services from "@/Components/ServicesCom";
import Quality from "@/Components/Quality";
import SocialMedia from "@/Components/SocialMedia";
import Appointment from "@/Components/ContactCom";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Quality />
      <Services />
      <Appointment />
      <SocialMedia />
    </main>
  );
}
