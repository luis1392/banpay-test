import React from "react";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import * as productActions from "../../redux/actions/product";
import * as shoppingCartActions from "../../redux/actions/shoppingCart";

import { Row, Col } from "../../styles/Grid";
import { BlockProduct } from "../../styles/Product";

const ProductList = (props) => {
  console.log(props);
  const renderProductList = () => {
    // Generate product item.
    const product = props.productReducer.products.map((element) => {
      return (
        <Col xl="4" lg="4" md="4" sm="4" key={element.id}>
          <BlockProduct>
            <img src="https://picsum.photos/200" alt="producto" />
            <span>{element.name}</span>
            <span>Precio: ${element.price}</span>
            <span>Cantidad disponible: {element.inventory}</span>
          </BlockProduct>
        </Col>
      );
    });
    return product;
  };
  return <Row>{renderProductList()}</Row>;
};

const mapStateToProps = ({ productReducer, shoppingCartReducer }) => {
  return {
    productReducer,
    shoppingCartReducer,
  };
};
const actions = {
  newProduct: productActions.newProduct,
  addToCart: shoppingCartActions.addToCart,
  deleteToCart: shoppingCartActions.deleteToCart,
};

export default withRouter(connect(mapStateToProps, actions)(ProductList));
