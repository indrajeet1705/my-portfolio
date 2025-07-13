import React from "react";
import ProjectCard from "./ProjectCard";
import assets from "../assets/assets";

const Projects = () => {
  return (
    <section id="projects" className="w-full py-16">
      <h2 className="text-center text-4xl md:text-5xl font-bold text-blue-500 mb-12">
        Projects
      </h2>

      <div className="w-[90vw] max-w-7xl mx-auto grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
        {assets.map((item, index) => (
          <ProjectCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
