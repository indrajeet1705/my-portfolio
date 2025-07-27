import React from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Connect from "./Components/Connect";
import Home from "./Components/Home";
import EmailForm from "./Components/EmailForm";

const App = () => {
  return (
    <>
      <div className=" w-full h-screen  ">
        <Navbar></Navbar>
        <div className="">
          {" "}
          <Home></Home>
          <About/>
          <Projects></Projects>
          <Skills></Skills>
          <Connect></Connect>
          <EmailForm></EmailForm>
        </div>
      </div>
    </>
  );
};

export default App;
