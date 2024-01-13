import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './views/login'
import PrivateRoute from './components/shared/PrivateRoute'
import Sidebar from './components/shared/Sidebar'
import { useAuth0 } from '@auth0/auth0-react'
import Loader from './components/Loader'
import './App.css';
import { Box } from '@mui/material'
import Deliverables from './views/deliverables'
import CreateDeliverable from './views/create-deliverable'
import Header from './components/shared/Header'
import { SIDEBAR_WIDTH } from './constants'

const App: React.FC = () => {
  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <Box component="main">
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route
          path="/deliverables"
          element={
            <PrivateRoute>
              <Box sx={{ width: `calc(100% - ${SIDEBAR_WIDTH}px)`, ml: `${SIDEBAR_WIDTH}px` }}>
                <Sidebar />
                <Deliverables />
              </Box>
            </PrivateRoute>
          }
        />
        <Route
          path="/create-deliverables/:id"
          element={
            <PrivateRoute>
              <Header />
              <CreateDeliverable />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="deliverables" replace />} />
      </Routes>
    </Box>
  )
}

export default App;
