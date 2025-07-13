import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 z-40 flex justify-center">
      <ul
        className="bg-blue-500 text-white font-semibold flex gap-8 px-8 py-3 mt-2 rounded-2xl shadow-lg backdrop-blur-md bg-opacity-90"
        aria-label="Main navigation"
      >
        <li>
          <a
            href="#home"
            className="hover:text-black transition-colors duration-300"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="hover:text-black transition-colors duration-300"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="hover:text-black transition-colors duration-300"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#connect"
            className="hover:text-black transition-colors duration-300"
          >
            Connect
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
