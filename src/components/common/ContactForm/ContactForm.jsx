import { Formik, Form, ErrorMessage } from 'formik'
import {number, object, string} from 'yup'
import FormField from "../FormField";
import { contactFields } from "./fields";
import Button from "../../ui/Button";

const ONLY_NUMBERS = /^[0-9]+$/;

const validationSchema = object({
  userName: string()
    .required('Required'),
  email: string()
    .required('Required')
    .email('Invalid email format'),
  phone: string()
    .matches(ONLY_NUMBERS, 'Must be only numbers')
    .required('Required')
    .min(12)
})

function ContactForm () {
  return (
    <Formik
      initialValues={{
        userName: '',
        email: '',
        phone: '',
      }}
      onSubmit={(values) => {console.log(values)}}
      validationSchema={validationSchema}
    >
      {({isValid }) => (
        <Form className="form">
          {contactFields.length ?
            contactFields.map(field => (
                <div key={field.name}>
                  <FormField
                    fieldName={field.name}
                    fieldType={field.type}
                    placeholder={field.placeholder}
                    labelTitle={field.label}
                  />
                  <ErrorMessage component="span" name={field.name} className="form-validation" />
                </div>
              )
            ) : null
          }
          <Button type="submit" isDisabled={!isValid} text="Save" />
        </Form>
      )}
    </Formik>
  )
}

export default ContactForm;
