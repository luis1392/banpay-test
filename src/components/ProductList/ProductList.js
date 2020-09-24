import React from "react";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import * as productActions from "../../redux/actions/product";
import * as shoppingCartActions from "../../redux/actions/shoppingCart";

import { Row, Col } from "../../styles/Grid";
import { BlockProduct } from "../../styles/Product";
import { ButtonPrimary, ButtonClose } from "../../styles/Buttons";
import TableShoppingCart from "../TableShoppingCart";

const ProductList = (props) => {
  console.log(props);
  const handlerAddToCart = async (item) => {
    const newItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      inventory: item.inventory,
      quantity: 1,
    };
    await props.addToCart(newItem);
  };

  const handlerDeleteToCart = async (item) => {
    const newItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      inventory: item.inventory,
      quantity: 1,
    };
    await props.deleteToCart(newItem);
  };
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
            <ButtonPrimary
              type="button"
              onClick={() => handlerAddToCart(element)}
            >
              Agregar al carrito
            </ButtonPrimary>
            <ButtonClose
              type="button"
              onClick={() => handlerDeleteToCart(element)}
            >
              Quitar del carrito
            </ButtonClose>
          </BlockProduct>
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
  newProduct: productActions.newProduct,
  addToCart: shoppingCartActions.addToCart,
  deleteToCart: shoppingCartActions.deleteToCart,
};

export default withRouter(connect(mapStateToProps, actions)(ProductList));
