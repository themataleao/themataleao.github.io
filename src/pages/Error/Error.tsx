import React from "react";
import FadingGradientBackground from "../../components/FadingGradientBackground/FadingGradientBackground";
import { useRouteError } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../theme/ThemeProvider";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  const theme = useTheme();
  console.error(error);
  return (
    <>
      <FadingGradientBackground color1="#ff0000" color2="#3333cc" />
      <div style={{ textAlign: "center", paddingTop: "5%" }}>
        <h1
          style={{ fontSize: theme.sizes.xxxlarge, color: theme.colors.text }}
        >
          Oops! 🤖
        </h1>
        <h2 style={{ fontSize: theme.sizes.xlarge, color: theme.colors.text }}>
          Error 404: Page Not Found
        </h2>
        <p
          style={{
            fontSize: theme.sizes.mediumLarge,
            color: theme.colors.text,
          }}
        >
          Looks like you've stumbled upon a missing semicolon that caused a
          total meltdown. 🚀
          <br />
          Don't worry, a caffeinated engineer is already on the case! ☕️
          <br />
          In the meantime, feel free to teleport back to safety by clicking the
          button below. 🌌
        </p>
        <button
          style={{
            fontSize: theme.sizes.medium,
            padding: "10px 20px",
            borderRadius: theme.radius.medium,
            background: "white",
            color: "black",
          }}
          onClick={() => navigate("/")}
        >
          Beam Me Up, Scotty!
        </button>
      </div>
    </>
  );
};

export default ErrorPage;
