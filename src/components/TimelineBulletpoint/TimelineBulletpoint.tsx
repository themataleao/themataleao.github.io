import { FC } from "react";
import "./TimelineBulletpoint.css";

interface TimelineBulletpointProps {
  yearFrom: string;
  yearTo: string;
}

const TimelineBulletpoint: FC<TimelineBulletpointProps> = ({
  yearFrom,
  yearTo,
}) => {
  const yearToSplit = yearTo.split("/");
  let yearToString;
  if (yearToSplit[0] === "Present") {
    yearToString = "Present";
  } else {
    yearToString = yearToSplit[0] + "\n" + yearToSplit[1];
  }
  return (
    <div className="timeline-bulletpoint-container">
      <div className="bullet-point">
        <span className="year">{yearToString}</span>
      </div>
      <div className="bulletpoint-connector"></div>
      <div className="bullet-point-start">
        <span className="year">
          {yearFrom.split("/")[0] + "\n" + yearFrom.split("/")[1]}
        </span>
      </div>
    </div>
  );
};

export default TimelineBulletpoint;
