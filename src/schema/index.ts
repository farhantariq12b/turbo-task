import * as Yup from 'yup';

export const createDeliverableSchema = Yup.object({
  deliverableName: Yup.string().required('Deliverable Name is required'),
  activitiesList: Yup.string().required('Activities List is required'),
  price: Yup.number().typeError('Price must be a number').required('Price is required'),
  shortTermNextSteps: Yup.string().required('Short Term Next Steps is required'),
});