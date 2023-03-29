import React from "react";
import MainTitle from "@/components/MainTitle/MainTitle";
import WorksBlock from "@/components/WorksBlock/WorksBlock";
import indexProjectData from "../../indexProjectData.json";

export default function Works() {
  return (
    <>
      <MainTitle />
      <div className="worksMainDiv">
        {indexProjectData !== undefined &&
          indexProjectData.map((_value: any) => {
            return (
              <>
                <div>
                  <WorksBlock
                    key={_value.id}
                    id={_value.id}
                    clientName={_value.title}
                    tags={_value.tags}
                    block1={true}
                    block2={true}
                    block3={true}
                    imgBlock1={{imgSrc1: "https://via.placeholder.com/710x810", imgSrc2: "", imgSrc3: ""}}
                    imgBlock2={{imgSrc4: "", imgSrc5: "", imgSrc6: ""}}
                    imgBlock3={{imgSrc7: ""}}
                  />
                </div>
              </>
            );
            // return (
            //   <motion.div
            //     variants={workBlockVariant}
            //     initial="hidden"
            //     whileHover="visible"
            //     animate="hidden"
            //     key={_value.id}
            //   >
            //     <WorksBlock key={_value.id} clientName={_value.title} tags={_value.tags}/>
            //   </motion.div>
            // );
          })}
      </div>
    </>
  );
}
