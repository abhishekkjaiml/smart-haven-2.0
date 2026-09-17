import React from 'react'
import Sidebar from './components/Sidebar'
import LoginPage from './pages/auth/LoginPage'
import { Route, Routes } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'

const App = () => {
  return (
    <div>
      <Sidebar />
      <Routes>
        <Route  path='/auth/login'  element={<LoginPage />} />
        <Route  path='/dashboard' element={<DashboardPage />}  />
      </Routes>
    </div>
  )
}

export default App