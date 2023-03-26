import React from "react";
import "./Header.css";
import imageMarc from "../../assets/marc_willhaus.png";
import { useTheme } from "../../theme/ThemeProvider";
import personInfo from "../../data/personInfo";

interface HeaderProps {
  responsive: boolean;
}

const Header = ({ responsive }: HeaderProps) => {
  const theme = useTheme();
  return (
    <div className="Header">
      <header>
        <div
          style={{
            alignContent: "center",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
            paddingTop: theme.paddings.xxlarge,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={imageMarc}
              style={{
                width: 200,
                height: "auto",
              }}
            ></img>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "center",
              width: responsive ? "80%" : "50%",
            }}
          >
            <h1>Marc Willhaus</h1>
            <h2>Short Intro</h2>
            <p>{personInfo.description}</p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
