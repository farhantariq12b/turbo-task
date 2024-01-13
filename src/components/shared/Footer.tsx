import { Box, Button, Paper } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

interface FooterInterface {
  handleSubmit: () => void
}

const Footer: React.FC<FooterInterface> = ({ handleSubmit }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/deliverables')
  }

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
      <Box display='flex' padding='24px 32px' justifyContent='space-between' borderBottom='1px solid #F1F3F5'>
        <Button onClick={goBack}>Back</Button>
        <Button onClick={handleSubmit} variant='contained' sx={{ background: '#2B579A', borderRadius: '8px', padding: '10px 12px' }}>Generate</Button>
      </Box>
    </Paper>
  )
}

export default Footer