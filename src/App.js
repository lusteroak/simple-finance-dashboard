import SideBarNavigation from "./Components/SideBarNavigation/SideBarNavigation";
import Dashboard from './Components/Dashboard/Dashboard'
import MainLayout from "./Layout/MainLayout";

function App() {
  return (
    <MainLayout>
      <SideBarNavigation />
      <Dashboard />
    </MainLayout>
  );
}

export default App;
