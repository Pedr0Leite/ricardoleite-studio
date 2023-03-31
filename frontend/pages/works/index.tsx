import React from "react";
import MainTitle from "@/components/MainTitle/MainTitle";
import WorksBlock from "@/components/WorksBlock/WorksBlock";
import indexProjectData from "../../indexProjectData.json";

//Runs at build time
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:1337/api/projects");
  const data = await res.json();

  return {
    props: { projects: data.data }
  }
};

interface ProjectObjectInterface {
  id: number;
  attributes: {
    createdAt?: string;
    info?: string;
    location?: string;
    media?: Array<Object>;
    mediaCount?: number;
    publishedAt?: string;
    tags?: string;
    title?: string;
    updatedAt?: string;
    year?: number;
  };
}

interface ProjectsInterface {
  projects: Array<ProjectObjectInterface>;
}

export default function Works({ projects }: ProjectsInterface) {
    
  return (
    <>
      <MainTitle />
      <div className="worksMainDiv">
        {projects !== undefined &&
          projects.map((_value: any) => {
            return (
              <>
                <div>
                  <WorksBlock 
                    key={_value.id}
                    id={_value.id}
                    clientName={_value.attributes.title}
                    tags={_value.attributes.tags}
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
