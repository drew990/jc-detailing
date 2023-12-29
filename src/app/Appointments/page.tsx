// "use client";
// import styles from "@/app/page.module.css";
// import { useEffect, useState } from "react";
// // Import Images
// import car from "@/Images/CarType/car.png";
// import pickup from "@/Images/CarType/pickup.png";
// import suv from "@/Images/CarType/suv.png";
// import Image from "next/image";

// function page() {
//   const [data, setData] = useState(null);
//   const [isLoading, setLoading] = useState(true);

//   // Uses UseEffect to catch API
//   useEffect(() => {
//     fetch("/api")
//       .then((res) => res.json())
//       .then((data) => {
//         // console.log(data);
//         setData(data);
//         setLoading(false);
//       });
//   }, []);

//   if (isLoading) return <p>Loading...</p>;
//   if (!data) return <p>No profile data</p>;

//   // Picks Car Type
//   const dataPick = (e) => {
//     console.log(e);

//     return;
//   };

//   return (
//     <div style={{ color: "black" }}>
//       <h1>Appointments</h1>
//       <section
//         style={{ textAlign: "center" }}
//         className={`${styles["Container"]} ${styles["Appointment"]}`}
//       >
//         <h2>Ready To Get Started?</h2>
//         <h3>Fill Out The Information Below To Start Making An Appointment</h3>
//         <form></form>
//         <h4>Step 1: Click Your Car Type</h4>
//         <div className={styles.OptionFlex}>
//           <div
//             data-value={data["Car"]["catalogId"]}
//             onClick={() => console.log("WOW")}
//             className={styles.OptionCard}
//           >
//             <Image alt="Car" src={car} height={50} width={50} />
//             <p>{data["Car"]["serviceName"]}</p>
//           </div>

//           <div
//             data-value={data["SUV"]["catalogId"]}
//             onClick={() => dataPick(data["SUV"]["catalogId"])}
//             className={styles.OptionCard}
//           >
//             <Image alt="Car" src={suv} height={50} width={50} />
//             <p>{data["SUV"]["serviceName"]}</p>
//           </div>

//           <div
//             data-value={data["Truck"]["catalogId"]}
//             onClick={() => console.log("WOW")}
//             className={styles.OptionCard}
//           >
//             <Image alt="Pickup" src={pickup} height={50} width={50} />
//             <p>{data["Truck"]["serviceName"]}</p>
//           </div>
//         </div>
//         <button
//           disabled
//           style={{ backgroundColor: "white", border: "1px solid black" }}
//         >
//           Next
//         </button>
//         {/* <div className={styles.OptionFlex}>
//             <div
//               data-value={"Interior"}
//               onClick={() => console.log("WOW")}
//               className={styles.OptionCard}
//             >
//               <h1>IMG</h1>
//               <p>Interior</p>
//             </div>
//             <div
//               data-value={"Exterior"}
//               onClick={selectService}
//               className={styles.OptionCard}
//             >
//     <h1>IMG</h1>
//     <p>Exterior</p>
//   </div>
//   <div
//     data-value={"Both"}
//     onClick={selectService}
//     className={styles.OptionCard}
//   >
//     <h1>IMG</h1>
//     <p>Both</p>
//   </div>
// </div> */}
{
  /* <h4>Step 2: Click Your Car Type</h4>
          <div className={styles.OptionFlex}>
            <div className={styles.OptionCard}>
              <h1>IMG</h1>
              <p>Car</p>
            </div>
            <div className={styles.OptionCard}>
              <h1>IMG</h1>
              <p>SUV</p>
            </div>
            <div className={styles.OptionCard}>
              <h1>IMG</h1>
              <p>Truck</p>
            </div>
          </div> */
}
//       </section>
//     </div>
//   );
// }

// export default page;
