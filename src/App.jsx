import React from "react";
import NavMenu from "./components/NavMenu/NavMenu";
import NewsData from "./components/NewsData/NewsData";

const App = () => {
  return (
    <div className="App">
      <div className="container mx-auto max-w-screen-xl py-4">
        <NavMenu />
        <NewsData />
      </div>
    </div>
  );
};

export default App;
