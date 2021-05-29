import { useState } from "react";
import "./styles.css";

export default function App() {
  const [set, setvalue] = useState("");

  function addvalue(event) {
    const newvalue = event.target.value;
    setvalue(newvalue);
  }
  const [items, setitems] = useState([]);

  function click() {
    setitems((prev) => {
      return [set, ...prev];
    });
    setvalue("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={addvalue} value={set} type="text" />
        <button onClick={click}>Add</button>
        <ul>
          {items.map((todoItem) => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
