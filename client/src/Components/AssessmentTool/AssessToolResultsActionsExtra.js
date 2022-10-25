import styled from "styled-components";

const AssesstoolResultsActionsExtra = ({ data }) => {
  let listData;
  switch (data.id) {
    case "landlord_behaviour":
      listData = data.list_links;
      break;
    case "home_unlivable":
      listData = data.list_items;
      break;
    default:
  }

  return (
    <Wrapper>
      <Container>
        <p>{data.name}</p>
        {listData.map((item, index) => {
          if (data.id === "landlord_behaviour") {
            return (
              <>
                <p>{item.desc}</p>
                <p>
                  <a href={item.url}>{item.url}</a>
                </p>
              </>
            );
          } else {
            return <li>{item}</li>;
          }
        })}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 5px 0px, rgb(0 0 0 / 10%) 0px 0px 1px 0px;
  border-radius: 5px;
  background-color: #f0f4f7;
  margin: 5px 0;
`;

const Container = styled.div`
  padding: 10px;
`;

export default AssesstoolResultsActionsExtra;
