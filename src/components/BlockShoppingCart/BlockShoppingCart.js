import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as shoppingCartActions from "../../redux/actions/shoppingCart";

import { ContainerTable } from "../../styles/Product";

import TableShoppingCart from "../TableShoppingCart";

const BlockShoppingCart = (props) => {
  // conditional render to validate if the cart is empty
  if (!props.shoppingCartReducer.shoppingCart) {
    return <ContainerTable>No hay productos en el carrito</ContainerTable>;
  }

  return (
    <>
      <TableShoppingCart />
    </>
  );
};

const mapStateToProps = ({ shoppingCartReducer }) => {
  return {
    shoppingCartReducer,
  };
};

export default withRouter(connect(mapStateToProps)(BlockShoppingCart));
