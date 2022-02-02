import * as yup from "yup";

export const CategorySchema = yup.object().shape({
  name: yup.string().required("Missing field name"),
  description: yup.string().required("Missing field description"),
});
