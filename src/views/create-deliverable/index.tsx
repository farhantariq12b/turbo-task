import { Box } from '@mui/material'
import React from 'react'
import Preview from '../../components/preview'
import CreateDeliverableForm from '../../components/CreateDeliverableForm'
import Footer from '../../components/shared/Footer'
import { Formik } from 'formik'
import { createDeliverableSchema } from '../../schema'
import { CreateDeliverableFormInterface } from '../../interfaces/deliverables'

const initialValues: CreateDeliverableFormInterface = {
  deliverableName: '',
  activitiesList: '',
  price: 0,
  shortTermNextSteps: '',
};

const CreateDeliverable: React.FC = () => {
  const onSubmit = (values: CreateDeliverableFormInterface) => {
    // Handle form submission logic here
    alert(`Form data submitted: ${JSON.stringify(values)}`);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={createDeliverableSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => (
        <>
          <Box display='flex' flexDirection='row' height='100vh'>
            <Box width='40%' borderRight='1px solid #F1F3F5' height='100%' padding='32px'>
              <CreateDeliverableForm />
            </Box>
            <Box width='60%' padding='42px 140px'>
              <Preview />
            </Box>
          </Box>
          <Footer handleSubmit={handleSubmit} />
        </>

      )}
    </Formik>
  )
}

export default CreateDeliverable