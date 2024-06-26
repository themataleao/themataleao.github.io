import React from "react";
import "./Main.css";
import Timeline from "../../components/Timeline/Timeline";
import timelineData from "../../data/timeline";
import eductationData from "../../data/education";
import educationData from "../../data/education";
import Publications from "../Publications/Publications";

interface MainProps {
  responsive: boolean;
}

const Main = ({ responsive }: MainProps) => {
  return (
    <div className="Main">
      <Timeline
        key={"work"}
        titleX="Work"
        timelineData={timelineData}
        width={responsive ? "90%" : "70%"}
      ></Timeline>
      <Timeline
        key={"education"}
        titleX="Education"
        timelineData={educationData}
        width={responsive ? "90%" : "70%"}
      ></Timeline>
      <Publications width={responsive ? "90%" : "70%"}></Publications>
    </div>
  );
};

export default Main;
