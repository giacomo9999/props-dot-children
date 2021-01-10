import React from "react";

const Container = (props) => {
  return (
    <div>
      {props.children}
      <h3>MORE TEXT</h3>
    </div>
  );
};

export default Container;
