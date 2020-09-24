import React from "react";
import { Container, Row, Col } from "../../styles/Grid";

import BlockShoppingCart from "../BlockShoppingCart";

const ContainerShoppingCart = () => {
  return (
    <Container>
      <Row>
        <Col xl="12" lg="12" md="12" sm="12">
          <BlockShoppingCart />
        </Col>
      </Row>
    </Container>
  );
};

export default ContainerShoppingCart;
