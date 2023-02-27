import {Field} from "formik";

function FormField (props) {
  const {
    fieldName,
    fieldType,
    placeholder,
    labelTitle,
  } = props;

  return (
    <div className="formField">
      <label htmlFor={fieldName} className="form-label">{labelTitle}</label>
      <Field name={fieldName} type={fieldType} placeholder={placeholder} className="input form-input" />
    </div>
  )
}

export default FormField;
