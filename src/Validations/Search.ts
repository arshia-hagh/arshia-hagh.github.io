import * as Yup from 'yup'
const searchSchema = Yup.object().shape({
    search: Yup.string().min(0).max(20,'length greater than 20').optional()
})
export default searchSchema