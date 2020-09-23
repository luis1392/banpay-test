import React from "react";
import { Container, Row, Col } from "../../styles/Grid";

import NewProductForm from "../NewProductForm";

const ContainerNewProduct = () => {
  return (
    <Container>
      <Row>
        <Col xl="12" lg="12" md="12" sm="12">
          <NewProductForm />
        </Col>
      </Row>
    </Container>
  );
};

export default ContainerNewProduct;
