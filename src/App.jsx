import { Route, Routes } from "react-router-dom";

import LoginPage from "./pages/auth/LoginPage";
import SidebarLayout from "./layout/SidebarLayout";
import RoomsPage from "./pages/RoomsPage";
import SettingsPage from "./pages/SettingsPage";
import DashboardPage from "./pages/DashboardPage";

const App = () => {
  return (
    <Routes>
      <Route path="/auth/login" element={<LoginPage />} />
      
      <Route element={<SidebarLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/rooms" element={<RoomsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  );
};

export default App;
