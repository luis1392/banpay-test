import React from "react";

import { Container, Row, Col } from "../../styles/Grid";

import ProductList from "../ProductList";

const ContainerProductsList = (props) => {
  return (
    <Container>
      <Row>
        <Col xl="12" lg="12" md="12" sm="12">
          <ProductList />
        </Col>
      </Row>
    </Container>
  );
};
export default ContainerProductsList;
