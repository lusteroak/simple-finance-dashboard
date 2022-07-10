import React from 'react';
import styled from 'styled-components';

import SideBarNavigationLogo from './SideBarNavigationLogo';
import SideBarNavigationUser from './SideBarNavigationUser';
import { SideBarElements } from './SideBarElements';

const Text = styled.div`
  font-size: 16px;
  color: #000000;
  font-family: 'Cairo', sans-serif;
  font-weight: 700;
`;

const Icon = styled.div`
  font-size: 22px;
  color: #000000;
  font-family: 'Cairo', sans-serif;
  font-weight: 700;
`;

const Layout = styled.div`
  width: 200px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-right: solid 1px #c8c9c3;
`;

const IconTitleLayout = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem;
  gap: 2rem;
  width: 10rem;
  position: relative;
`;

function SideBarNavigation() {
  return (
    <Layout>
      <SideBarNavigationLogo />
      {SideBarElements.map(({ navigate, icon }) => (
        <IconTitleLayout>
          <Icon>{icon}</Icon>
          <Text>{navigate}</Text>
        </IconTitleLayout>
      ))}
      <SideBarNavigationUser name='Bob' />
    </Layout>
  );
}

export default SideBarNavigation;
