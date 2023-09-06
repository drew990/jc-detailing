"use client";
import React, { useEffect } from "react";

function page() {
  useEffect(() => {
    console.log("I AM ALIVE");
  }, []);

  const handleClick = () => {
    console.log("I WAS CLICKED");
    return;
  };

  return (
    <div>
      <h1 onClick={handleClick} style={{ padding: "20rem 0", color: "#000" }}>
        CONTACT PAGE
      </h1>
    </div>
  );
}

export default page;
