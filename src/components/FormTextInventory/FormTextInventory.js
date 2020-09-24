import React from "react";
import { Field, ErrorMessage } from "formik";
import { FormGroup } from "../../styles/Forms";

const FormTextInventory = () => {
  return (
    <FormGroup>
      <label htmlFor="inventory">Inventario</label>
      <Field
        type="text"
        name="inventory"
        className="form-control"
        placeholder="Número de piezas disponibles"
      />
      <ErrorMessage
        name="inventory"
        component="div"
        className="invalid-feedback error-message"
      />
    </FormGroup>
  );
};

export default FormTextInventory;
