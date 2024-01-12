import React from 'react'
import SearchInput from '../../components/SearchInput'
import { Box } from '@mui/material'

const Deliverables: React.FC = () => {
  return (
    <Box margin='32px' display='flex' flexDirection='column'>
      <SearchInput label='Search' onSearch={() => {}} />
      Table
    </Box>
  )
}

export default Deliverables