import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import searchSchema from "../../Validations/Search";

function Searchbar() {
  const navigate = useNavigate();
  return (
    <Formik
      onSubmit={(values) => {
        if(values.search !== '' && values.search.length <= 20){
            navigate(`/search?q=${values.search}`);
        }
        
      }}
      initialValues={{
        search: "",
      }}
      validationSchema={searchSchema}
    >
      {() => (
        <Form action="" className="flex flex-col items-center">
          <Field
            placeholder='Search'
            className="outline-none  px-2 py-1 border-2 rounded-2xl border-[#c86305] bg-transparent text-white"
            name="search"
            type="text"
          />
          <ErrorMessage name="search" >
            {(error) => <span className="text-[#fe6a04] text-sm">{error}</span>}
            
          </ErrorMessage>
        </Form>
      )}
    </Formik>
  );
}

export default Searchbar;
