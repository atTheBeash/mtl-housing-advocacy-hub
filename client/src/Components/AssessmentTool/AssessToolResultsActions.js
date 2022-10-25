import styled from "styled-components";

import AssesstoolResultsActionsIssues from "./AssessToolResultsActionsIssues";
import AssesstoolResultsActionsExtra from "./AssessToolResultsActionsExtra";

const AssesstoolResultsActions = ({ extraFlags, data }) => {
  console.log("Extra Flags");
  console.log(extraFlags);

  const listLinks = data.issues_supplementary.landlord_behaviour.list_links[0];
  const landlordBehaviour = data.issues_supplementary.landlord_behaviour;
  const homeUnlivable = data.issues_supplementary.home_unlivable;

  let additionInfo = true;
  if (extraFlags.landlordBehaviour === "" && extraFlags.homeUnlivable === "") {
    additionInfo = false;
  }

  return (
    <Wrapper>
      <Title>Important Facts about Your Issues!</Title>
      <MainContainer>
        <Container>
          <SubTitle>Check which primary issue matches yours!</SubTitle>
          <DynamicInfoContainer>
            {data.issues_list.map((item) => {
              return <AssesstoolResultsActionsIssues data={item} />;
            })}
            {additionInfo && (
              <SubTitle>Additional info based on your search:</SubTitle>
            )}
            {extraFlags.landlordBehaviour != "" && (
              <AssesstoolResultsActionsExtra data={landlordBehaviour} />
            )}
            {extraFlags.homeUnlivable != "" && (
              <AssesstoolResultsActionsExtra data={homeUnlivable} />
            )}
          </DynamicInfoContainer>
        </Container>
      </MainContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const MainContainer = styled.div`
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 5px 0px, rgb(0 0 0 / 10%) 0px 0px 1px 0px;
  border-radius: 5px;
  background-color: #dddddd;
`;

const Container = styled.div`
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 5px 0px, rgb(0 0 0 / 10%) 0px 0px 1px 0px;
  border-radius: 5px;

  padding: 20px;
`;

const Title = styled.p`
  font-size: 30px;
  color: #730fc3;
`;

const SubTitle = styled.p`
  font-size: 20px;
  color: #730fc3;
`;

const DynamicInfoContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-evenly;
`;
export default AssesstoolResultsActions;
