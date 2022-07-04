import React from "react";
import styled from "styled-components";

const UserContainer = styled.div`
  width: 125px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StatusCircle = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: green;
  border: 2px solid white;
`;

const LoggedText = styled.h3`
  font-size: 16px;
  font-family: "Cairo", sans-serif;
  font-weight: 700;
`;

function SideBarNavigationUser(props) {
  return (
    <UserContainer>
      <LoggedText>Logged as {props.name}</LoggedText>
      <StatusCircle></StatusCircle>
    </UserContainer>
  );
}

export default SideBarNavigationUser;
