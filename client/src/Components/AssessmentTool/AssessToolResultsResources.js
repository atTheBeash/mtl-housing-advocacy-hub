import styled from "styled-components";

import AssessToolResultsResourcesOrgs from "./AssessToolResultsResourcesOrgs";

const AssesstoolResultsResources = ({ data }) => {
  const resultsHA = data.filter((item) => {
    return item.category === "housing_advocacy";
  });

  const resultsLegal = data.filter((item) => {
    return item.category === "legal";
  });

  return (
    <Wrapper>
      <Container>
        <Title>Organizations</Title>
        <DynamicInfoContainer>
          <InfoSection>
            <InfoArea>
              <SubTitle>Housing Advocacy</SubTitle>
              <InfoContent>
                {resultsHA.map((item) => {
                  return <AssessToolResultsResourcesOrgs data={item} />;
                })}
              </InfoContent>
            </InfoArea>
          </InfoSection>
          <InfoSection>
            <InfoArea>
              <SubTitle>Legal Help</SubTitle>
              <InfoContent>
                {resultsLegal.map((item) => {
                  return <AssessToolResultsResourcesOrgs data={item} />;
                })}
              </InfoContent>
            </InfoArea>
          </InfoSection>
        </DynamicInfoContainer>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Container = styled.div``;

const Title = styled.p`
  font-size: 30px;
  color: #730fc3;
`;

const SubTitle = styled.p`
  font-size: 20px;
  color: #730fc3;
`;

const DynamicInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-evenly;
`;
const InfoSection = styled.div`
  width: clamp(300px, 80%, 550px);
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 5px 0px, rgb(0 0 0 / 10%) 0px 0px 1px 0px;
  border-radius: 5px;
  background-color: #dddddd;
  margin: 0 5px;
`;

const InfoArea = styled.div`
  margin: 40px;
`;

const InfoContent = styled.div``;

export default AssesstoolResultsResources;
