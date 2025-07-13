import React from "react";

const ProjectCard = ({ item }) => {
  return (
    <div className="w-[400px] h-[500px] rounded-2xl shadow-xl shadow-blue-400  bg-white overflow-hidden flex flex-col transition-transform duration-500 transform hover:scale-105">
      <div className="h-[300px] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>

      <div className="p-4 font-semibold text-blue-700 flex flex-col gap-2">
        <p className="text-xl">{item.name}</p>
        <p className="text-purple-700">
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-purple-500 transition"
          >
            View Project
          </a>
        </p>
        <p className="text-gray-600 text-sm font-normal">{item.discription}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
