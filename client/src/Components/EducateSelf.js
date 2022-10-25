import React, { useState } from "react";
import styled from "styled-components";

import BoxTopLevel from "./EducateSelf/BoxTopLevel";
import CheckList from "./AdditionalData/CheckList";

const EducateSelf = ({ stepData, step, stepsDIY, stepsHelp }) => {
  const [checkList, setCheckList] = useState(false);

  const toggleList = () => {
    setCheckList(!checkList);
  };
  return (
    <Wrapper>
      <Title>Educate Yourself</Title>
      <Boxes>
        <Box>
          <ColumnTitle>Do It Yourself</ColumnTitle>
        </Box>
        <Box>
          <ColumnTitle>Get Help</ColumnTitle>
        </Box>
        <Box>
          <BoxTopLevel steps={stepsDIY.first_steps} />
        </Box>
        <Box>
          <BoxTopLevel steps={stepsHelp.get_prepared} />
        </Box>
        <Box>
          <BoxTopLevel
            steps={stepsDIY.next_steps}
            setListDisplay={toggleList}
          />
        </Box>
        <Box>
          <BoxTopLevel steps={stepsHelp.access_help} />
        </Box>
      </Boxes>
      {checkList && <CheckList checkList={stepsDIY.next_steps.checklist} />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  color: #730fc3;
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
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  flex: 50%;
  margin-bottom: 30px;
`;

export default EducateSelf;
