import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface WorksBlockInterface {
  imgBlock1?: {
    0: {
      imgSrc1?: string;
      clientId?: number;
      clientName?: string;
      tags?: string;
    };
    1: {
      imgSrc2?: string;
      clientId?: number;
      clientName?: string;
      tags?: string;
    };
    2: {
      imgSrc3?: string;
      clientId?: number;
      clientName?: string;
      tags?: string;
    };
  };
  imgBlock2?: {
    0: {
      imgSrc4?: string;
      clientId?: number;
      clientName?: string;
      tags?: string;
    };
    1: {
      imgSrc5?: string;
      clientId?: number;
      clientName?: string;
      tags?: string;
    };
    2: {
      imgSrc6?: string;
      clientId?: number;
      clientName?: string;
      tags?: string;
    };
  };
  imgBlock3?: {
    0: {
      imgSrc7?: string;
      clientId?: number;
      clientName?: string;
      tags?: string;
    };
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
  imgBlock1,
  imgBlock2,
  imgBlock3,
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
      {imgBlock1 && <div className="worksRowBlock1">
        <div className="worksBlock1">
          <Link href={`/works/${imgBlock1?.[0].clientId}`} className="figure">
            <p>
              <img loading="lazy" src={imgBlock1?.[0].imgSrc1} className="figure-1"/>
            </p>
            <p>
              <span>{imgBlock1?.[0].clientName}</span>
              <span>{imgBlock1?.[0].tags}</span>
            </p>
          </Link>
        </div>
        <div className="worksBlock2">
          <Link href={`/works/${imgBlock1?.[1].clientId}`} className="figure">
            <p>
              <img loading="lazy" src={imgBlock1?.[1].imgSrc2} className="figure-2 aspect16_9"/>
            </p>
            <p>
              <span>{imgBlock1?.[1].clientName}</span>
              <span>{imgBlock1?.[1].tags}</span>
            </p>
          </Link>
          <Link href={`/works/${imgBlock1?.[2].clientId}`} className="figure">
            <p>
              <img loading="lazy" src={imgBlock1?.[2].imgSrc3} className="figure-3 aspect1_1"/>
            </p>
            <p>
              <span>{imgBlock1?.[2].clientName}</span>
              <span>{imgBlock1?.[2].tags}</span>
            </p>
          </Link>
        </div>
      </div>}
      {imgBlock2 && <div className="worksRowBlock2">
        <Link href={`/works/${imgBlock2?.[0].clientId}`} className="figure">
          <p>
            <img loading="lazy" src={imgBlock2?.[0].imgSrc4} className="figure-4 aspect1_1"/>
          </p>
          <p>
            <span>{imgBlock2?.[0].clientName}</span>
            <span>{imgBlock2?.[0].tags}</span>
          </p>
        </Link>
        <Link href={`/works/${imgBlock2?.[1].clientId}`} className="figure">
          <p>
            <img loading="lazy" src={imgBlock2?.[1].imgSrc5} className="figure-5 aspect16_9"/>
          </p>
          <p>
            <span>{imgBlock2?.[1].clientName}</span>
            <span>{imgBlock2?.[1].tags}</span>
          </p>
        </Link>
        <Link href={`/works/${imgBlock2?.[2].clientId}`} className="figure">
          <p>
            <img loading="lazy" src={imgBlock2?.[2].imgSrc6} className="figure-6 aspect4_5"/>
          </p>
          <p>
            <span>{imgBlock2?.[2].clientName}</span>
            <span>{imgBlock2?.[2].tags}</span>
          </p>
        </Link>
      </div>}
      {imgBlock3 && <div className="worksRowBlock3">
        <Link href={`/works/${imgBlock3?.[0].clientId}`} className="figure">
          <p>
            <img loading="lazy" src={imgBlock3?.[0].imgSrc7} className="figure-7 aspect16_9" />
          </p>
          <p>
            <span>{imgBlock3?.[0].clientName}</span>
            <span>{imgBlock3?.[0].tags}</span>
          </p>
        </Link>
      </div>}
      {/* </motion.div> */}
      {/* <SlidingText/> */}
    </div>
  );
}
