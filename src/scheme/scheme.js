import * as yup from "yup"

const myPostSchema = yup.object({
    description: yup.string().required("Required"),
    title: yup.string().required("Required"),
    subtitle: yup.string().required("Required"),
  })
export default myPostSchema