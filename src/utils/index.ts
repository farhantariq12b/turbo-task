import { DeliverableVariable } from "../interfaces/deliverables";
import * as Yup from "yup";

function generateInitials(name: string) {
  if (!name) {
    return "";
  }

  const words = name.split(" ");

  if (words.length < 2) {
    return name.slice(0, 2).toUpperCase();
  }

  const initials = words
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase());

  const result = initials.join("");

  return result;
}

const generateValidationSchemaAndInitialValues = (
  variables: DeliverableVariable[]
) => {
  let validationSchemaObject: Record<
    string,
    Yup.StringSchema | Yup.NumberSchema
  > = {};
  let initialValuesObject: Record<string, number | string> = {};

  variables.forEach((variable) => {
    const { fieldValue, type, required, minLength } = variable;

    switch (type) {
      case "text":
        validationSchemaObject[fieldValue] = required
          ? Yup.string().required("This field is required")
          : Yup.string();
        break;
      case "number":
        validationSchemaObject[fieldValue] = Yup.number().positive();

        if (required) {
          validationSchemaObject[fieldValue] = validationSchemaObject[
            fieldValue
          ].required("This field is required");
        }

        if (minLength) {
          validationSchemaObject[fieldValue] = (
            validationSchemaObject[fieldValue] as Yup.NumberSchema
          ).moreThan(minLength, "Price must be greater than 20,000");
        }

        break;

      default:
        break;
    }

    initialValuesObject[fieldValue] = type === "number" ? 0 : "";
  });

  const validationSchema = Yup.object().shape(validationSchemaObject);

  return { validationSchema, initialValues: initialValuesObject };
};

export { generateInitials, generateValidationSchemaAndInitialValues };
