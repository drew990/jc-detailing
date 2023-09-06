"use client";
import React, { useEffect, useState } from "react";
import styles from "../app/page.module.css";
import Link from "next/link";

function NavBar() {
  const [scrollY, setScrollY] = useState<Number>(0);

  useEffect(() => {
    const scroll = (e) => {
      console.log(window.scrollY);
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", scroll, false);
    return () => window.removeEventListener("scroll", scroll, false);
  }, []);

  return (
    <nav>
      <Link href="/">
        <h1>JC Detailing</h1>
      </Link>
      <section>
        <Link href="/contact">
          <p>Contact</p>
        </Link>
        <Link href="/Appointments">
          <p>Appointments</p>
        </Link>
        <p>About</p>
        <p>{scrollY}</p>
      </section>
    </nav>
  );
}

export default NavBar;
