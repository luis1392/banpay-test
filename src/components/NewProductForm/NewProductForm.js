import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import * as productActions from "../../redux/actions/product";

import { ButtonPrimary } from "../../styles/Buttons";
import { BlockForm } from "../../styles/Forms";

import * as Yup from "yup";
import { Formik, Form } from "formik";
import FormTextName from "../../components/FormTextName";
import FormTextPrice from "../../components/FormTextPrice";
import FormTextInventory from "../../components/FormTextInventory";

// Form validations.
const createProductSchema = Yup.object({
  name: Yup.string().required("Esté campo es obligatorio"),
  price: Yup.number()
    .required("Esté campo es obligatorio")
    .positive("El valor no puede ser negativo")
    .integer(),
  inventory: Yup.number()
    .required("Esté campo es obligatorio")
    .positive("El valor no puede ser negativo")
    .integer(),
});

const NewProductForm = (props) => {
  const [productCreated, setProductCreated] = useState(false);
  const newProduct = async (values) => {
    const product = {
      id: "_" + Math.random().toString(36).substr(2, 9),
      name: values.name,
      price: parseInt(values.price),
      inventory: parseInt(values.inventory),
    };
    await props.newProduct(product);
  };

  return (
    <BlockForm>
      {productCreated && (
        <div className="alert alert-success">Producto agregado</div>
      )}
      <Formik
        initialValues={{
          name: "",
          price: "",
          inventory: "",
        }}
        validationSchema={createProductSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          await newProduct(values);
          setSubmitting(false);
          setProductCreated(true);
          resetForm({
            values: "",
          });
        }}
      >
        {({ values, isSubmitting }) => (
          <Form>
            <FormTextName />

            <FormTextPrice />

            <FormTextInventory />

            <ButtonPrimary type="submit" disabled={isSubmitting}>
              Nuevo producto
            </ButtonPrimary>
          </Form>
        )}
      </Formik>
    </BlockForm>
  );
};

const mapStateToProps = ({ productReducer }) => {
  return {
    productReducer,
  };
};
const actions = {
  newProduct: productActions.newProduct,
};

export default withRouter(connect(mapStateToProps, actions)(NewProductForm));
