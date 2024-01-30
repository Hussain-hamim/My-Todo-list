import { useState } from "react";
import { foods, filterItems } from "./components/data";

export default function FilterableList() {
  const [query, setQuery] = useState("");
  const results = filterItems(foods, query);

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <>
      <SearchBar query={query} handleChange={handleChange} />
      <hr />
      <List items={results} />
    </>
  );
}

function SearchBar({ query, handleChange }) {
  return (
    <label>
      Search:{" "}
      <input
        placeholder="Search Food Name"
        value={query}
        onChange={handleChange}
      />
    </label>
  );
}

function List({ items }) {
  return (
    <table border={2} style={{ borderCollapse: "collapse" }}>
      <tbody>
        <th> Name</th>
        <th> Description</th>
        {items.map((food) => (
          <tr key={food.id}>
            <td style={{ paddingRight: "10px", color: "yellowgreen" }}>
              {food.name}
            </td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}


 export function filterItems(items, query) {
  query = query.toLowerCase();
  return items.filter((item) =>
    item.name.split(" ").some((word) => word.toLowerCase().startsWith(query))
  );
}