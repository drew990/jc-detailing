import Image from "next/image";
import styles from "./page.module.css";
import Hero from "../Components/Hero";
import Services from "@/Components/Services";
import WhyDetail from "@/Components/WhyDetail";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Services />
      <WhyDetail />
    </main>
  );
}
