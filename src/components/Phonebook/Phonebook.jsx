import { Formik, Form } from "formik";

const initialValues = {
    name: '',
    number:'',
}

export const PhonebookForm = ({ title }) => {
    const handleSubmit = (values, actions) => { 
        console.log(values);
        console.log(actions);
    };
    return (
        <>
            <h2>{title}</h2>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form autoComplete="off">
                <label htmlFor="name">
                        Name
                        <input type="text" name="name"/>    
                    </label>
                    <label htmlFor="number">
                        Name
                        <input type="text" name="number"/>    
                </label>
                <button type="submit">Add contact</button>
                </Form>
                </Formik>
        </>
    )
}
