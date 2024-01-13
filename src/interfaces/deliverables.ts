
export interface Deliverable {
  id: number;
  name: string;
  date: string;
  type?: string;
  profile_img?: string;
}

export interface TableProps {
  rows: Deliverable[];
  onRowClick: (row: Deliverable) => void;
}

export interface CreateDeliverableFormInterface {
  deliverableName: string;
  activitiesList: string;
  price: number;
  shortTermNextSteps: string;
}
