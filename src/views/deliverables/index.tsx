import React from 'react'
import SearchInput from '../../components/SearchInput'
import { Box } from '@mui/material'
import DataTable from '../../components/DataTable'
import { useNavigate } from 'react-router-dom';
import { Deliverable } from '../../interfaces/deliverables';

const rows = [
  { id: 2, name: 'Frozen yoghurt', date: '2024-01-01', profile_img: '/user-1.png' },
  { id: 2, name: 'Ice cream sandwich', date: '2024-01-01', profile_img: '/user-2.png', },
  { id: 2, name: 'Eclair', date: '2024-01-01', profile_img: '/user-3.png' },
  { id: 2, name: 'Cupcake', date: '2024-04-01',  profile_img: '/user-4.png' },
  { id: 2, name: 'Gingerbread', date: '2024-01-01', profile_img: '/user-5.png', },
  { id: 5, name: 'Gingerbread', date: '2024-01-01', type: 'powerPoint', profile_img: '/user-6.png', },
];

const Deliverables: React.FC = () => {
  const navigate = useNavigate();

  const handleRowClick = (row: Deliverable) => {
    navigate(`/create-deliverables/${row.id}`)
  }

  return (
    <Box margin='32px' display='flex' flexDirection='column'>
      <SearchInput label='Search' onSearch={() => {}} />
      <DataTable rows={rows} onRowClick={handleRowClick}/>
    </Box>
  )
}

export default Deliverables