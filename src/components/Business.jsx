import React from "react";
import { apple, bill, google, image5, pngImage } from "../assets";
import styles, { layout } from "../style";

const Business = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={pngImage} alt="bill" className="w-[100%] h-[100%] relative z-[5]" />

      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Download and then <br className="sm:block hidden" /> Register & receive
        free credit.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Go-Mobilez app helps you to connect with your friends and family all over
        the world at a very low rate.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img
          src={apple}
          alt="apple"
          className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
        />
        <img
          src={google}
          alt="google"
          className="w-[128px] h-[42px] object-contain cursor-pointer"
        />
      </div>
    </div>
  </section>
);

export default Business;
