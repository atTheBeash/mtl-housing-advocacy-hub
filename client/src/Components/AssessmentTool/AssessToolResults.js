import styled from "styled-components";

import { FiLoader } from "react-icons/fi";

import AssessToolResultsCriteria from "../AssessmentTool/AssessToolResultsCriteria";
import AssessToolResultsResources from "../AssessmentTool/AssessToolResultsResources";
import AssessToolResultsActions from "../AssessmentTool/AssessToolResultsActions";

const AssesstoolResults = ({ formData, resourceData, actionData }) => {
  let renderAssessToolResultsResources;
  !resourceData
    ? (renderAssessToolResultsResources = (
        <LoadingWraper>
          <FiLoader size="48" />
        </LoadingWraper>
      ))
    : (renderAssessToolResultsResources = (
        <AssessToolResultsResources data={resourceData} />
      ));

  let renderAssessToolResultsActions;
  !actionData
    ? (renderAssessToolResultsActions = (
        <LoadingWraper>
          <FiLoader size="48" />
        </LoadingWraper>
      ))
    : (renderAssessToolResultsActions = (
        <AssessToolResultsActions
          extraFlags={{
            landlordBehaviour: formData.landlordBehaviour,
            homeUnlivable: formData.homeUnlivable,
          }}
          data={actionData}
        />
      ));

  return (
    <Wrapper>
      <Container>
        <AssessToolResultsCriteria data={formData} />
        {renderAssessToolResultsResources}
        {renderAssessToolResultsActions}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: clamp(600px, 80%, 1200px);
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 5px 0px, rgb(0 0 0 / 10%) 0px 0px 1px 0px;
  border-radius: 5px;
  background-color: #d1efec;
`;

const Container = styled.div`
  margin: 40px;
`;

const LoadingWraper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export default AssesstoolResults;
