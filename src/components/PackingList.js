import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onClearList,
  onDeleteItem,
  onToggleItem,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  // Sorting
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      {items.length === 0 ? (
        <span>
          Add some items 👆 <br /> And you will see it right here.
        </span>
      ) : (
        <>
          <ul>
            {sortedItems.map((item) => (
              <Item
                item={item}
                onDeleteItem={onDeleteItem}
                onToggleItem={onToggleItem}
                key={item.id}
              />
            ))}
          </ul>

          <div className="actions">
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="input">Sort by input order</option>
              <option value="description">Sort by description</option>
              <option value="packed">Sort by packed status</option>
            </select>

            <button onClick={onClearList}>Clear List</button>
          </div>
        </>
      )}
    </div>
  );
}
