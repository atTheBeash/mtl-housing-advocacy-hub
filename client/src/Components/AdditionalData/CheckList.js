import styled from "styled-components";

const CheckList = ({ checkList }) => {
  return (
    <Area>
      <Content>
        <RowName>{checkList.name}</RowName>
        <form>
          {checkList.list_items.map((item, index) => {
            return (
              <>
                <div>
                  <input type="checkbox" /> {item}
                </div>
              </>
            );
          })}
        </form>
      </Content>
    </Area>
  );
};

const Area = styled.div`
  width: clamp(600px, 80%, 900px);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #f0f4f7;
  margin-bottom: 50px;
`;

const Content = styled.div`
  margin: 20px;
`;

const RowName = styled.h4``;

export default CheckList;
