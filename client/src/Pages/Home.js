import styled from "styled-components";

import BoxTopLevel from "../Components/EducateSelf/BoxTopLevel";

const Home = () => {
  const firstSteps = {
    name: "First Steps",
    desc: "Simple steps you can do on your own to help you feel grounded",
  };
  const nextSteps = {
    name: "Next Steps",
    desc: "Dive in and get proactive with our checklists.",
  };
  const getPrepared = {
    name: "Get Prepared",
    desc: "Need informed input? Great, then let's get your prepared to reach out for help.",
  };
  const accessHelp = {
    name: "Access Help",
    desc: "Reach out to public resources to find short and long term solutions.",
  };

  return (
    <Wrapper>
      <Title>Educate Yourself</Title>
      <SubTitle>We're here to help you help yourself</SubTitle>
      <SubTitle>Find your rights and resources when you need them.</SubTitle>
      <SubTitle>You can follow the DIY steps if you're shy, and Get Help when you need to get serious!</SubTitle>
      <Boxes>
        <Box>
          <ColumnTitle>Do It Yourself</ColumnTitle>
        </Box>
        <Box>
          <ColumnTitle>Get Help</ColumnTitle>
        </Box>
        <Box>
          <BoxTopLevel steps={firstSteps} />
        </Box>
        <Box>
          <BoxTopLevel steps={getPrepared} />
        </Box>
        <Box>
          <BoxTopLevel steps={nextSteps} />
        </Box>
        <Box>
          <BoxTopLevel steps={accessHelp} />
        </Box>
      </Boxes>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 30px;
  color: #730fc3;
  `;

const SubTitle = styled.h2`
font-size: 20px;
  color: #730fc3;
  margin: 5px auto;
`;

const ColumnTitles = styled.div`
  display: flex;
  flex-direction: row;
`;

const ColumnTitle = styled.h3`
  color: #730fc3;
`;

const Boxes = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 50px auto;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  flex: 50%;
  margin-bottom: 30px;
`;

export default Home;
