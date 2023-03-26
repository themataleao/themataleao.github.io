import React from "react";
import "./Main.css";
import Timeline from "../../components/Timeline/Timeline";
import timelineData from "../../data/timeline";

const Main = () => {
  return (
    <div className="Main">
      <main>
        <Timeline timelineData={timelineData}></Timeline>
      </main>
    </div>
  );
};

export default Main;
