import React from "react";
import "./Atimeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaLine, FaBriefcase } from "react-icons/fa";
import { educationData, workData } from "@/constants/about.desc";

function Atimeline() {
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
