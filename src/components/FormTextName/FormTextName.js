import React from "react";
import { Field, ErrorMessage } from "formik";
import { FormGroup } from "../../styles/Forms";

const FormTextName = () => {
  return (
    <FormGroup>
      <label htmlFor="name">Nombre del producto</label>
      <Field
        type="text"
        name="name"
        className="form-control"
        placeholder="Nombre del producto"
      />
      <ErrorMessage
        name="name"
        component="div"
        className="invalid-feedback error-message"
      />
    </FormGroup>
  );
};

export default FormTextName;
