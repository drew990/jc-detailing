"use client";
import React, { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { Fade as Hamburger } from "hamburger-react";
import Logo1 from "@/assets/logo/AE-Logo-1-new.png";

export default function NavBar() {
  const [isOpen, setOpen] = useState(false);
  const size = useWindowSize();

  return (
    <nav>
      <div>
        <Link href="/" style={{ opacity: 1, maxWidth: "175px" }}>
          <Image
            src={Logo1}
            alt="Logo"
            layout="responsive"
            width={259}
            height={86}
          />
          {/* <h3 style={{ paddingBottom: "0" }}>Auto Essentials</h3> */}
        </Link>
        {/* <h3>{size.width}</h3> */}
        {size.width != undefined && size.width > 800 ? (
          <section>
            <Link href="/services">
              <p>Services</p>
            </Link>

            <Link href="/about">
              <p>About Us</p>
            </Link>
            <Link href="/contact">
              <p>Contact</p>
            </Link>
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
