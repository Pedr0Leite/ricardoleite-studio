import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import indexProjectData from "../../indexProjectData.json";

// //Runs at build time - PATHS
export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:1337/api/projects");
  const data = await res.json();

  const paths = data.data.map((_project: any) => {
    return {
      params: { id: _project.id.toString() },
    };
  });

  return {
    paths: paths,
    fallback: false, //fallback pages
  };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const res = await fetch(
    `http://localhost:1337/api/projects/${id}?populate=*`
  );
  const data = await res.json();

  return {
    props: { project: data.data, projectImgs: data.data.attributes.media.data },
  };
};

interface WorksDetailsInterface {
  clientName?: string;
  year?: number;
  location?: string;
  details?: string;
  imgArray?: Array<string>;
}

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
  project: ProjectObjectInterface;
  projectImgs: Array<Object>;
}

export default function WorksDetails({
  project,
  projectImgs,
}: ProjectsInterface) {

  // console.log(`http://localhost:1337${projects.attributes.media.data[0].attributes.url}`)

  const router = useRouter();
  const projectId = router.query.id;
  const [projInfo, setProjInfo] = useState<WorksDetailsInterface>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
  //   setProjInfo({
  //     clientName: indexProjectData[Number(projectId)].title,
  //     year: indexProjectData[Number(projectId)].year,
  //     location: indexProjectData[Number(projectId)].location,
  //     details: indexProjectData[Number(projectId)].title,
  //   });
    setIsLoading(false);
  }, []);

  // const projectId = router.query.id;

  // const proj = indexProjectData[Number(projectId)];

  // if (router.isFallback) {
  //   return <div>Loading...</div>
  // }

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="worksDetailsMainDiv">
      <div className="worksDetailsLeft">
        <div className="worksDetailsTitle">
          <div>{project.attributes.title}</div>
        </div>
        <div className="worksDetailsInfo">
          <span>Client</span>
          <span>{project.attributes.title}</span>
        </div>
        <div className="worksDetailsInfo">
          <span>Year</span>
          <span>{project.attributes.year}</span>
        </div>
        <div className="worksDetailsInfo">
          <span>Location</span>
          <span>{project.attributes.location}</span>
        </div>
        <div className="worksDetailsInfo">
          <span>Services</span>
          <span>{project.attributes.tags}</span>
        </div>
        <div className="worksDetailsText">
          {project.attributes.info}
        </div>
      </div>
      <div className="worksDetailsRight">
        <img src="https://via.placeholder.com/700x382" />
        <img src="https://via.placeholder.com/690x378" />
        <img src="https://via.placeholder.com/692x367" />
        {/* <img src={`http://localhost:1337${projects.data.attributes.media.data[0].attributes.url}`} /> */}
      </div>
    </div>
  );
}
