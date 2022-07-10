import React from 'react';
import { FaEye } from 'react-icons/fa';
import styled from 'styled-components';

const MainCardLayout = styled.div``;

const MainCardinternalLayout = styled.div`
  display: flex;
`;

function DashboardResume() {
  return (
    <MainCardLayout>
      <MainCardinternalLayout>
        <FaEye></FaEye>
      </MainCardinternalLayout>
    </MainCardLayout>
  );
}

export default DashboardResume;
