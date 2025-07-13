import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const EmailForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const service_id = import.meta.env.VITE_SERVICE_ID;
  const template_id = import.meta.env.VITE_TEMPLATE_ID;
  const public_key = import.meta.env.VITE_PUBLIC_KEY;

  const templateParams = {
    name,
    email,
    to_name: "Indrajeet Bhujbal",
    message,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(service_id, template_id, templateParams, public_key)
      .then((res) => {
        console.log("Email sent successfully", res);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section
      id="connect"
      className="w-full min-h-screen flex flex-col md:flex-row items-center justify-evenly px-4 py-10 "
    >
      <form
        onSubmit={handleSubmit}
        className="p-6 md:p-10 w-full max-w-xl bg-white rounded-xl border shadow-md flex flex-col gap-4"
      >
        <h2 className="text-center text-4xl font-bold text-blue-600 mb-4">
          Get in touch
        </h2>

        <div className="flex flex-col gap-1">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 rounded-md border outline-none text-slate-700 text-sm"
            type="text"
            placeholder="Your Name"
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 rounded-md border outline-none text-slate-700 text-sm"
            type="email"
            placeholder="Your Email"
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="p-2 rounded-md border outline-none text-slate-700 text-sm"
            rows={5}
            placeholder="Your message..."
            required
          />
        </div>

        <button
          type="submit"
          className="self-center mt-2 px-6 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300"
        >
          Send Message
        </button>
      </form>

      <div className="mt-10 md:mt-0 w-full max-w-md bg-white p-6 md:p-10 rounded-xl border shadow-md flex flex-col gap-4">
        <h3 className="text-4xl font-bold text-blue-700 text-center mb-4">
          Socials
        </h3>
        <div className="flex flex-col gap-4 max-h-[400px] overflow-y-auto scroll-smooth">
          {[
            { name: "GitHub", src: "/github.png", link: "https://github.com" },
            {
              name: "LinkedIn",
              src: "/linkdinlogo.png",
              link: "https://linkedin.com",
            },
            {
              name: "Instagram",
              src: "/insta.jpg",
              link: "https://instagram.com",
            },
            {
              name: "LeetCode",
              src: "/leetcode.png",
              link: "https://leetcode.com",
            },
            {
              name: "HackerRank",
              src: "/HackerRank.png",
              link: "https://hackerrank.com",
            },
          ].map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-3 bg-slate-100 rounded-xl hover:bg-blue-100 transition duration-300"
            >
              <img
                src={social.src}
                alt={social.name}
                className="h-12 w-12 rounded-full object-cover"
              />
              <span className="text-lg font-medium text-blue-700">
                {social.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmailForm;
