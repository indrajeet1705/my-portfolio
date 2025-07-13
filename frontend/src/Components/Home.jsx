import React from "react";

const Home = () => {
  return (
    <div className="w-full" id="home">
      {/* Top Spacer */}
      <div className="h-[10vh] w-full" />

      {/* Main Content */}
      <div className="flex flex-wrap justify-evenly items-center h-[90vh] px-6 md:px-16">
        {/* Text Section */}
        <div className="max-w-xl text-center md:text-left p-6">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 leading-snug">
            Full Stack Developer specializing in building <br />
            end-to-end web applications <br />
            using the <span className="text-blue-800">MERN stack.</span>
          </h1>
        </div>

        {/* Profile Image */}
        <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden shadow-xl shadow-blue-400 transition-transform transform hover:scale-105 duration-500">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
