import React from "react";
import { withRouter } from "react-router-dom";

import { BlockProduct } from "../../styles/Product";
import { ButtonPrimary, ButtonClose } from "../../styles/Buttons";

import { connect } from "react-redux";
import * as productActions from "../../redux/actions/product";
import * as shoppingCartActions from "../../redux/actions/shoppingCart";

const ProductItem = (props) => {
  const handlerAddToCart = async (item) => {
    const newItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      inventory: item.inventory,
      quantity: 1,
    };
    const filterItem = props.productReducer.products.find(
      (product) => product.id === item.id
    );
    if (filterItem.inventory > 0) {
      await props.addToCart(newItem);
      await props.removeToInventory(newItem);
    }
  };

  const handlerDeleteToCart = async (item) => {
    const newItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      inventory: item.inventory,
      quantity: 1,
    };

    if (props.shoppingCartReducer.shoppingCart !== null) {
      const filterItemCart = props.shoppingCartReducer.shoppingCart.find(
        (product) => product.id === item.id
      );
      if (filterItemCart.quantity > 0) {
        await props.deleteToCart(newItem);
        await props.addToInventory(newItem);
      }
    }
  };
  return (
    <BlockProduct>
      <img src="https://picsum.photos/200" alt="producto" />
      <span>{props.product.name}</span>
      <span>Precio: ${props.product.price}</span>
      <span>Cantidad disponible: {props.product.inventory}</span>
      <ButtonPrimary
        type="button"
        onClick={() => handlerAddToCart(props.product)}
      >
        Agregar al carrito
      </ButtonPrimary>
      <ButtonClose
        type="button"
        onClick={() => handlerDeleteToCart(props.product)}
      >
        Quitar del carrito
      </ButtonClose>
    </BlockProduct>
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

export default withRouter(connect(mapStateToProps, actions)(ProductItem));
