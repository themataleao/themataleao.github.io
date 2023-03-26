import React, { CSSProperties, FC } from "react";
import "./FadingGradientBackground.css";

interface FadingGradientBackgroundProps {
  color1: string;
  color2: string;
  color3?: string;
  style?: CSSProperties;
}
const FadingGradientBackground: FC<FadingGradientBackgroundProps> = ({
  color1,
  color2,
  color3,
  style,
}) => {
  let gradientString;
  if (color3 === undefined) {
    gradientString = `linear-gradient(135deg, ${color1}, ${color2})`;
  } else {
    gradientString = `linear-gradient(135deg, ${color1}, ${color2}, ${color3})`;
  }
  const backgroundStyle: CSSProperties = {
    backgroundImage: gradientString,
    minHeight: "100vh",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
    ...style,
  };

  return (
    <div className="fading-gradient" style={backgroundStyle}>
      <div className="fading-gradient-animation"></div>
      <div className="fading-gradient-animation delay-1"></div>
      <div className="fading-gradient-animation delay-2"></div>
    </div>
  );
};

export default FadingGradientBackground;
