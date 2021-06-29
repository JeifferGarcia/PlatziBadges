import React, { Fragment } from "react";
import Navbar from "./Navbar";

function Layout(props) {
  const children = props.children;
  return (
    <Fragment>
      <Navbar />
      {children}
    </Fragment>
  );
}

export default Layout;
