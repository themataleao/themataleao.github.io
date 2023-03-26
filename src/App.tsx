import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import ThemeProvider from "./theme/ThemeProvider";

const App = () => {
  return (
    <div className="App">
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </div>
  );
};

export default App;
