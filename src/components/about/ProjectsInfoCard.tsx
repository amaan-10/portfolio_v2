import Link from "next/link";
import React from "react";

const ProjectsInfoCard = () => {
  return (
    <>
      <div id="container">
        <Link href="/projects">
          <button className="learn-more">
            <span
              className="circle border-[3px] border-solid border-black"
              aria-hidden="true"
            >
              <span className="icon arrow" />
            </span>
            <span className="button-text">MY WORK</span>
          </button>
        </Link>
      </div>
    </>
  );
};

export default ProjectsInfoCard;
