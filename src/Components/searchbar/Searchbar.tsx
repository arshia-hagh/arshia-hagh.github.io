import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";

function Searchbar() {
  const navigate = useNavigate();
  return (
    <Formik
      onSubmit={(values) => {
        if(values.search !== ''){
            navigate(`/search?q=${values.search}`);
        }
        
      }}
      initialValues={{
        search: "",
      }}
      validate={(values) => {
        const errors = {search: ''}
        if(values.search === ''){
            errors.search = 'Error Searchbar Empty' 
        }
      }}
    >
      {() => (
        <Form action="">
          <Field
            placeholder='Search'
            className="outline-none  px-2 py-1 border-2 rounded-2xl border-[#c86305] bg-transparent text-white"
            name="search"
            type="text"
          />
          <ErrorMessage name="search" >
            {(error) => <span className="text-[#fe6a04] text-2xl">{error}</span>}
            
          </ErrorMessage>
        </Form>
      )}
    </Formik>
  );
}

export default Searchbar;
