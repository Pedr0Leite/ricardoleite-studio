import MainTitle from "@/components/MainTitle/MainTitle";
import React from "react";

export default function Works() {
  return (
    <>
      <MainTitle />
      <div className="worksMainDiv">
        <div className="worksGrid">
          <div className="worksRowBlock1">
            <div className="worksBlock1">
              <img src="https://via.placeholder.com/710x810" />
            </div>
            <div className="worksBlock2">
              <div className="figure">
                <p>
                  <img src="https://via.placeholder.com/454x255" />
                </p>
                <p><span>Altava</span><span>ART DIRECTION, DESIGN, ILLUSTRATION</span></p>
              </div>
              <div className="figure">
                <p>
                <img src="https://via.placeholder.com/414x414" />
                </p>
                <p><span>Altava</span><span>ART DIRECTION, DESIGN, ILLUSTRATION</span></p>
              </div>
            </div>
          </div>
          <div className="worksRowBlock2">
            <img src="https://via.placeholder.com/336x336" />
            <img src="https://via.placeholder.com/394x220" />
            <img src="https://via.placeholder.com/395x500" />
          </div>
          <div className="worksRowBlock3">
            <img src="https://via.placeholder.com/1361x766" />
          </div>
        </div>
      </div>
    </>
  );
}
