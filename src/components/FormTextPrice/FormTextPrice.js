import React from "react";
import { Field, ErrorMessage } from "formik";
import { FormGroup } from "../../styles/Forms";

const FormTextPrice = () => {
  return (
    <FormGroup>
      <label htmlFor="price">Precio</label>
      <Field type="text" name="price" className="form-control" />
      <ErrorMessage
        name="price"
        component="div"
        className="invalid-feedback error-message"
      />
    </FormGroup>
  );
};

export default FormTextPrice;
