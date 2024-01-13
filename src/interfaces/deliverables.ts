interface DeliverableCreatedBy {
  email: string;
  icon: string;
}

export interface DeliverableVariable {
  placeholder: string;
  Name: string;
  fieldValue: string;
  type: string;
  required: boolean;
  minLength?: number
}

export interface Deliverable {
  id?: number;
  type: string;
  Name: string;
  DateCreated: string;
  createdBy: DeliverableCreatedBy;
  variables: DeliverableVariable[];
}

export type DeliverableList = Deliverable[];

export interface TableProps {
  loading?: boolean;
  rows: Deliverable[];
  onRowClick: (row: Deliverable) => void;
}

export interface CreateDeliverableFormInterface {
  deliverableName?: string;
  activitiesList?: string;
  price?: number;
  shortTermNextSteps?: string;
}
