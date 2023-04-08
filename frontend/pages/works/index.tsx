import React, { useState } from "react";
import MainTitle from "@/components/MainTitle/MainTitle";
import WorksBlock from "@/components/WorksBlock/WorksBlock";
import indexProjectData from "../../indexProjectData.json";

//Runs at build time
export const getStaticProps = async () => {
  // const res = await fetch("http://localhost:1337/api/projects");
  const res = await fetch(
    "http://localhost:1337/api/work-block-entries?populate=*"
  );
  const data = await res.json();

  return {
    props: { projects: data.data },
  };
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
    sectionNumber?: number;
    BlockNumber?: string;
    project?: {
      data: {
        id?: number;
        attributes?: {
          title?:string;
        }
      };
    };
    img?: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}

interface ProjectsInterface {
  projects: Array<ProjectObjectInterface>;
}

export default function Works({ projects }: ProjectsInterface) {
  const sectionOne = projects.filter(
    (section) => section.attributes.sectionNumber == 1
  );
  const sectionTwo = projects.filter(
    (section) => section.attributes.sectionNumber == 2
  );
  const sectionThree = projects.filter(
    (section) => section.attributes.sectionNumber == 3
  );

  const sectionOneRowOne = sectionOne.filter(
    (block) => block.attributes.BlockNumber == "block1"
  );
  const sectionOneRowTwo = sectionOne.filter(
    (block) => block.attributes.BlockNumber == "block2"
  );
  const sectionOneRowThree = sectionOne.filter(
    (block) => block.attributes.BlockNumber == "block3"
  );


  const sectionTwoRowOne = sectionTwo.filter(
    (block) => block.attributes.BlockNumber == "block1"
  );
  const sectionTwoRowTwo = sectionTwo.filter(
    (block) => block.attributes.BlockNumber == "block2"
  );
  const sectionTwoRowThree = sectionTwo.filter(
    (block) => block.attributes.BlockNumber == "block3"
  );

  const sectionThreeRowOne = sectionThree.filter(
    (block) => block.attributes.BlockNumber == "block1"
  );
  const sectionThreeRowTwo = sectionThree.filter(
    (block) => block.attributes.BlockNumber == "block1"
  );
  const sectionThreeRowThree = sectionThree.filter(
    (block) => block.attributes.BlockNumber == "block1"
  );

  return (
    <>
      <MainTitle />
      <div className="worksMainDiv">
        {/* {projects !== undefined &&
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
                    imgBlock1={{imgSrc1: "", imgSrc2: "", imgSrc3: ""}}
                    imgBlock2={{imgSrc4: "", imgSrc5: "", imgSrc6: ""}}
                    imgBlock3={{imgSrc7: ""}}
                  />
                </div>
              </>
            );
          })} */}
        {/*   return (
               <motion.div
                 variants={workBlockVariant}
                 initial="hidden"
                 whileHover="visible"
                 animate="hidden"
                 key={_value.id}
               >
                 <WorksBlock key={_value.id} clientName={_value.title} tags={_value.tags}/>
               </motion.div>
             ); */}
        {sectionOne && (
          <WorksBlock
            key={"sectionOne"}
            imgBlock1={{
              0: {
                imgSrc1:
                  sectionOneRowOne[0].attributes.img?.data.attributes.url,
                clientId: sectionOneRowOne[0].attributes.project?.data.id,
                clientName: sectionOneRowOne[0].attributes.project?.data.attributes?.title
              },
              1: {
                imgSrc2:
                  sectionOneRowOne[1].attributes.img?.data.attributes.url,
                clientId: sectionOneRowOne[1].attributes.project?.data.id,
                clientName: sectionOneRowOne[1].attributes.project?.data.attributes?.title
              },
              2: {
                imgSrc3:
                  sectionOneRowOne[2].attributes.img?.data.attributes.url,
                clientId: sectionOneRowOne[2].attributes.project?.data.id,
                clientName: sectionOneRowOne[2].attributes.project?.data.attributes?.title
              },
            }}
            imgBlock2={{
              0: {
                imgSrc4:
                  sectionOneRowTwo[0].attributes.img?.data.attributes.url,
                clientId: sectionOneRowTwo[0].attributes.project?.data.id,
                clientName: sectionOneRowTwo[0].attributes.project?.data.attributes?.title
              },
              1: {
                imgSrc5:
                  sectionOneRowTwo[1].attributes.img?.data.attributes.url,
                clientId: sectionOneRowTwo[1].attributes.project?.data.id,
                clientName: sectionOneRowTwo[1].attributes.project?.data.attributes?.title
              },
              2: {
                imgSrc6:
                  sectionOneRowTwo[2].attributes.img?.data.attributes.url,
                clientId: sectionOneRowTwo[2].attributes.project?.data.id,
                clientName: sectionOneRowTwo[2].attributes.project?.data.attributes?.title
              },
            }}
            imgBlock3={{
              0: {
                imgSrc7:
                  sectionOneRowThree[0].attributes.img?.data.attributes.url,
                clientId: sectionOneRowThree[0].attributes.project?.data.id,
                clientName: sectionOneRowThree[0].attributes.project?.data.attributes?.title
              }
            }}
          />
        )}
        {/* {sectionTwo && (
          <WorksBlock
            key={"sectionTwo"}
            imgBlock1={{
              0: {
                imgSrc1:
                  sectionTwoRowOne[0].attributes.img?.data.attributes.url,
                clientId: sectionTwoRowOne[0].attributes.project?.data.id,
                clientName: sectionTwoRowOne[0].attributes.project?.data.attributes?.title
              },
              1: {
                imgSrc2:
                  sectionTwoRowOne[1].attributes.img?.data.attributes.url,
                clientId: sectionTwoRowOne[1].attributes.project?.data.id,
                clientName: sectionTwoRowOne[1].attributes.project?.data.attributes?.title
              },
              2: {
                imgSrc3:
                  sectionTwoRowOne[2].attributes.img?.data.attributes.url,
                clientId: sectionTwoRowOne[2].attributes.project?.data.id,
                clientName: sectionTwoRowOne[2].attributes.project?.data.attributes?.title
              },
            }}
            imgBlock2={{
              0: {
                imgSrc4:
                  sectionTwoRowTwo[0].attributes.img?.data.attributes.url,
                clientId: sectionTwoRowTwo[0].attributes.project?.data.id,
                clientName: sectionTwoRowTwo[0].attributes.project?.data.attributes?.title
              },
              1: {
                imgSrc5:
                  sectionTwoRowTwo[1].attributes.img?.data.attributes.url,
                clientId: sectionTwoRowTwo[1].attributes.project?.data.id,
                clientName: sectionTwoRowTwo[1].attributes.project?.data.attributes?.title
              },
              2: {
                imgSrc6:
                  sectionTwoRowTwo[2].attributes.img?.data.attributes.url,
                clientId: sectionTwoRowTwo[2].attributes.project?.data.id,
                clientName: sectionTwoRowTwo[2].attributes.project?.data.attributes?.title
              },
            }}
            imgBlock3={{
              0: {
                imgSrc7:
                  sectionTwoRowThree[0].attributes.img?.data.attributes.url,
                clientId: sectionTwoRowThree[0].attributes.project?.data.id,
                clientName: sectionTwoRowThree[0].attributes.project?.data.attributes?.title
              }
            }}
          />
        )}
        {sectionThree && (
          <WorksBlock
            key={"sectionThree"}
            imgBlock1={{
              0: {
                imgSrc1:
                  sectionThreeRowOne[0].attributes.img?.data.attributes.url,
                clientId: sectionThreeRowOne[0].attributes.project?.data.id,
                clientName: sectionThreeRowOne[0].attributes.project?.data.attributes?.title
              },
              1: {
                imgSrc2:
                  sectionThreeRowOne[1].attributes.img?.data.attributes.url,
                clientId: sectionThreeRowOne[1].attributes.project?.data.id,
                clientName: sectionThreeRowOne[1].attributes.project?.data.attributes?.title
              },
              2: {
                imgSrc3:
                  sectionThreeRowOne[2].attributes.img?.data.attributes.url,
                clientId: sectionThreeRowOne[2].attributes.project?.data.id,
                clientName: sectionThreeRowOne[2].attributes.project?.data.attributes?.title
              },
            }}
            imgBlock2={{
              0: {
                imgSrc4:
                  sectionThreeRowTwo[0].attributes.img?.data.attributes.url,
                clientId: sectionThreeRowTwo[0].attributes.project?.data.id,
                clientName: sectionThreeRowTwo[0].attributes.project?.data.attributes?.title
              },
              1: {
                imgSrc5:
                  sectionThreeRowTwo[1].attributes.img?.data.attributes.url,
                clientId: sectionThreeRowTwo[1].attributes.project?.data.id,
                clientName: sectionThreeRowTwo[1].attributes.project?.data.attributes?.title
              },
              2: {
                imgSrc6:
                  sectionThreeRowTwo[2].attributes.img?.data.attributes.url,
                clientId: sectionThreeRowTwo[2].attributes.project?.data.id,
                clientName: sectionThreeRowTwo[2].attributes.project?.data.attributes?.title
              },
            }}
            imgBlock3={{
              0: {
                imgSrc7:
                  sectionOneRowThree[0].attributes.img?.data.attributes.url,
                clientId: sectionOneRowThree[0].attributes.project?.data.id,
                clientName: sectionOneRowThree[0].attributes.project?.data.attributes?.title
              }
            }}
          />
        )} */}
      </div>
    </>
  );
}
