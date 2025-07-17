import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [toggelMenue,setToggleMenue]= useState(false)
  console.log(toggelMenue)
  return (
    <>
      <nav className="w-full hidden md:flex fixed top-0 z-40  justify-center">
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
      <div className=" flex w-full h-[50px]  justify-end items-center ">
        <IoMenu onClick={()=>setToggleMenue(prev=>!prev)} size='40px' color="blue" />
      </div>
      {
        toggelMenue ? <>
        <div className=" w-full h-[200px] bg-slate-200 fixed transition-all duration-500  ">
          <ul className=" flex flex-col items-center gap-5 p-4 text-lg font-semibold text-slate-600 ">
            <li className="hover:text-blue-400">Home</li>
            <li className=" hover:text-blue-400 transition-all duration-150">Projects</li>
            <li className=" hover:text-blue-400 transition-all duration-150">Skills</li>
            <li className=" hover:text-blue-400 transition-all duration-150">Contact</li>
          </ul>
        </div>
        </>:''
      }
    </>
  );
};

export default Navbar;
