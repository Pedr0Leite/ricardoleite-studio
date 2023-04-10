import React, { useState } from "react";
import MainTitle from "@/components/MainTitle/MainTitle";
import WorksBlock from "@/components/WorksBlock/WorksBlock";
import indexProjectData from "../../indexProjectData.json";
import workBlockData from "../../workBlockData.json";
import { GraphQLClient } from 'graphql-request';

const workBlocksQuery =  `
query WorkBlocks {
  workBlockEntries {
    id
    blockNumber
    img {
      url
    }
    sectionNumber
    imgNumber
    project {
      id
      project_id
      title
    }
  }
}      
`

// //Runs at build time
// export const getStaticProps = async () => {
//     const hygraph = new GraphQLClient(
//       'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clg7wfxo31jmr01uibwk16v1x/master'
//     );
  
//     const data = await hygraph.request(workBlocksQuery);
  
//     return {
//       props: {
//         projects: data,
//       },
//     };
//   }


// interface ProjectObjectInterface {
//   id?: string,
//   blockNumber?: string,
//   img: {
//       url?: string
//   },
//   sectionNumber?: number,
//   imgNumber?: string,
//   project: {
//       id?: string,
//       project_id?: number,
//       title?: string
//   }
// }

// interface ProjectsInterface {
//   projects: Array<ProjectObjectInterface>;
// }

// export default function Works({ projects }: ProjectsInterface) {
export default function Works({ projects }: any) {
  projects = workBlockData.data.workBlockEntries;
  
  const sectionOne = projects.filter(
    (section:any) => section.sectionNumber == 1
    );
  const sectionTwo = projects.filter(
    (section:any) => section.sectionNumber == 2
  );
  const sectionThree = projects.filter(
    (section:any) => section.sectionNumber == 3
  );

  // if(sectionOne != undefined || Array(sectionOne).length != 0){
  const sectionOneRowOne = sectionOne.filter(
    (block:any) => block.blockNumber == "block1"
    );
  const sectionOneRowTwo = sectionOne.filter(
    (block:any) => block.blockNumber == "block2"
  );
  const sectionOneRowThree = sectionOne.filter(
    (block:any) => block.blockNumber == "block3"
  );
  // }

  // // if(sectionTwo != undefined || Array(sectionTwo).length != 0){
  // // console.log(sectionTwoRowOne[0].img?.data.url)
  // const sectionTwoRowOne = sectionTwo.filter(
  //   (block:any) => block.blockNumber == "block1"
  // );
  // const sectionTwoRowTwo = sectionTwo.filter(
  //   (block:any) => block.blockNumber == "block2"
  // );
  // const sectionTwoRowThree = sectionTwo.filter(
  //   (block:any) => block.blockNumber == "block3"
  // );
  // // }

  // // if(sectionThree != undefined || Array(sectionThree).length != 0){
  // const sectionThreeRowOne = sectionThree.filter(
  //   (block:any) => block.blockNumber == "block1"
  // );
  // const sectionThreeRowTwo = sectionThree.filter(
  //   (block:any) => block.blockNumber == "block1"
  // );
  // const sectionThreeRowThree = sectionThree.filter(
  //   (block:any) => block.blockNumber == "block1"
  // );
  // // }

  return (
    <>
    <MainTitle />
    <div className="worksMainDiv">
        {sectionOne && (
          <WorksBlock
            key={"sectionOne"}
            imgBlock1={{
              0: {
                imgSrc1:
                  sectionOneRowOne[0].img.url,
                clientId: sectionOneRowOne[0].project.project_id,
                clientName: sectionOneRowOne[0].project.title
              },
              1: {
                imgSrc2:
                  sectionOneRowOne[1].img.url,
                clientId: sectionOneRowOne[1].project.project_id,
                clientName: sectionOneRowOne[1].project.title
              },
              2: {
                imgSrc3:
                  sectionOneRowOne[2].img.url,
                clientId: sectionOneRowOne[2].project.project_id,
                clientName: sectionOneRowOne[2].project.title
              },
            }}
            // imgBlock2={{
            //   0: {
            //     imgSrc4:
            //       sectionOneRowTwo[0].img.url,
            //     clientId: sectionOneRowTwo[0].project.project_id,
            //     clientName: sectionOneRowTwo[0].project.title
            //   },
            //   1: {
            //     imgSrc5:
            //       sectionOneRowTwo[1].img.url,
            //     clientId: sectionOneRowTwo[1].project.project_id,
            //     clientName: sectionOneRowTwo[1].project.title
            //   },
            //   2: {
            //     imgSrc6:
            //       sectionOneRowTwo[2].img.url,
            //     clientId: sectionOneRowTwo[2].project.project_id,
            //     clientName: sectionOneRowTwo[2].project.title
            //   },
            // }}
            // imgBlock3={{
            //   0: {
            //     imgSrc7:
            //       sectionOneRowThree[0].img.url,
            //     clientId: sectionOneRowThree[0].project?.id,
            //     clientName: sectionOneRowThree[0].project.title
            //   }
            // }}
          />
        )}
  {/* //       {sectionTwo && (
  //         <WorksBlock
  //           key={"sectionTwo"}
  //           imgBlock1={{
  //             0: {
  //               imgSrc1:
  //                 sectionTwoRowOne[0].img?.data.url,
  //               clientId: sectionTwoRowOne[0].project?.data.id,
  //               clientName: sectionTwoRowOne[0].project?.data?.title
  //             },
  //             1: {
  //               imgSrc2:
  //                 sectionTwoRowOne[1].img?.data.url,
  //               clientId: sectionTwoRowOne[1].project?.data.id,
  //               clientName: sectionTwoRowOne[1].project?.data?.title
  //             },
  //             2: {
  //               imgSrc3:
  //                 sectionTwoRowOne[2].img?.data.url,
  //               clientId: sectionTwoRowOne[2].project?.data.id,
  //               clientName: sectionTwoRowOne[2].project?.data?.title
  //             },
  //           }}
  //           imgBlock2={{
  //             0: {
  //               imgSrc4:
  //                 sectionTwoRowTwo[0].img?.data.url,
  //               clientId: sectionTwoRowTwo[0].project?.data.id,
  //               clientName: sectionTwoRowTwo[0].project?.data?.title
  //             },
  //             1: {
  //               imgSrc5:
  //                 sectionTwoRowTwo[1].img?.data.url,
  //               clientId: sectionTwoRowTwo[1].project?.data.id,
  //               clientName: sectionTwoRowTwo[1].project?.data?.title
  //             },
  //             2: {
  //               imgSrc6:
  //                 sectionTwoRowTwo[2].img?.data.url,
  //               clientId: sectionTwoRowTwo[2].project?.data.id,
  //               clientName: sectionTwoRowTwo[2].project?.data?.title
  //             },
  //           }}
  //           imgBlock3={{
  //             0: {
  //               imgSrc7:
  //                 sectionTwoRowThree[0].img?.data.url,
  //               clientId: sectionTwoRowThree[0].project?.data.id,
  //               clientName: sectionTwoRowThree[0].project?.data?.title
  //             }
  //           }}
  //         />
  //       )}
        // {sectionThree && (
  //         <WorksBlock
  //           key={"sectionThree"}
  //           imgBlock1={{
  //             0: {
  //               imgSrc1:
  //                 sectionThreeRowOne[0].img?.data.url,
  //               clientId: sectionThreeRowOne[0].project?.data.id,
  //               clientName: sectionThreeRowOne[0].project?.data?.title
  //             },
  //             1: {
  //               imgSrc2:
  //                 sectionThreeRowOne[1].img?.data.url,
  //               clientId: sectionThreeRowOne[1].project?.data.id,
  //               clientName: sectionThreeRowOne[1].project?.data?.title
  //             },
  //             2: {
  //               imgSrc3:
  //                 sectionThreeRowOne[2].img?.data.url,
  //               clientId: sectionThreeRowOne[2].project?.data.id,
  //               clientName: sectionThreeRowOne[2].project?.data?.title
  //             },
  //           }}
  //           imgBlock2={{
  //             0: {
  //               imgSrc4:
  //                 sectionThreeRowTwo[0].img?.data.url,
  //               clientId: sectionThreeRowTwo[0].project?.data.id,
  //               clientName: sectionThreeRowTwo[0].project?.data?.title
  //             },
  //             1: {
  //               imgSrc5:
  //                 sectionThreeRowTwo[1].img?.data.url,
  //               clientId: sectionThreeRowTwo[1].project?.data.id,
  //               clientName: sectionThreeRowTwo[1].project?.data?.title
  //             },
  //             2: {
  //               imgSrc6:
  //                 sectionThreeRowTwo[2].img?.data.url,
  //               clientId: sectionThreeRowTwo[2].project?.data.id,
  //               clientName: sectionThreeRowTwo[2].project?.data?.title
  //             },
  //           }}
  //           imgBlock3={{
  //             0: {
  //               imgSrc7:
  //                 sectionOneRowThree[0].img?.data.url,
  //               clientId: sectionOneRowThree[0].project?.data.id,
  //               clientName: sectionOneRowThree[0].project?.data?.title
  //             }
  //           }}
  //         />
        // )} */}
      </div>
    </>
  );
}


       {/* {projects !== undefined &&
  //         projects.map((_value: any) => {
  //           return (
  //             <>
  //               <div>
  //                 <WorksBlock 
  //                   key={_value.id}
  //                   id={_value.id}
  //                   clientName={_value.title}
  //                   tags={_value.tags}
  //                   block1={true}
  //                   block2={true}
  //                   block3={true}
  //                   imgBlock1={{imgSrc1: "", imgSrc2: "", imgSrc3: ""}}
  //                   imgBlock2={{imgSrc4: "", imgSrc5: "", imgSrc6: ""}}
  //                   imgBlock3={{imgSrc7: ""}}
  //                 />
  //               </div>
  //             </>
  //           );
  //         })} */}
  //       {/*   return (
  //              <motion.div
  //                variants={workBlockVariant}
  //                initial="hidden"
  //                whileHover="visible"
  //                animate="hidden"
  //                key={_value.id}
  //              >
  //                <WorksBlock key={_value.id} clientName={_value.title} tags={_value.tags}/>
  //              </motion.div>
  //            ); */}