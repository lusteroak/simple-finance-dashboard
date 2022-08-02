import React from 'react';
import styled from 'styled-components';
import { DashboardDetailedData } from './DashboardDetailedData';

const DetailedLayout = styled.div`
  display: grid;
  grid-template-columns: 200px 200px;
  grid-template-rows: 150px;
  grid-gap: 100px;
  justify-content: space-around;
  margin-top: 50px;
  margin-left: 0px;
`;

const DetailedElement = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 200px;
  width: 300px;
  background: #ffe5e9;
  border-radius: 15px;
`;

const InsideElementContainer = styled.div`
  padding: 10px;
`;


const TypeElement = styled.h3`
  font-size: 18px;
  color: black;
  font-family: 'Cairo', sans-serif;
  font-weight: 600;
`;

const TextDetailElement = styled.h3`
  font-size: 16px;
  color: gray;
  font-family: 'Cairo', sans-serif;
  font-weight: 600;
`;

const ProfitNumberElement = styled.h3`
  font-size: 18px;
  color: black;
  font-family: 'Cairo', sans-serif;
  font-weight: 700;
  
`;

const PercentNumberElement = styled.div`
  display:flex;
  font-size: 16px;
  color: black;
  font-family: 'Cairo', sans-serif;
  font-weight: 800;
  padding-top: 50px;
  width: 5rem;
  height: 5rem;
  background-color: #fff;
  border-radius: 50%;
  justify-content: center;
`;

const PercentNumberElementInternal = styled.h3`
  display:flex;
  justify-content: center;
`;


function DashboardDetailed() {
  return (
    <DetailedLayout>
      
      {DashboardDetailedData.map(
          ({ type, text_detail, number, percent }) => (
            <DetailedElement>
              <InsideElementContainer> 
                <TypeElement>{type}</TypeElement>
              <TextDetailElement>{text_detail}</TextDetailElement>
               
                <ProfitNumberElement>${number}</ProfitNumberElement>
              
              
              </InsideElementContainer>
              
              <PercentNumberElement>
              <PercentNumberElementInternal>
              {percent}%
              </PercentNumberElementInternal>
              </PercentNumberElement>
              
            </DetailedElement>
          )
        )}
    </DetailedLayout>
  );
}

export default DashboardDetailed;
