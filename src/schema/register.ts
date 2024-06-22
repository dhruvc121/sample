import * as yup from "yup";

export const registerSchema = yup.object().shape({
  username: yup.string().min(5).required("Required"),
  password: yup.string().min(6).required("Required"),
  cpassword: yup.string().oneOf([yup.ref('password')])
});