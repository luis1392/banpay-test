import React, { useState, useEffect, useCallback } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as shoppingCartActions from "../../redux/actions/shoppingCart";

import { ContainerTable } from "../../styles/Product";

const TableShoppingCart = (props) => {
  const [total, setTotal] = useState(0);

  const totalPrice = useCallback(async () => {
    let total = 0;
    props.shoppingCartReducer.shoppingCart.forEach((element) => {
      total = total + element.price * element.quantity;
    });
    setTotal(total);
  }, [props.shoppingCartReducer.shoppingCart]);

  useEffect(() => {
    // 1.0 Load total price.
    totalPrice();
    // 2.0 Will unmount.
    return () => {};
  }, [totalPrice]);

  const renderTableItem = () => {
    // Generate table item.
    const product = props.shoppingCartReducer.shoppingCart.map((element) => {
      return (
        <tr key={element.id}>
          <th scope="row">{element.name}</th>
          <td>{element.quantity}</td>
          <td>$ {element.price}</td>
          <td>
            {element.quantity} x ${element.price} = $
            {element.quantity * element.price}
          </td>
        </tr>
      );
    });
    return product;
  };

  return (
    <ContainerTable>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Producto</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Precio unitario</th>
            <th scope="col">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {renderTableItem()}
          <tr>
            <th scope="row"></th>
            <td></td>
            <td></td>
            <td>Total = ${total}</td>
          </tr>
        </tbody>
      </table>
    </ContainerTable>
  );
};

const mapStateToProps = ({ shoppingCartReducer }) => {
  return {
    shoppingCartReducer,
  };
};
const actions = {
  addToCart: shoppingCartActions.addToCart,
  deleteToCart: shoppingCartActions.deleteToCart,
};

export default withRouter(connect(mapStateToProps, actions)(TableShoppingCart));
