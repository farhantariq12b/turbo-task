import React, { useEffect, useMemo, useState } from 'react'
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
  // TODO: I have added frontend filtering but it should from server side.
  const [search, setSearch] = useState<string>('')

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
      console.error('Error fetching deliverables:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchDeliverables();
  }, [])

  const filteredDeliverables = useMemo(() => {
    if (!search) {
      return deliverables;
    }

    return deliverables.filter((deliverable) =>
      deliverable.Name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, deliverables]);

  return (
    <Box margin='32px' display='flex' flexDirection='column'>
      <SearchInput label='Search' onSearch={(value) => setSearch(value)} />
      <DataTable rows={filteredDeliverables} onRowClick={handleRowClick} loading={loading} />
    </Box>
  )
}

export default Deliverables