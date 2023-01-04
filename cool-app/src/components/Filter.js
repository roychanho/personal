import React, { useRef, useState } from "react";

const Filter = () => {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");

  const inputRef = useRef(null);

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  const addItem = () => {
    let value = inputRef.current.value;
    setItems((prev) => [...prev, value]);
  };

  return (
    <div className="mb-56">
      <input
        type="text"
        placeholder="search..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <input className="ml-4" type="text" placeholder="addItem" ref={inputRef} />
      <button className="bg-white mt-2 flex rounded px-4 hover:bg-black/40" onClick={addItem}>addItem</button>
      {filteredItems.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
};

export default Filter;
