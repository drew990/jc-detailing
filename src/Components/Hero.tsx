import styles from "../app/page.module.css";
import Logo1 from "@/assets/logo/AE-Logo-1-new.png";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

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
        <div
          style={{ maxWidth: "650px", paddingBottom: "1rem" }}
          data-aos="fade-up"
        >
          <Image
            loading="lazy"
            src={Logo1}
            alt="Logo"
            layout="responsive"
            width={259}
            height={86}
          />
        </div>
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          Keeping Your Car Stress Free
        </motion.h1>
        {/* <h2> We Have Your Back</h2>
        <h2> Precision Detailing at its Finest!</h2> */}
        <Link style={{ opacity: 1 }} href="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileFocus={{ scale: 0.95 }}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            Get In Touch
          </motion.button>
        </Link>
      </div>
    </div>
  );
}
