import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import indexProjectData from "../../indexProjectData.json";

interface WorksDetailsInterface {
  clientName?: string;
  year?: number;
  location?: string;
  details?: string;
  imgArray?: Array<string>;
}

// export default function WorksDetails({clientName, year, location, details, imgArray}:WorksDetailsInterface) {
  export default function WorksDetails() {
    const router = useRouter();
    const projectId = router.query.id;
    const [projInfo, setProjInfo] = useState<WorksDetailsInterface>({});
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
      setIsLoading(true);
      // console.log('router.query :', router);
      // console.log('indexProjectData :', indexProjectData);

    setProjInfo({
      clientName: indexProjectData[Number(projectId)].title,
      year: indexProjectData[Number(projectId)].year,
      location: indexProjectData[Number(projectId)].location,
      details: indexProjectData[Number(projectId)].title,
    });
    setIsLoading(false);
  }, []);

  // const projectId = router.query.id;

  // const proj = indexProjectData[Number(projectId)];
  // console.log('proj :', proj);

  // if (router.isFallback) {
  //   return <div>Loading...</div>
  // }

  if (isLoading) return <p>Loading...</p>

  return (
    <div className="worksDetailsMainDiv">
      <div className="worksDetailsLeft">
        <div className="worksDetailsTitle">
          <div>{projInfo.clientName}</div>
        </div>
        <div className="worksDetailsInfo">
          <span>Client</span>
          <span>{projInfo.clientName}</span>
        </div>
        <div className="worksDetailsInfo">
          <span>Year</span>
          <span>{projInfo.year}</span>
        </div>
        <div className="worksDetailsInfo">
          <span>Location</span>
          <span>{projInfo.location}</span>
        </div>
        <div className="worksDetailsInfo">
          <span>Services</span>
          <span>Art Direction, Visual Design, Typography</span>
        </div>
        <div className="worksDetailsText">
          Ricardo Leite is an Amsterdam-based designer and art director, with a
          strong typography passion and identity-driven profile, bringing
          emotion and character into Design. Since 2010, he has worked on global
          projects as art director, designer, and illustrator for arts, culture,
          and advertising clients. Specializing in the development of creative
          strategies and visual concepts for sports, fashion, food, tech, and
          music fields. Design & Art direction as a tool to create visual
          narratives. From local brands to global briefings.
        </div>
      </div>
      <div className="worksDetailsRight">
        <img src="https://via.placeholder.com/700x382" />
        <img src="https://via.placeholder.com/690x378" />
        <img src="https://via.placeholder.com/692x367" />
      </div>
    </div>
  );
}
