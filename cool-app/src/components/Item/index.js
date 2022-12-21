import React from "react";

const Item = ({ id, name, city, label, isAvailable }) => (
  <div className="item-container">
    <div>
      {name}
    </div>
    <div>
      {city}
    </div>
  </div>
);

export default Item;