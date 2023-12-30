"use client";
import React, { useEffect, useState } from "react";
import styles from "../app/page.module.css";
import Link from "next/link";
import { Fade as Hamburger } from "hamburger-react";

export default function NavBar() {
  const [isOpen, setOpen] = useState(false);
  const size = useWindowSize();

  return (
    <nav>
      <div>
        <Link href="/">
          <h3 style={{ paddingBottom: "0" }}>JC Detailing</h3>
        </Link>
        {/* <h3>{size.width}</h3> */}
        {size.width != undefined && size.width > 800 ? (
          <section>
            <Link href="/Q&A">
              <p>Q&A</p>
            </Link>
            <Link href="/Contact">
              <p>Contact</p>
            </Link>
            <Link href="/About">
              <p>About Us</p>
            </Link>
            <Link href="/Services">
              <p>Services</p>
            </Link>
            {/* <p>{scrollY}</p> */}
          </section>
        ) : (
          <Hamburger
            rounded
            label="Show Menu"
            toggled={isOpen}
            toggle={setOpen}
          />
        )}
      </div>
      {isOpen && size.width != undefined && size.width < 800 ? (
        <section style={{ flexDirection: "column", margin: "auto" }}>
          <Link href="/Q&A">
            <p>Q&A</p>
          </Link>
          <Link href="/Contact">
            <p>Contact</p>
          </Link>
          <Link href="/About">
            <p>About Us</p>
          </Link>
          {/* <p>{scrollY}</p> */}
        </section>
      ) : undefined}
    </nav>
  );
}

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<any>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
