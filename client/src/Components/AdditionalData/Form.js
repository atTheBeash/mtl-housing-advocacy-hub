import styled from "styled-components";

const Form = ({ formData, handleChange, handleSubmit, formReset }) => {
  return (
    <Wrapper>
      <MainContainer>
        <Container>
          <Button onClick={formReset}>Reset Form</Button>

          <form onSubmit={handleSubmit}>
            <FormArea>
              <div>
                <div>
                  <label htmlFor="borough">Select your borough </label>
                  <select
                    value={formData.borough}
                    onChange={(e) => handleChange(e.target.value, "borough")}
                  >
                    <option value="ndg">NDG</option>
                    <option value="sthenri">St. Henri</option>
                    <option value="verdun">Verdun</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="studentConcordia">
                    Are you a Concordia Student?
                  </label>
                  <select
                    value={formData.studentConcordia}
                    onChange={(e) =>
                      handleChange(e.target.value, "studentConcordia")
                    }
                  >
                    <option value="concordia">Yes</option>
                    <option value="">No</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="lowIncome">
                    Are you a low income household?{" "}
                  </label>
                  <select
                    value={formData.lowIncome}
                    onChange={(e) => handleChange(e.target.value, "lowIncome")}
                  >
                    <option value="low_income">Yes</option>
                    <option value="">No</option>
                  </select>
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor="issue">What is your issue? </label>
                  <select
                    value={formData.issue}
                    onChange={(e) => handleChange(e.target.value, "issue")}
                  >
                    <option value="maintenance_repairs">
                      Maintenance + Repairs
                    </option>
                    <option value="feeling_unsafe">
                      Feeling unsafe at home
                    </option>
                    <option value="formal_notices">
                      You received a formal notice from your landlordlarge
                    </option>
                  </select>
                </div>
                <div>
                  <label htmlFor="landlordBehaviour">
                    Is your landlord being difficult?
                  </label>
                  <select
                    value={formData.landlordBehaviour}
                    onChange={(e) =>
                      handleChange(e.target.value, "landlordBehaviour")
                    }
                  >
                    <option value="landlord_behaviour">Yes</option>
                    <option value="">No</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="homeUnlivable">
                    Is your home unlivable?{" "}
                  </label>
                  <select
                    value={formData.homeUnlivable}
                    onChange={(e) =>
                      handleChange(e.target.value, "homeUnlivable")
                    }
                  >
                    <option value="home_unlivable">Yes</option>
                    <option value="">No</option>
                  </select>
                </div>
              </div>
              <Button>Submit!!!</Button>
            </FormArea>
          </form>
        </Container>
      </MainContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: clamp(600px, 80%, 900px);
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 5px 0px, rgb(0 0 0 / 10%) 0px 0px 1px 0px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #d1efec;
  margin: 10px auto;
`;

const MainContainer = styled.div`
  background-color: #f0f4f7;
  width: clamp(500px, 70%, 800px);
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 5px 0px, rgb(0 0 0 / 10%) 0px 0px 1px 0px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

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

export default Form;
