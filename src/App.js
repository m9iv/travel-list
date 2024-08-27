const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Headphones", quantity: 1, packed: false },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🏕️ Far Away 🎒</h1>;
}

function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 👣 trip?</h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Item" />
      <button>Add</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      {initialItems.length === 0 ? (
        <span>
          Add some items 👆 <br /> And you will see it right here.
        </span>
      ) : (
        <ul>
          {initialItems.map((item, i) => (
            <Item item={item} key={i} />
          ))}
        </ul>
      )}
    </div>
  );
}

function Item({ item }) {
  console.log(item);
  return (
    <li>
      <input type="checkbox" defaultChecked={item.packed} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.description} ({item.quantity})
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <span>
        ✌️ You have X items on your list, and you already packed X (X%)
      </span>
    </footer>
  );
}
