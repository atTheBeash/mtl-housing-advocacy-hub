import styled from "styled-components";

const AssesstoolResultsCriteria = ({ data }) => {
  let borough = "NDG";
  switch (data.borough) {
    case "ndg":
      borough = "NDG";
      break;
    case "sthenri":
      borough = "St. Henri";
      break;
    case "verdun":
      borough = "Verdun";
      break;
    default:
  }

  let issue = "Maintenance & repairs";
  switch (data.borough) {
    case "maintenance_repairs":
      issue = "Maintenance & repairs";
      break;
    case "feeling_unsafe":
      issue = "Feeling unsafe at home ";
      break;
    case "formal_notices":
      issue = "You received a formal notice from your landlord";
      break;
    default:
  }

  return (
    <Wrapper>
      <Container>
        <Title>Recap!</Title>
        <DynamicInfoContainer>
          <InfoSection>
            <InfoContent>
              <SubTitle>Your personal status:</SubTitle>
              <ul>
                <Item>You live in {borough}</Item>
                {data.studentConcordia && (
                  <Item>You are a Concordia student</Item>
                )}
                {data.lowIncome && <Item>You are considered low income</Item>}
              </ul>
            </InfoContent>
          </InfoSection>
          <InfoSection>
            <InfoContent>
              <SubTitle>Your current situation:</SubTitle>
              <ul>
                <Item>Your issue: {issue}</Item>
                {data.landlordBehaviour && (
                  <Item>Your landlord is not being helpful</Item>
                )}
                {data.homeUnlivable && (
                  <Item>You can not live in your home</Item>
                )}
              </ul>
            </InfoContent>
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
  align-items: stretch;
  justify-content: space-evenly;
`;
const InfoSection = styled.div`
  width: clamp(300px, 80%, 450px);
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 5px 0px, rgb(0 0 0 / 10%) 0px 0px 1px 0px;
  border-radius: 5px;
  background-color: #f0f4f7;
  margin: 0 5px;
`;

const InfoContent = styled.div`
  margin: 40px;
`;

const Item = styled.li`
  margin: 10px 0;
`;

export default AssesstoolResultsCriteria;
