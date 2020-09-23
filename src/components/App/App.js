import React from "react";
import { Switch, Route } from "react-router-dom";
import { Redirect } from "react-router";

// Import pages
import ListProducts from "../../pages/ListProducts";
import NewProduct from "../../pages/NewProduct";
import NoMatch from "../../pages/NoMatch"; //page 404

const App = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/productos" />} />
      <Route exact path="/productos" component={ListProducts} />
      <Route exact path="/nuevo-producto" component={NewProduct} />
      <Route component={NoMatch} />
    </Switch>
  );
};

export default App;
