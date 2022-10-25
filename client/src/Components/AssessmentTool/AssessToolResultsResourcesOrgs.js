import styled from "styled-components";

const AssesstoolResultsResourcesOrgs = ({ data }) => {
  return (
    <Wrapper>
      <Container>
        <p>{data.name}</p>
        {data.contact.map((item) => {
          let contactType;
          let contactValue;
          if (item.url) {
            contactType = "URL";
            contactValue = <a href={item.url}>{item.url}</a>;
          } else {
            contactType = "Phone";
            contactValue = item.phone;
          }
          return (
            <p>
              {contactType}: {contactValue}
            </p>
          );
        })}
        <p>{data.desc}</p>
        <p>Requirements: {data.requirements}</p>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 5px 0px, rgb(0 0 0 / 10%) 0px 0px 1px 0px;
  border-radius: 5px;
  margin: 10px auto;

  background-color: #f0f4f7;
`;

const Container = styled.div`
  padding: 10px;
`;

export default AssesstoolResultsResourcesOrgs;
