import styled from 'styled-components';
import DashBoardUser from './DashboardUser';
import DashboardResume from './DashboardResume';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function Dashboard() {
  return (
    <MainContainer>
      <DashBoardUser />
      <DashboardResume />
    </MainContainer>
  );
}

export default Dashboard;
