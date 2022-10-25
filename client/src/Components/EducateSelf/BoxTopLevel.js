import styled from "styled-components";

const BoxTopLevel = ({ steps, setListDisplay }) => {
  const btnChecklist = <Button onClick={setListDisplay}>Checklist</Button>;

  return (
    <Area>
      <Content>
        <RowName>{steps.name}</RowName>
        <BoxHeader>{steps.desc}</BoxHeader>
        <ul>
          {steps.list_items &&
            steps.list_items.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
        </ul>
        {steps.checklist && btnChecklist}
      </Content>
    </Area>
  );
};

const Area = styled.div`
  width: clamp(600px, 40%, 800px);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f0f4f7;
`;

const Content = styled.div`
  margin: 20px;
`;

const RowName = styled.h4``;

const BoxHeader = styled.p``;

const Button = styled.button`
  margin: 20px auto;
  display: inline-block;
  outline: 0;
  cursor: pointer;
  padding: 5px 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  vertical-align: middle;
  border: 1px solid;
  border-radius: 6px;
  color: #ffffff;
  background-color: #2ea44f;
  border-color: #1b1f2326;
  box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px 0px,
    rgba(255, 255, 255, 0.25) 0px 1px 0px 0px inset;
  &.active {
    background-color: #2c974b;
    border-color: #1b1f2326;
  }
`;

export default BoxTopLevel;
