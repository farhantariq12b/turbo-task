import React from 'react';
import { Form, Field, useFormikContext } from 'formik';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import { Typography } from '@mui/material';
import { CreateDeliverableFormInterface } from '../../interfaces/deliverables';

const CreateDeliverableForm: React.FC = () => {
  const { values, touched, errors, handleChange } = useFormikContext<CreateDeliverableFormInterface>();

  return (
    <Form>
      <Box gap='32px' display='flex' flexDirection='column'>
        <Box gap='8px' display='flex' flexDirection='column'>
          <Typography variant='h5' fontSize='18px'>Fill in deliverable variables</Typography>
          <Typography variant='body2' fontSize='14px' color='textSecondary'>Further instructions in one line</Typography>
        </Box>

        <Box gap='8px' display='flex' flexDirection='column'>
          <InputLabel htmlFor="deliverableName">Deliverable Name</InputLabel>
          <Field
            as={TextField}
            fullWidth
            id="deliverableName"
            name="deliverableName"
            placeholder="Enter Deliverable Name"
            value={values.deliverableName}
            onChange={handleChange}
            error={touched.deliverableName && Boolean(errors.deliverableName)}
            helperText={touched.deliverableName && errors.deliverableName}
          />
        </Box>

        <Box gap='8px' display='flex' flexDirection='column'>
          <InputLabel htmlFor="activitiesList">Activities List</InputLabel>
          <Field
            as={TextField}
            fullWidth
            multiline
            id="activitiesList"
            name="activitiesList"
            placeholder="Enter Activities List"
            value={values.activitiesList}
            onChange={handleChange}
            error={touched.activitiesList && Boolean(errors.activitiesList)}
            helperText={touched.activitiesList && errors.activitiesList}
          />
        </Box>

        <Box gap='8px' display='flex' flexDirection='column'>
          <InputLabel htmlFor="price">Price</InputLabel>
          <Field
            as={TextField}
            fullWidth
            id="price"
            name="price"
            type="number"
            placeholder="Enter Price"
            value={values.price}
            onChange={handleChange}
            error={touched.price && Boolean(errors.price)}
            helperText={touched.price && errors.price}
          />
        </Box>

        <Box gap='8px' display='flex' flexDirection='column'>
          <InputLabel htmlFor="shortTermNextSteps">Short Term Next Steps</InputLabel>
          <Field
            as={TextField}
            fullWidth
            multiline
            id="shortTermNextSteps"
            name="shortTermNextSteps"
            placeholder="Enter Short Term Next Steps"
            value={values.shortTermNextSteps}
            onChange={handleChange}
            error={touched.shortTermNextSteps && Boolean(errors.shortTermNextSteps)}
            helperText={touched.shortTermNextSteps && errors.shortTermNextSteps}
          />
        </Box>
      </Box>
    </Form>
  );
};

export default CreateDeliverableForm;
