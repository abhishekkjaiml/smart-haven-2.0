import { Route, Routes, Navigate } from "react-router-dom";

import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";

import SidebarLayout from "./layout/SidebarLayout";

import RoomsPage from "./pages/RoomsPage";
import SettingsPage from "./pages/SettingsPage";
import DashboardPage from "./pages/DashboardPage";

import useAuth from "./hooks/useAuth";
import TermsConditionPage from "./pages/TermsConditionPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import RoomsDetails from "./pages/RoomsDetails";

const App = () => {

  const {isDummyUser, isLoggedIn, authLoading, logout} = useAuth()



  // Auth Loading

  if(authLoading){
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f5f8fc]">

        <div className="flex flex-col items-center gap-4">

          <div className="w-10 h-10 border-4 border-slate-200 border-t-blue-600 rounded-full animate-spin" />

          <p className="m-0 text-sm font-medium text-slate-500">
            Loading SmartHaven...
          </p>

        </div>

      </div>
    );
  }

  return (
    <Routes>
      <Route path="/auth/login" element={
        isLoggedIn ? (<Navigate to='/dashboard' replace />) :( <LoginPage />)
      } />

      <Route  path="/auth/signup" element={
        isLoggedIn ? (<Navigate to='/dashboard' replace />) : (<SignupPage />)
      } />
      
      {/* Protected Routes */}

      <Route  element={
        isLoggedIn ? (<SidebarLayout />) : (<Navigate to='/auth/login'  replace />)
      }>
      
        <Route path="/dashboard" element={<DashboardPage  isDummyUser={isDummyUser} />} />
        <Route path="/rooms" element={<RoomsPage />} />
        <Route path="/rooms/:roomId/" element={<RoomsDetails />} />
        <Route path="/settings" element={<SettingsPage />} />

        <Route  path="*"  element={
          <Navigate to={isLoggedIn ? '/dashboard' : '/auth/login'}  replace />
        } />
      </Route>

      <Route  path="/terms" element={<TermsConditionPage />}  />
      <Route  path="/privacy-policy" element={<PrivacyPolicyPage />}  />
      
    </Routes>
  );
};

export default App;
