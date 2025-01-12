import React from "react";
import "./Atimeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaLine, FaBriefcase } from "react-icons/fa";

function Atimeline() {
  const workData = [
    {
      org: "Freelance WebDeveloper",
      date: "Current",
      role: "FullStack Next JS Developer",
    },

    {
      org: "Logwin Infotech , Surat",
      date: "octomber 2024 - December 2024",
      role: "Next JS Developer",
      desc: "Worked As Next Developer Web Apps ,Involved in client communcation and team collaboration of remote places",
    },
    {
      org: "Tagline Infotech , Surat",
      date: "june 2023 - september 2024",
      role: "React JS Developer",
      desc: "Worked on developing Web Apps and collborated with team and delivered effective products",
    },
  ];

  const educationData = [
    {
      org: "SSBT collage of engineering Jalgaon,Maharashtra",
      Data: "2016 - 2020",
      role: "Bachelora of Engineering Computer science",
      desc: "(7.3 CGPA)",
    },
    {
      org: "SEM English medium school, surat , Gujarat",
      Data: "2015",
      role: "HSC Gujarat State Board of Education (70%)",
      desc: "",
    },
    {
      org: "Nagar Prathamik school ,Surat ,Gujarat",
      Data: "2013",
      role: "SSC Gujarat State Board of Education (70%)",
      desc: "",
    },
  ];

  return (
    <VerticalTimeline>
      {[...workData, ...educationData]?.map(
        ({ org, date, role, desc }, index) => {
          const contentStyle = {
            background: "#fd7e14",
            color: "#000",
          };
          const contentArrowStyle = {
            borderRight: "7px solid  rgb(33, 150, 243)",
          };
          return (
            <VerticalTimelineElement
              key={org}
              className="vertical-timeline-element--work"
              date={date}
              {...(index === 0 && { contentStyle, contentArrowStyle })}
              iconStyle={{ background: "#fd7e14", color: "#000" }}
              icon={<FaBriefcase />}
            >
              <h1 className="vertical-timeline-element-title">{org}</h1>
              <h2 className="vertical-timeline-element-subtitle">{role}</h2>
              <p>{desc}</p>
            </VerticalTimelineElement>
          );
        }
      )}

      <VerticalTimelineElement
        iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
        icon={<FaLine />}
      />
    </VerticalTimeline>
  );
}

export default Atimeline;
