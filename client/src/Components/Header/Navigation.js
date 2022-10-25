import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <Wrapper>
        <NavigationLink to="/apartment_search">Apartment Search</NavigationLink>
        <NavigationLink to="/lease_signing">Lease Signing & Moving In</NavigationLink>
        <NavigationLink to="/assessment_tool">Home Issues (Assessment Tool)</NavigationLink>
        <NavigationLink to="/moving_out">Evictions, Repossessions, Moving Out</NavigationLink>
        <NavigationLink to="/post_move">Post Move</NavigationLink>
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
