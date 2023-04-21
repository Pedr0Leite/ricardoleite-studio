import { useRouter } from "next/router";
import React, { ReactNode, useEffect, useState } from "react";
import specificProjectData from "../../specificProjectData.json";
import { GraphQLClient, request, gql } from 'graphql-request';
import Link from "next/link";

// interface SpecificProjectInterface {
//     title: ReactNode;
//     year: ReactNode;
//     location: ReactNode;
//     tags: ReactNode;
//     info: ReactNode;
//     projects: [
//       {
//         media: any;
//         project_id: number,
//         title: string,
//         tags: Array<string>,
//         year: number,
//         location: string,
//         active: boolean,
//         info: string,
//         images: Array<object>
//       }
//     ]
// }

// const projectsQuery = `
// query Projects {
//   projects {
//     project_id
//     title
//     tags
//     year
//     location
//     active
//     info
//     media {
//       fileName
//       url
//     }
//   }
// }      
// `;

// // //Runs at build time - PATHS
// export const getStaticPaths = async () => {
//   const hygraph = new GraphQLClient(
//     'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clg7wfxo31jmr01uibwk16v1x/master'
//   );  

//   const data:any = await hygraph.request(projectsQuery);
  
//   const paths = data.projects.map((_project: any) => {
//     return {
//       params: { id: _project.project_id.toString() },
//     };
//   });

//   return {
//     paths: paths,
//     fallback: false, //fallback pages
//   };
// };

// export const getStaticProps = async (context: any) => {
//   const id = context.params.id;
//   const hygraph = new GraphQLClient(
//     'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clg7wfxo31jmr01uibwk16v1x/master'
//   );  

//   const data:SpecificProjectInterface = await hygraph.request(
//     `
//     query SpecificID {
//   projects(where: { project_id: ${id} }) {
//     project_id
//     title
//     tags
//     year
//     location
//     active
//     info
//     images {
//       fileName
//       url
//     }
//   }
// }     
//     `
//   );

//   return {
//     props: { project: data.projects[0], projectImgs: data.projects[0].media },
//   };
// };


// interface ProjectsInterface {
//   project: SpecificProjectInterface;
//   projectImgs: Array<Object>;
// }

// export default function WorksDetails({project, projectImgs,}: ProjectsInterface) {    
export default function WorksDetails(project:any, projectImgs:any) {
  project = specificProjectData.data.projects[0];
  const router = useRouter();
  const projectId = router.query.id;
  const prevProjectId = Number(projectId) - 1;
  const nextProjectId = Number(projectId) + 1;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // setIsLoading(true);
 
    setIsLoading(false);
  }, []);

  // const projectId = router.query.id;

  // const proj = indexProjectData[Number(projectId)];

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="worksDetailsMainDiv">
      <div className="worksDetailsLeft">
        <div className="worksDetailsTitle">
          <div>{project.title}</div>
        </div>
        <div className="worksDetailsInfo">
          <span>Client</span>
          <span>{project.title}</span>
        </div>
        <div className="worksDetailsInfo">
          <span>Year</span>
          <span>{project.year}</span>
        </div>
        <div className="worksDetailsInfo">
          <span>Location</span>
          <span>{project.location}</span>
        </div>
        <div className="worksDetailsInfo">
          <span>Services</span>
          <span>{project.tags}</span>
        </div>
        <div className="worksDetailsText">
          {project.info}
        </div>
      </div>
      <div className="worksDetailsRight">
        {/* <img src="https://via.placeholder.com/700x382" className="specificFigure-1 aspect16_9"/> */}
        <img src={specificProjectData.data.projects[0].images[0].url} className="specificFigure aspect16_9"/>
        {/* <img src="https://via.placeholder.com/690x378" className="specificFigure-2"/> */}
        <img src={specificProjectData.data.projects[0].images[0].url} className="specificFigure aspect16_9"/>
        {/* <img src="https://via.placeholder.com/692x367" className="specificFigure-3"/> */}
        <img src={specificProjectData.data.projects[0].images[0].url} className="specificFigure aspect16_9"/>
        {/* <img src={`http://localhost:1337${projects.data.attributes.media.data[0].attributes.url}`} /> */}
        <div className="workDetailsRightButtons">
          {prevProjectId >= 0 && <Link href={`/works/${prevProjectId}`}>&#10094; Prev</Link>}
          <Link href={`/works/${nextProjectId}`}>Next &#10095;</Link>
        </div>
        <div className="workDetailsNextPrevProject">
          <span>Altava</span>
          <span>Off the Grid</span>
        </div>
      </div>
    </div>
  );
}