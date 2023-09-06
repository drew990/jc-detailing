import React from "react";
import styles from "../app/page.module.css";

function WhyDetail() {
  return (
    <div className={styles.Container}>
      <div className={styles.WhyDetail}>
        <div>
          <h1>IMAGE</h1>
        </div>
        <div className={styles.WhyDetailText}>
          <h2>Why Detail Your Car?</h2>
          <p>
            Maintaining a regular car detailing routine is crucial in preserving
            the pristine appearance of your vehicle. Not only does it enhance
            the overall aesthetic appeal, but it also prolongs the lifespan of
            your car. By eliminating dirt, grime, rust, and corrosion, you
            prevent the possibility of future damage, ultimately saving you from
            costly repairs. Therefore, it's important to view car detailing as
            an investment in the longevity of your vehicle rather than an
            unnecessary expense.
          </p>
          <button>Make An Appointment Today</button>
        </div>
      </div>
    </div>
  );
}

export default WhyDetail;
