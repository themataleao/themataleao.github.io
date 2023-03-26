import React, { FC, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./TimelineItem.css";
import TimelineBulletpoint from "../TimelineBulletpoint/TimelineBulletpoint";
import { IPropsTimelineDataItem } from "../../types/global";

function TimelineItem({ item }: { item: IPropsTimelineDataItem }) {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className="timeline-item"
      style={{
        display: "flex",
        width: "60%",
        alignItems: "center",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "none" : "translateY(20px)",
        transition: "opacity 0.5s, transform 0.5s",
      }}
    >
      <div style={{ width: "10%" }}>
        <TimelineBulletpoint yearFrom={item.yearFrom} yearTo={item.yearTo} />
      </div>
      <div style={{ width: "80%" }}>
        <h3>{item.title}</h3>
        <h4>
          {item.location} @ {item.company}
        </h4>
        <p>{item.description}</p>
      </div>
      <div style={{ width: "10%" }}></div>
    </div>
  );
}

export default TimelineItem;
