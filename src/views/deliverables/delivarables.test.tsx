import React from 'react';
import { render, screen } from '@testing-library/react';
import Deliverables from '.';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../../services/modules/deliverable', () => ({
  getDeliverables: jest.fn().mockResolvedValue({
    data: {
      data: [
        { id: 1, Name: 'test', variables: [], createdBy: { icon: '/user-1.png ' }, DateCreated: '02-02-2024' },
      ],
    },
  }),
}));


test('renders deliverables', () => {
  render(
    <MemoryRouter>
      <Deliverables />
    </MemoryRouter>
  );
  const searchBox = screen.queryAllByText(/Search/i);
  const nameHeader = screen.getByText(/Name/i);
  expect(searchBox[0]).toBeInTheDocument();
  expect(nameHeader).toBeInTheDocument();
});

jest.mock('../../services/modules/deliverable', () => ({
  getDeliverables: jest.fn().mockResolvedValue({
    data: {
      data: [
        { id: 1, Name: 'test', variables: [], createdBy: { icon: '/user-1.png ' }, DateCreated: '02-02-2024' },
      ],
    },
  }),
}));

test('renders content by fetching from api', () => {
  render(
    <MemoryRouter>
      <Deliverables />
    </MemoryRouter>
  );
  const searchBox = screen.queryAllByText(/Search/i);
  const nameHeader = screen.getByText(/Name/i);
  expect(searchBox[0]).toBeInTheDocument();
  expect(nameHeader).toBeInTheDocument();
});
