import React from "react";
import styles from "@/app/page.module.css";
import Link from "next/link";

export default function page() {
  return (
    <div className={styles.UnderConstruction}>
      <div style={{ display: "flex", flexDirection: "column", width: "90%" }}>
        <h1>🚧 Sorry... It&apos;s Under Construction 🚧</h1>
        <Link style={{ opacity: 1 }} href="/">
          <button style={{ cursor: "pointer" }}>Back To Home</button>
        </Link>
      </div>
    </div>
  );
}
