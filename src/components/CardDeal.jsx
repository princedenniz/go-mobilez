import React from "react";
import { card, pngpic } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Here is why Go-Mobilez <br className="sm:block hidden" /> should be your
        choice
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        No matter WHERE you are calling from or WHO you want to CONNECT with
        around the world, Go-Mobilez can connect you! Go-Mobilez is the most RELIABLE
        and best QUALITY international pre-paid calling solution. Go-Mobilez
        understands the challenges of being apart from friends and family, so we
        have made staying CONNECTED simple, secure and affordable!
      </p>
      <Button styles="mt-10" />
    </div>

    <div className={layout.sectionImg}>
      <img src={pngpic} alt="card" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
