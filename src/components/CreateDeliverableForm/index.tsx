import React from "react";
import { Form, Field, useFormikContext } from "formik";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import { Typography } from "@mui/material";
import {
  CreateDeliverableFormInterface,
  DeliverableVariable,
} from "../../interfaces/deliverables";

interface CreateDeliverableFormProps {
  variables?: DeliverableVariable[];
}

const isVariableName = (
  key: string,
  variables: DeliverableVariable[]
): key is keyof CreateDeliverableFormInterface => {
  return (
    key in
    variables
      .map((variable) => variable.fieldValue)
      .reduce((a, c) => ({ ...a, [c]: c }), {})
  );
};

const CreateDeliverableForm: React.FC<CreateDeliverableFormProps> = ({
  variables,
}) => {
  const { values, touched, errors, handleChange } =
    useFormikContext<CreateDeliverableFormInterface>();

  return (
    <Form>
      <Box gap="32px" display="flex" flexDirection="column">
        <Box gap="8px" display="flex" flexDirection="column">
          <Typography variant="h5" fontSize="18px">
            Fill in deliverable variables
          </Typography>
          <Typography variant="body2" fontSize="14px" color="textSecondary">
            Further instructions in one line
          </Typography>
        </Box>

        {variables?.map((variable) => (
          <Box
            key={variable.Name}
            gap="8px"
            display="flex"
            flexDirection="column"
          >
            <InputLabel htmlFor={variable.Name}>{variable.Name}</InputLabel>
            <Field
              as={TextField}
              fullWidth
              id={variable.Name}
              name={variable.fieldValue}
              type={variable.type === "number" ? "number" : "text"}
              placeholder={variable.placeholder}
              value={
                isVariableName(variable.fieldValue, variables)
                  ? values[variable.fieldValue]
                  : ""
              }
              onChange={handleChange}
              error={
                isVariableName(variable.fieldValue, variables) &&
                touched[variable.fieldValue] &&
                Boolean(errors[variable.fieldValue])
              }
              helperText={
                isVariableName(variable.fieldValue, variables) &&
                touched[variable.fieldValue] &&
                errors[variable.fieldValue]
              }
            />
          </Box>
        ))}
      </Box>
    </Form>
  );
};

export default CreateDeliverableForm;
