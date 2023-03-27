import MainTitle from "@/components/MainTitle/MainTitle";
import WorksBlock from "@/components/WorksBlock/WorksBlock";
import React from "react";

export default function Works() {
  return (
    <>
      <MainTitle />
      <div className="worksMainDiv">
        <WorksBlock/>
        <WorksBlock/>
        <WorksBlock/>
      </div>
    </>
  );
}
