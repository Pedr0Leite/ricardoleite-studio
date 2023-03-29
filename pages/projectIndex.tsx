import React from "react";
import indexProjectData from "../indexProjectData.json";
import styles from "@/styles/ProjectIndex.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ProjectIndex() {
  //   const cardImgVariants = {
  //     hidden: {
  //       opacity: 0,
  //     },
  //     visible: {
  //       opacity: 1,
  //       transition: {
  //         type: "spring",
  //         delay: 0.5,
  //       },
  //     },
  //   };
  const cardImgVariants = {
    hidden: {
      opacity: 0,
      height: ["0px"],
    },
    visible: {
      opacity: 1,
      height: [
        "0px",
        "50px",
        "100px",
        "150px",
        "200px",
        "250px",
        "300px",
        "350px",
        "400px",
        "450px",
        "500px",
        "517px",
      ],
      //   transition: {
      //     type: "spring",
      //     delay: 0.5,
      //   },
      transition: {
        type: "linear",
        delay: 0.5,
      },
    },
  };

  return (
    <div className={styles.projectIndexMain}>
      {indexProjectData !== undefined &&
        indexProjectData.map((_value: any) => {
          return (
            <motion.div
              initial="hidden"
              whileHover="visible"
              animate="hidden"
              key={_value.id}
            >
              <Link href={`/works/${_value.id}`}>
                <div className={styles.projectIndexBlock}>
                  <div className={styles.projectIndexBlockOne}>
                    <div>{_value.title}</div>
                    <div>{_value.img} img</div>
                  </div>
                  <div className={styles.projectIndexBlockTwo}>
                    <div>{_value.tags.join(", ")}</div>
                    <div>{_value.year}</div>
                  </div>
                </div>
              </Link>
              <motion.div
                variants={cardImgVariants}
                className={styles.cardImg}
              ></motion.div>
            </motion.div>
          );
        })}
      {/* <motion.div
        initial="hidden"
        whileHover="visible"
        animate="hidden"
        className={styles.projectIndexBlock}
      >
        <div className={styles.projectIndexBlockOne}>
          <div>Altava</div>
          <div>4 img</div>
        </div>
        <div className={styles.projectIndexBlockTwo}>
          <div>Art Direction, Branding, Graphic Design</div>
          <div>2022</div>
        </div>
        <motion.div
          variants={cardImgVariants}
          className={styles.cardImg}
        ></motion.div>
      </motion.div> */}
    </div>
  );
}
