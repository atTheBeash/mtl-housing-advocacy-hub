import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Step from "./Step";
import Header from "../Components/Header";

const App = () => {
  return (
    <>
      <Router>
        <Wrapper>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:step" element={<Step />} />
            <Route path="" element={<h1>404: Oops!</h1>} />
          </Routes>
        </Wrapper>
      </Router>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
