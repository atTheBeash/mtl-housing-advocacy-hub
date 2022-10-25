import styled from "styled-components";

const AssesstoolResultsActionsIssues = ({ data }) => {
  const relevantLink = data.links_relevant[0];
  return (
    <Wrapper>
      <Container>
        <p>PRIMARY ISSUE: {data.name}</p>
        <p>{data.desc}</p>
        <p>
          See this link for more info: <a href={relevantLink}>{relevantLink}</a>
        </p>
        <p>Civil Codes:</p>
        <ul>
          {data.civil_codes.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 5px 0px, rgb(0 0 0 / 10%) 0px 0px 1px 0px;
  border-radius: 5px;
  background-color: #f0f4f7;
  margin: 10px auto;
`;

const Container = styled.div`
  padding: 10px;
`;

export default AssesstoolResultsActionsIssues;
