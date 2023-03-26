import React from "react";
import "./Main.css";
import Timeline from "../../components/Timeline/Timeline";
import timelineData from "../../data/timeline";

interface MainProps {
  responsive: boolean;
}

const Main = ({ responsive }: MainProps) => {
  return (
    <div className="Main">
      <Timeline
        timelineData={timelineData}
        width={responsive ? "90%" : "60%"}
      ></Timeline>
    </div>
  );
};

export default Main;
