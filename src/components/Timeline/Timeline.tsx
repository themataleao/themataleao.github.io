import React, { FC } from "react";
import TimelineItem from "../TimelineItem/TimelineItem";
import "./Timeline.css";
import { IPropsTimelineDataItem } from "../../types/global";

interface TimelineProps {
  timelineData: IPropsTimelineDataItem[];
  width?: string;
  titleX: string;
}

const Timeline: FC<TimelineProps> = ({ timelineData, width, titleX }) => {
  return (
    <div className="timeline" style={{ width: width }}>
      <h1>{titleX}</h1>
      {timelineData.map((item) => (
        <TimelineItem item={item} key={item.description} />
      ))}
    </div>
  );
};

export default Timeline;
