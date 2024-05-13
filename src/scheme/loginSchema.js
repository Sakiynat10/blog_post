import * as yup from 'yup';

const loginSchema = yup.object({
    username: yup.string().required('Required'),
    password: yup.string().min(8 , 'Must be at least 8 characters').required('Required')
})

export default loginSchema;