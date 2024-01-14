import { Box, Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import Preview from "../../components/preview";
import CreateDeliverableForm from "../../components/CreateDeliverableForm";
import Footer from "../../components/shared/Footer";
import { Formik } from "formik";
import {
  CreateDeliverableFormInterface,
  Deliverable,
} from "../../interfaces/deliverables";
import { useParams } from "react-router-dom";
import DeliverableService from "../../services/modules/deliverable";
import Loader from "../../components/Loader";
import { generateValidationSchemaAndInitialValues } from "../../utils";

const CreateDeliverable: React.FC = () => {
  const { id: deliverableId } = useParams();
  const [deliverable, setDeliverable] = useState<Deliverable | null>(null);
  const [errorSnackbarOpen, setErrorSnackbarOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [validationSchema, setValidationSchema] = useState({})
  const [initialValues, setInitialValues] = useState({})

  const fetchDeliverableById = async () => {
    setLoading(true);
    try {
      console.log(deliverableId, 'sdkjfhadsljkfhj')
      const response = await DeliverableService.getDeliverableById(
        Number(deliverableId)
      );
      const { data } = response.data;
      
      const { initialValues: dynamicInitialValues, validationSchema: dynamicValidationSchema } = generateValidationSchemaAndInitialValues(data.variables);

      setInitialValues(dynamicInitialValues);
      setValidationSchema(dynamicValidationSchema);

      setDeliverable(data || undefined);
    } catch (error) {
      console.error("Error fetching deliverable by ID:", error);
      setErrorSnackbarOpen(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (deliverableId) {
      fetchDeliverableById();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deliverableId]);

  const handleSnackbarClose = () => {
    setErrorSnackbarOpen(false);
  };

  const onSubmit = (values: CreateDeliverableFormInterface) => {
    // Handle form submission logic here
    alert(`Form data submitted: ${JSON.stringify(values)}`);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          enableReinitialize
          validateOnChange
          onSubmit={onSubmit}
        >
          {({ handleSubmit }) => (
            <>
              <Box display="flex" flexDirection="row" height="100%">
                <Box
                  width="40%"
                  borderRight="1px solid #F1F3F5"
                  height="100%"
                  padding="32px"
                >
                  <CreateDeliverableForm variables={deliverable?.variables} />
                </Box>
                <Box width="60%" padding="42px 140px">
                  <Preview />
                </Box>
              </Box>
              <Footer handleSubmit={handleSubmit} />
            </>
          )}
        </Formik>
      )}

      <Snackbar
        open={errorSnackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message="Error fetching deliverable data."
      />
    </>
  );
};

export default CreateDeliverable;
