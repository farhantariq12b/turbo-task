import React, { useEffect, useState } from 'react'
import SearchInput from '../../components/SearchInput'
import { Box } from '@mui/material'
import DataTable from '../../components/DataTable'
import { useNavigate } from 'react-router-dom';
import { Deliverable, DeliverableList } from '../../interfaces/deliverables';
import DeliverableService from '../../services/modules/deliverable';

const Deliverables: React.FC = () => {
  const navigate = useNavigate();
  const [deliverables, setDeliverables] = useState<DeliverableList>([]);
  const [loading, setLoading] = useState<boolean>(true);
  
  const handleRowClick = (row: Deliverable) => {
    navigate(`/create-deliverables/${row.id}`)
  }

  const fetchDeliverables = async () => {
    setLoading(true);
    try {
      const response = await DeliverableService.getDeliverables();
      const { data: deliverableData } = response?.data || {};

      setDeliverables(deliverableData || []); 
    } catch (error) {
      console.log(error);
      console.error('Error fetching deliverables:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchDeliverables();
  }, [])

  return (
    <Box margin='32px' display='flex' flexDirection='column'>
      <SearchInput label='Search' onSearch={() => {}} />
      <DataTable rows={deliverables} onRowClick={handleRowClick} loading={loading} />
    </Box>
  )
}

export default Deliverables