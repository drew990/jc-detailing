// import React, { useEffect } from "react";
import styles from "../app/page.module.css";
// import HeroImg from "@/Images/Hero/Hero.jpg";
import Link from "next/link";
// import Youtube from "react-youtube";
// import ReactPlayer from "react-player";
// All requests made with the client will be authenticated
// import { createClient } from "pexels";
// const client = createClient(
//   API_KEY
// );

export default function Hero() {
  // console.log(process.env.API_KEY);

  // const videoOptions = {
  //   playerVars: {
  //     autoplay: 1,
  //     controls: 0,
  //     rel: 0,
  //     showinfo: 0,
  //     mute: 1,
  //     loop: 1,
  //   },
  // };

  // client.photos.show({ id: 4822920 }).then((photo) => {
  //   console.log(JSON.stringify(photo));
  // });

  return (
    <div className={styles.HeroContainer}>
      {/* Black Screen To Make Video Darker */}
      {/* <div className={styles.DarkVideo}></div> */}
      {/* Video of Detailing */}
      {/* <Youtube
        className={styles.video}
        videoId="Wl7I7GSz0vc"
        opts={videoOptions}
      /> */}
      {/* WORKING BELOW WITH ERRORS */}
      {/* <ReactPlayer
          url={"https://youtu.be/Wl7I7GSz0vc"}
          // config={{
          //   youtube: {
          //     playerVars{
          //       autoplay: 1,
          //       controls: 0,
          //       rel: 0,
          //       showinfo: 0,
          //       mute: 1,
          //       loop: 1,
          //     }
          //   },
          // }}

          playing={true}
          loop={true}
          volume={0}
          muted
          // loop="true"
          // volume="0"
          // muted
          className={styles.video}
        /> */}

      {/* Hero Text And Call To Action */}
      <div className={styles.HeroBackground}>
        <h1 data-aos="fade-up">Logo Here</h1>

        <h1 data-aos="fade-up">Keeping Your Car Brand New</h1>
        {/* <h2> We Have Your Back</h2>
        <h2> Precision Detailing at its Finest!</h2> */}
        <Link style={{ opacity: 1 }} href="/Contact">
          <button data-aos="fade-up" style={{ cursor: "pointer" }}>
            Get A Quote
          </button>
        </Link>
      </div>
    </div>
  );
}
