import * as yup from "yup";

export const formSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("This field required"),
  password: yup
    .string()
    .required("This field required")
    .min(5, "Password must be at least 5 character")
    .max(10, "Password can not be longer than 10 character"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")])
    .required("This field required"),
});
