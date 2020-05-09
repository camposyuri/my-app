import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header/";
import Routes from "./routes";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes />
      </Router>
    </div>
  );
};

export default App;
