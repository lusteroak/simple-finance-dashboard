import React from "react";
import styled from "styled-components";
import { FaHome, FaTrophy, 
    FaUniversity, FaUserAlt,
    FaPoll, FaTools } from "react-icons/fa"

const Text = styled.div`
  font-size: 16px;
  color: #000000;
`;

const Layout = styled.div`
  width: 40vh;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-right: solid 2px gray;
`;

const IconTitleLayout = styled.div`
    display: flex;
    flex-direction: row;
    margin: 1rem;
    gap: 2rem;
    width: 10rem;
    position: relative;
    

`

const navigation_elements = [
  {
    id: 1,
    navigate: "Home",
    icon: <FaHome />,
  },
  {
    id: 2,
    navigate: "Projects",
    icon: <FaTrophy />,
  },
  {
    id: 3,
    navigate: "Billings",
    icon: <FaUniversity />,
  },
  {
    id: 4,
    navigate: "Team Members",
    icon: <FaUserAlt />,
  },
  {
    id: 5,
    navigate: "Stats",
    icon: <FaPoll />,
  },
  {
    id: 6,
    navigate: "Settings",
    icon: <FaTools />,
  },
];

function SideBarNavigation() {
  return (
    <Layout>
      {navigation_elements.map(({ navigate, icon }) => (
        <IconTitleLayout>
            <Text>{icon}</Text>
            <Text>{navigate}</Text>
        </IconTitleLayout>
      ))}
    </Layout>
  );
}

export default SideBarNavigation;
