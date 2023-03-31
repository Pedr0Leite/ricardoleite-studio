import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface WorksBlockInterface {
  id: number;
  clientName?: string;
  tags?: Array<string>;
  workImgs?: Array<string>;
  block1: Boolean;
  block2: Boolean;
  block3: Boolean;
  imgBlock1?: {
    imgSrc1?: string;
    imgSrc2?: string;
    imgSrc3?: string;  
  };
  imgBlock2?: {
    imgSrc4?: string;  
    imgSrc5?: string;  
    imgSrc6?: string;  
  };
  imgBlock3?: {
    imgSrc7?: string;  
  };
}

const workBlockVariant = {
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
    transition: {
      type: "linear",
      delay: 0.5,
    },
  },
};

export default function WorksBlock({
  id,
  clientName,
  tags,
  workImgs,
  block1,
  block2,
  block3,
  imgBlock1,
  imgBlock2,
  imgBlock3
}: WorksBlockInterface) {

  return (
    // <motion.div
    //   variants={workBlockVariant}
    //   initial="hidden"
    //   whileHover="visible"
    //   animate="hidden"
    //   key={key}
    //   className="worksGrid"
    // >
    <div className="worksGrid">
      {block1 && <div className="worksRowBlock1">
        <div className="worksBlock1">
          <Link href={`/works/${id}`} className="figure">
            <p>
              <img src={imgBlock1?.imgSrc1} />
            </p>
            <p>
              <span>{clientName}</span>
              <span>{tags}</span>
            </p>
          </Link>
        </div>
        <div className="worksBlock2">
          <Link href={`/works/${id}`} className="figure">
            <p>
              <img src="https://via.placeholder.com/454x255" />
            </p>
            <p>
              <span>{clientName}</span>
              <span>{tags}</span>
            </p>
          </Link>
          <Link href={`/works/${id}`} className="figure">
            <p>
              <img src="https://via.placeholder.com/414x414" />
            </p>
            <p>
              <span>{clientName}</span>
              <span>{tags}</span>
            </p>
          </Link>
        </div>
      </div>}
      {block2 && <div className="worksRowBlock2">
        <Link href={`/works/${id}`} className="figure">
          <p>
            <img src="https://via.placeholder.com/336x336" />
          </p>
          <p>
            <span>{clientName}</span>
            <span>{tags}</span>
          </p>
        </Link>
        <Link href={`/works/${id}`} className="figure">
          <p>
            <img src="https://via.placeholder.com/394x220" />
          </p>
          <p>
            <span>{clientName}</span>
            <span>{tags}</span>
          </p>
        </Link>
        <Link href={`/works/${id}`} className="figure">
          <p>
            <img src="https://via.placeholder.com/395x500" />
          </p>
          <p>
            <span>{clientName}</span>
            <span>{tags}</span>
          </p>
        </Link>
      </div>}
      {block3 && <div className="worksRowBlock3">
        <Link href={`/works/${id}`} className="figure">
          <p>
            <img src="https://via.placeholder.com/1361x766" />
          </p>
          <p>
            <span>{clientName}</span>
            <span>{tags}</span>
          </p>
        </Link>
      </div>}
      {/* </motion.div> */}
    </div>
  );
}
