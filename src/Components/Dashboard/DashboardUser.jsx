import React from 'react';
import styled from 'styled-components';

const UserNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
`;

const UserNameTitle = styled.h2`
  font-size: 30px;
  color: #000000;
  font-family: 'Cairo', sans-serif;
  font-weight: 700;
`;

const UserNameSubtitle = styled.p`
  font-size: 14px;
  color: #000000;
  font-family: 'Cairo', sans-serif;
  font-weight: 600;
`;

function DashBoardUser() {
  return (
    <UserNameContainer>
      <UserNameTitle>Hello David</UserNameTitle>
      <UserNameSubtitle> Welcome Back!</UserNameSubtitle>
    </UserNameContainer>
  );
}

export default DashBoardUser;
