import { useRouter } from "next/router";
import React, { ReactNode, useEffect, useState } from "react";
import specificProjectData from "../../specificProjectData.json";
import { GraphQLClient, request, gql } from "graphql-request";
import Link from "next/link";
import Image from 'next/image'

interface SpecificProjectInterface {
  title: ReactNode;
  year: ReactNode;
  location: ReactNode;
  tags: ReactNode;
  info: ReactNode;
  projects: [
    {
      media: any;
      project_id: number;
      title: string;
      tags: Array<string>;
      year: number;
      location: string;
      active: boolean;
      info: string;
      images: Array<object>;
    }
  ];
}

interface projectInterface {
  project_id: number;
  title: string;
  tags: Array<string>;
  year: number;
  location: string;
  info: string;
  images: Array<{
    url: string;
  }>;
}

const projectsQuery = `
query Projects {
  projects (first: 20) {
    project_id
    title
    tags
    year
    location
    info
    images {
      fileName
      url
    }
  }
}      
`;

// //Runs at build time - PATHS
export const getStaticPaths = async () => {
  const hygraph = new GraphQLClient(
    "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clg7wfxo31jmr01uibwk16v1x/master"
  );

  const data: any = await hygraph.request(projectsQuery);

  const paths = data.projects.map((_project: any) => {
    return {
      params: { id: _project.project_id.toString() },
    };
  });

  return {
    paths: paths,
    fallback: false, //fallback pages
  };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const hygraph = new GraphQLClient(
    "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clg7wfxo31jmr01uibwk16v1x/master"
  );

  //   const data: SpecificProjectInterface = await hygraph.request(
  //     `
  //     query SpecificID {
  //     projects(where: { project_id: ${id} }) {
  //       project_id
  //       title
  //       tags
  //       year
  //       location
  //       info
  //       images {
  //         fileName
  //         url
  //       }
  //   }
  // }`);
  const data: SpecificProjectInterface = await hygraph.request(
    `
    query SpecificID {
      projects (first: 20) {
        project_id
        title
        tags
        year
        location
        info
        images {
          url
        }
      }
}`
  );

  return {
    // props: { project: data.projects, projectImgs: data.projects[0].images },
    props: { project: data.projects },
  };
};

interface ProjectsInterface {
  // project: SpecificProjectInterface;
  project: Array<projectInterface>;
  // projectImgs: Array<Object>;
}

export default function WorksDetails({ project }: ProjectsInterface) {
  const router = useRouter();
  const projectId = Number(router.query.id);
  const [isLoading, setIsLoading] = useState(true);

  const [currentProject, setCurrentProject] = useState<projectInterface>();
  const [prevProjectId, setPrevProject] = useState<projectInterface>();
  const [nextProjectId, setNextProject] = useState<projectInterface>();

  let tags;

  if(currentProject && currentProject.tags){
    tags = currentProject.tags.map((tag: string, index: number) => {
        if (currentProject.tags.length - 1 == index) {
          return tag.replace("_", " ");
        } else {
          return tag.replace("_", " ") + ", ";
        }
      })
    }


  useEffect(() => {
    project.forEach((project: projectInterface) => {
      if (project.project_id === projectId) {
        setCurrentProject(project);
      } else if (project.project_id === projectId - 1) {
        setPrevProject(project);
      } else if (project.project_id === projectId + 1) {
        setNextProject(project);
      }
    });
    
    setIsLoading(false);

  }, [project, projectId]);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="worksDetailsMainDiv">
      {currentProject != undefined && (
        <>
          <div className="worksDetailsLeft">
            <div className="worksDetailsTitle">
              <div>{currentProject.title}</div>
            </div>
            <div className="worksDetailsInfo">
              <span>Client</span>
              <span>{currentProject.title}</span>
            </div>
            <div className="worksDetailsInfo">
              <span>Year</span>
              <span>{currentProject.year}</span>
            </div>
            <div className="worksDetailsInfo">
              <span>Location</span>
              <span>{currentProject.location}</span>
            </div>
            <div className="worksDetailsInfo">
              <span>Services</span>
              <span>{tags}</span>
            </div>
            <div className="worksDetailsText">{currentProject.info}</div>
          </div>
        </>
      )}
      <div className="worksDetailsRight">
        {currentProject?.images.map(
          (projImg: { url: string }, index: number) => {
            return (
              <img
                src={projImg.url}
                className="specificFigure aspect16_9"
                key={`specific-img-${index}`}
                loading="lazy"
              />
            );
          }
        )}
        <div className="workDetailsRightButtons">
          {prevProjectId != undefined && prevProjectId?.project_id >= 0 && (
            <Link href={`/works/${prevProjectId?.project_id}`}>
              &#10094; Prev
            </Link>
          )}
          {nextProjectId != undefined && nextProjectId?.project_id >= 0 && (
            <Link href={`/works/${nextProjectId?.project_id}`}>
              Next &#10095;
            </Link>
          )}
        </div>
        <div className="workDetailsNextPrevProject">
          {prevProjectId != undefined && <span>{prevProjectId.title}</span>}
          {nextProjectId != undefined && <span>{nextProjectId.title}</span>}
        </div>
      </div>
    </div>
  );
}
