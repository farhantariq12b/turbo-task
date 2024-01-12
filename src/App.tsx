import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './views/login'
import PrivateRoute from './components/shared/PrivateRoute'
import Header from './components/shared/Header'
import { useAuth0 } from '@auth0/auth0-react'
import Loader from './components/Loader'
import './App.css';
import { Box } from '@mui/material'
import Deliverables from './views/deliverables'
import CreateDeliverable from './views/create-deliverable'

const App: React.FC = () => {
  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loader />
  }

  return (
      <Box
        component="main" 
        sx={{ width: `calc(100% - ${280}px)`, ml: `${280}px` }}
      >
        <Header />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route
            path="/deliverables"
            element={
              <PrivateRoute>
                <Deliverables />
              </PrivateRoute>
            }
          />
          <Route
            path="/create-deliverables"
            element={
              <PrivateRoute>
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
