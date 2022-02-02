import * as yup from "yup";

export const VideoSchema = yup.object().shape({
  name: yup.string().required("Missing field name"),
  description: yup.string().required("Missing field description"),
  duration: yup.number().required("Missing field duration"),
  category: yup.string().required("Missing field category"),
});
