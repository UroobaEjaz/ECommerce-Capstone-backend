import React, { useState } from "react";
import Card from "../components/Card";

const Search = () => {
  const [item, setItem] = useState([]);
  const [name, setName] = useState("");
  const getItems = async (e) => {
    e.preventDefault();
    if (!name) {
      return (
        <div>
          <p>Please enter the name of the item</p>
        </div>
      );
    }
    try {
      const response = await fetch("/api/items/getByName", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });

      const data = await response.json();
      setItem(data);
      console.log(data);
    } catch (error) {
      console.log("error getting items", error);
    }
  };
  return (
    <div>
      <form onSubmit={getItems}>
        <input
          type="text"
          placeholder="Enter the name of the item"
          onChange={(e) => setName(e.target.value)}
          className="border rounded-md border-gray-300 p-2 m-2"
        />
        <button type="submit">Search</button>
      </form>
      <Card items={item} />
    </div>
  );
};

export default Search;
