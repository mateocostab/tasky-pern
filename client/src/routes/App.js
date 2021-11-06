import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Global } from "@emotion/react";

import { Home } from "../components/Home";

import { GlobalStyles } from "../styles/GlobalStyles";

function App() {
  return (
    <>
      <Router>
        <Global styles={GlobalStyles} />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
