import React from "react";
import "./Home.css";
import FadingGradientBackground from "../../components/FadingGradientBackground/FadingGradientBackground";
import { useTheme } from "../../theme/ThemeProvider";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";

const Home = () => {
  const theme = useTheme();
  return (
    <div className="root">
      <FadingGradientBackground
        color1={theme.colors.gradient.first}
        color2={theme.colors.gradient.second}
        color3={theme.colors.gradient.third}
      />
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
};

export default Home;
