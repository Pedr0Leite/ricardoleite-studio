import React from "react";
import styles from "@/styles/Studio.module.css";
import Spline from "@splinetool/react-spline";
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";
import AnimatedTitle from "@/components/AnimatedTitle";
import AnimatedText from "@/components/AnimatedText";
import MainTitle from "@/components/MainTitle/MainTitle";

export default function Studio() {
  return (
    <>
    {/* <div className={styles.mainDiv}>
      <div className={styles.title}> */}
      {/* <motion.div
        className={styles.title}
        animate={{ scale: [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.6, 0.7, 0.8, 0.9, 1] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      > */}
        {/* <p>
          <span>Ricardo Leite</span>
        </p> */}
      {/* </motion.div> */}
      {/* </div>
      <div className={styles.topDiv}>
        <span>Branding</span>
        <span>Design</span>
        <span>Art Direction</span>
        <span>Typography</span>
      </div> */}
      {/* <div className={styles.mainProjectsDiv}> */}
      {/* <div className="mainProjectsDiv"> */}
        {/* <div className="leftMainDiv"> */}
          {/* <div className="titleTwo">
            <p>
              <span>More than a Designer</span>
            </p>
          </div> */}
          {/* <AnimatedTitle></AnimatedTitle> */}
          {/* <AnimatedText></AnimatedText> */}
        {/* </div> */}
        {/* <div className="rightMainDiv">
          <Spline
            // className={styles.threedbg}
            scene="https://prod.spline.design/MpvHJsLyB5i58B9q/scene.splinecode"
          />
        </div> */}
      {/* </div> */}
    {/* </div> */}
    <MainTitle/>
    <Spline
        className={styles.threedbg}
        // scene="https://prod.spline.design/T5YJEmxFWKkyv-Dc/scene.splinecode"
        scene="https://prod.spline.design/ce3191l5O9zpxI7P/scene.splinecode"
/>
    </>
  );
}
