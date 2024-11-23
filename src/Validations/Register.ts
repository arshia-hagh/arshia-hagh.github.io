import * as Yup from 'yup'
export const registerSchema =  Yup.object().shape({
    name: Yup.string().required('Field Is Required').min(5,'Lenght is less 5').max(20,'Lenght is bigger 5'),
    password: Yup.string().required('Field Is Required').min(10,'Lenght is less 5').max(20,'Lenght is bigger 5')
})