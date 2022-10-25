import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <Wrapper>
        <NavigationLink to="/apartment_search">Apartment Search</NavigationLink>
        <NavigationLink to="/lease_signing">Lease Signing</NavigationLink>
        <NavigationLink to="/assessment_tool">Assessment Tool</NavigationLink>
        <NavigationLink to="/moving_out">Moving Out</NavigationLink>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: bold;
  margin: 10px;

  &.active {
    color: #730fc3;
    text-decoration: underline;
  }
`;

export default Navigation;
