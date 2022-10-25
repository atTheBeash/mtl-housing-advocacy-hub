import styled from "styled-components";

import Navigation from "../Components/Header/Navigation";
import MainLogo from "../Assets/Logo.png";

const Header = () => {
  return (
    <Wrapper>
      <Title>Montreal Housing Advocacy Hub</Title>
      <TitleSub>Made by tenants from a housing crisis</TitleSub>
      <Logo src={MainLogo} alt="Logo Abandoned Home" />
      <Navigation />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  color: #730fc3;
`;

const TitleSub = styled.p`
  color: #730fc3;
  margin: 0 auto;
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
  margin: 20px auto;
`;
export default Header;
