import React from 'react';
import styled from 'styled-components';
import { DashboardResumeData } from './DashboardResumeData';

const MainCardLayout = styled.div`
  display: flex;
  justify-content: center;
`;

const MainCardinternalLayout = styled.div`
  display: flex;
  width: 50rem;
  height: 10rem;
  justify-content: space-between;
  padding: 30px;
  gap: 50px;
  padding: 30px;
  background-color: #dfdfdf;
  border-radius: 20px;
`;

const DivHelper = styled.div`
  width: 50px;
`;

const Icon = styled.h3``;

const Text = styled.h3`
  font-size: 12px;
  color: gray;
  font-family: 'Cairo', sans-serif;
  font-weight: 600;
`;

const Number = styled.h1`
  font-size: 16px;
  color: #000000;
  font-family: 'Cairo', sans-serif;
  font-weight: 700;
`;

const CardInternal = styled.div``;

function DashboardResume() {
  return (
    <MainCardLayout>
      <DivHelper></DivHelper>
      <MainCardinternalLayout>
        {DashboardResumeData.map(
          ({ icon, text_detail, number, text_frequency }) => (
            <CardInternal>
              <Icon>{icon}</Icon>
              <Text>{text_detail}</Text>
              <Number>{number}</Number>
              <Text>{text_frequency}</Text>
            </CardInternal>
          )
        )}
      </MainCardinternalLayout>
    </MainCardLayout>
  );
}

export default DashboardResume;
