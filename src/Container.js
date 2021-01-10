import React from "react";

const Container = (props) => {
  return (
    <div>
      {/* comment next line out to understand basic principle */}
      {props.children}
      <h3>MORE TEXT</h3>
    </div>
  );
};

export default Container;
