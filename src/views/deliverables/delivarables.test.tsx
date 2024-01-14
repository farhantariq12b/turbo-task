import { act, render, screen, waitFor } from '@testing-library/react';
import Deliverables from '.';
import { MemoryRouter } from 'react-router-dom';
import DeliverableService from '../../services/modules/deliverable';
import { AxiosResponse } from 'axios';

describe('Deliverable component', () => {

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

  test('renders content by fetching from api', async () => {
    jest.spyOn(DeliverableService, 'getDeliverables').mockImplementation(() => Promise.resolve({
      data: {
        data: [
          { id: 1, Name: 'test', variables: [], createdBy: { icon: '/user-1.png ' }, DateCreated: '02-02-2024' },
        ],
      },
    }) as Promise<AxiosResponse<any>>);

    render(
      <MemoryRouter>
        <Deliverables />
      </MemoryRouter>
    );

    await act(async () => {
      const loaderEl = await screen.findByTestId('circular-loader')
      expect(loaderEl).toBeInTheDocument()
    })

    await act(async () => {
      await waitFor(() => screen.findByText('test'))
    })

  });

  test('renders no record found', async () => {
    jest.spyOn(DeliverableService, 'getDeliverables').mockImplementation(() => Promise.resolve({
      data: {
        data: [],
      },
    }) as Promise<AxiosResponse<any>>);

    render(
      <MemoryRouter>
        <Deliverables />
      </MemoryRouter>
    );

    await act(async () => {
      const loaderEl = await screen.findByTestId('circular-loader')
      expect(loaderEl).toBeInTheDocument()
    })
    
    await act(async () => {
      await waitFor(() => screen.findByText('No records found.'))
    })
  });
  
})
