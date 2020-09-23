import React from "react";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import * as productActions from "../../redux/actions/product";
// '_' + Math.random().toString(36).substr(2, 9)
const NewProductForm = (props) => {
  console.log(props);
  return (
    <div>
      <span>el form</span>
    </div>
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
