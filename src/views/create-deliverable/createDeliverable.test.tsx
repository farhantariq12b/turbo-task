import { act, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import CreateDeliverable from ".";
import DeliverableService from "../../services/modules/deliverable";
import { AxiosResponse } from "axios";
import 'intersection-observer';

describe('Create deliverable component', () => {

  test('renders create deliverable', async () => {
    jest.spyOn(DeliverableService, 'getDeliverableById').mockImplementation(() => Promise.resolve({
      data: {
        data: { id: 1, Name: 'test', variables: [], createdBy: { icon: '/user-1.png ' }, DateCreated: '02-02-2024' },
      },
    }) as Promise<AxiosResponse<any>>);

    render(
      <MemoryRouter initialEntries={['/create-deliverable/1']}>
        <Routes>
          <Route path="/create-deliverable/:id" element={<CreateDeliverable />} />
        </Routes>
      </MemoryRouter>
    );

    await act(async () => {
      const loaderEl = await screen.findByTestId('circular-loader')
      expect(loaderEl).toBeInTheDocument()
    })

    await act(async () => {
      await waitFor(() => screen.findByText('Preview'));
    })
  });

  test('renders create deliverable', async () => {
    jest.spyOn(DeliverableService, 'getDeliverableById').mockImplementation(() => Promise.resolve({
      data: {
        data: {
          id: 1, Name: 'test', variables:
            [
              {
                "placeholder": "Please enter the activities list",
                "Name": "ActivitiesList",
                "fieldValue": "activitiesList",
                "type": "text",
                "required": true
              },
              {
                "placeholder": "Please enter the amount",
                "Name": "Price",
                "fieldValue": "price",
                "type": "number",
                "minLength": 2000,
                "required": true
              },
              {
                "placeholder": "Please enter the short terms",
                "Name": "ShortTermNextSteps",
                "fieldValue": "shortTermNextSteps",
                "type": "text",
                "required": true
              }
            ]
          , createdBy: { icon: '/user-1.png ' }, DateCreated: '02-02-2024'
        },
      },
    }) as Promise<AxiosResponse<any>>);

    render(
      <MemoryRouter initialEntries={['/create-deliverable/1']}>
        <Routes>
          <Route path="/create-deliverable/:id" element={<CreateDeliverable />} />
        </Routes>
      </MemoryRouter>
    );

    await act(async () => {
      const loaderEl = await screen.findByTestId('circular-loader')
      expect(loaderEl).toBeInTheDocument()
    })

    await act(async () => {
      await waitFor(() => screen.findByText('Preview'));
    })

    await act(async () => {
      const ShortTermNextStepsEl = await screen.findByTestId('shortTermNextSteps');
      const activitiesListEL = await screen.findByTestId('activitiesList');
      const priceEl = await screen.findByTestId('price');

      expect(ShortTermNextStepsEl).toBeInTheDocument()
      expect(priceEl).toBeInTheDocument()
      expect(activitiesListEL).toBeInTheDocument()
    })

    const deliverableNameEl = screen.queryByTestId('deliverableName');
    expect(deliverableNameEl).not.toBeInTheDocument()
  });

})