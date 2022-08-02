import styled from 'styled-components';
import DashBoardUser from './DashboardUser';
import DashboardResume from './DashboardResume';
import DashboardDetailed from './DashboardDetailed';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function Dashboard() {
  return (
    <MainContainer>
      <DashBoardUser />
      <DashboardResume />
      <DashboardDetailed />
    </MainContainer>
  );
}

export default Dashboard;
