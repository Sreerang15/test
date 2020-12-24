import React from "react";

const Layout = (props) => {
  return (
    <div>
      <a href="url">Home</a>

      {props.children}
    </div>
  );
};

export default Layout;
