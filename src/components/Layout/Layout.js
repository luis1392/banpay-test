import React from "react";

import Header from "../Header";

const Layout = (props) => {
  return (
    <>
      <Header />
      <main>
        <div>{props.children}</div>
      </main>
    </>
  );
};

export default Layout;
