import React from "react";
// import "./itemStyles.css";

// React Component to display individual item
const Item = ({ name, category }: any) => (
  <div className="item-container text-white">
    <div>
      <span className="item-label">Name:</span>
      {name}
    </div>
    <div>
      <span className="item-label">Category:</span>
      {category}
    </div>
  </div>
);

export default Item;