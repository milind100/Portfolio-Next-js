"use client";
import React from "react";
import { motion } from "framer-motion";
import "./projects.css";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  const transition = { duration: 2, type: "spring" };

  const projectsData = [
    {
      title: "Recommend Tube",
      desc: "This is platform for creating youtube playlists like spotify and other and can share playlists with custom edit functionality",
      Projimage: "/projects/recomendTube.png",
      link: "https://www.recomendtube.in/",
      github: "https://github.com/milind100/recomendTube-nextJs",
      technology:
        " Next js (full stack) ,Redux toolkit,Axios,Next auth,Youtube Api,Tailwind Css,Mongo Db, Next Routing ,resend email , Vercell ,github",
    },
    {
      title: "Locum Find",
      desc: "Locumfind is platform that connects medical bussinesses with locums have shift creation for locums, payment and chat functionality. ",
      Projimage: "/projects/locumfind.png",
      link: "https://www.locumfind.com.au/",
      github: "",
      technology:
        "React.js, Redux, Material-UI,websocket,Google Search Address API, FullCalendar, React-Datepicker",
    },
    {
      title: "Portfolio Website",
      desc: "Personl port folio website with email api used ",
      Projimage: "/projects/portfoliowebsite.png",
      link: "https://www.locumfind.com.au/",
      github: "https://github.com/milind100/Portfolio-Next-js",
      technology: "Next Js , Tailwind Css",
    },
    {
      title: "Todo list app with graph stats",
      desc: "Todo list App with tasts stat charts and filters and drag and drop functionality",
      Projimage: "/projects/todolist.png",
      // link: "https://www.locumfind.com.au/",
      github: "https://github.com/milind100/Todolist-App-with-Dashboard-main",
      technology: "react js,boostrap,node js , react-chartjs-2 , react dnd",
    },
    {
      title: "Ecommerce Website Template",
      desc: "Personl port folio website with email api used ",
      Projimage: "/projects/ecom.png",
      github: "https://github.com/milind100/ecommercewebsitetemplate",
      technology: "HTML , CSS , Javascript",
    },
  ];

  return (
    <div id="Projects">
      <section id="p_gallery-section">
        <div className="title">
          {/* yahan change hy darkmode ka */}
          <span>Projects</span>
          <span>Here is Our Work Gallery For You </span>
        </div>

        <div className="p_gallery-main">
          <div className="flex flex-col gap-6">
            {projectsData.map((Ele) => {
              const { title, desc, github, Projimage, link, technology } = Ele;
              return (
                <motion.div
                  key={title}
                  className="p_card"
                  initial={{ y: 100 }}
                  whileInView={{ y: 0 }}
                  transition={transition}
                >
                  <div className="w-full max-w-md h-64 ">
                    <Image
                      src={Projimage}
                      alt={`${title} Project Image`}
                      width={500} // Fixed width
                      height={500} // Fixed height
                      className="object-cover rounded-md w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col text-left gap-6">
                    <span className="text-4xl font-bold text-black">
                      {title}
                    </span>
                    <div className="flex flex-col gap-4">
                      <div className="text-xl">{desc}</div>
                      <dvi className="text-lg">
                        <b>Technology:</b>
                        {technology}
                      </dvi>
                      <div className="flex gap-4">
                        {github && (
                          <Link
                            href="www.github.com"
                            className="border-2 bg-orange font-bold  rounded-3xl px-8 py-2 hover:text-orange hover:bg-black"
                          >
                            GitHub
                          </Link>
                        )}
                        {link && (
                          <Link
                            href={link}
                            className="border-2 bg-orange font-bold  rounded-2xl px-8 py-2 hover:text-orange hover:bg-black"
                          >
                            Website
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
