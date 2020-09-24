import React from "react";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import * as productActions from "../../redux/actions/product";
import * as shoppingCartActions from "../../redux/actions/shoppingCart";

import { Row, Col } from "../../styles/Grid";
import TableShoppingCart from "../TableShoppingCart";

import ProductItem from "../ProductItem";

const ProductList = (props) => {
  const renderProductList = () => {
    // Generate product item.
    const product = props.productReducer.products.map((element) => {
      return (
        <Col xl="4" lg="4" md="4" sm="4" key={element.id}>
          <ProductItem product={element} />
        </Col>
      );
    });
    return product;
  };
  return (
    <Row>
      {props.shoppingCartReducer.shoppingCart && (
        <Col xl="12" lg="12" md="12" sm="12">
          <TableShoppingCart />
        </Col>
      )}

      {renderProductList()}
    </Row>
  );
};

const mapStateToProps = ({ productReducer, shoppingCartReducer }) => {
  return {
    productReducer,
    shoppingCartReducer,
  };
};
const actions = {
  addToInventory: productActions.addToInventory,
  removeToInventory: productActions.removeToInventory,
  addToCart: shoppingCartActions.addToCart,
  deleteToCart: shoppingCartActions.deleteToCart,
};

export default withRouter(connect(mapStateToProps, actions)(ProductList));
