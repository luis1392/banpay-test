import React from "react";

import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <NavLink className="navbar-brand" to="/productos">
        <img
          src="https://banpay.com/dist/img/banpay/logo.png"
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt="BanPay"
          loading="lazy"
        />
      </NavLink>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-link active" to="/productos">
            Listado de productos <span className="sr-only">(current)</span>
          </NavLink>
          <NavLink className="nav-link" to="/nuevo-producto">
            Nuevo Producto
          </NavLink>
          <NavLink className="nav-link" to="/carrito-de-compras">
            <img
              src="https://previews.123rf.com/images/puruan/puruan1702/puruan170201699/71631741-icono-de-carrito-de-compras-en-color-de-tono-d%C3%BAo-comprar-ecommerce.jpg"
              width="50"
              height="50"
              alt="Carrito de compras"
            />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
